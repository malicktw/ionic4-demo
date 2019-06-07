import {Injectable} from '@angular/core';
import {Plugins} from '@capacitor/core';

/**
 * https://github.com/stewwan/capacitor-background-webview-issue/blob/master/src/app/background.service.ts
 */

const {App, BackgroundTask, LocalNotifications} = Plugins;
declare var window;

@Injectable({
    providedIn: 'root'
})
export class BackgroundService {

    constructor() {
    }

    init() {
        console.log(`task init`);
        App.addListener('appStateChange', (state) => {

            if (!state.isActive) {
                // The app has become inactive. We should check if we have some work left to do, and, if so,
                // execute a background task that will allow us to finish that work before the OS
                // suspends or terminates our app:

                const taskId = BackgroundTask.beforeExit(async () => {
                    // In this function We might finish an upload, let a network request
                    // finish, persist some data, or perform some other task

                    // Example of long task
                    const start = new Date().getTime();
                    for (let i = 0; i < 1e18; i++) {
                        if ((new Date().getTime() - start) > 20000) {
                            break;
                        }
                    }
                    // Must call in order to end our task otherwise
                    // we risk our app being terminated, and possibly
                    // being labeled as impacting battery life
                    BackgroundTask.finish({
                        taskId
                    });
                });
            }
        });
    }

    // https://github.com/stewwan/capacitor-background-webview-issue/blob/master/src/app/background.service.ts
    init2() {
        console.log(`task init`);
        const taskId = BackgroundTask.beforeExit(async () => {
            // In this function We might finish an upload, let a network request
            // finish, persist some data, or perform some other task
            const MAX_TIME = 240; // in seconds

            const timer = new window.nativeTimer();
            let i = 0;
            timer.start(
                1,
                1000,
                function() {
                    // invoked after successful start
                    console.log('start');
                },
                function(errorMessage) {
                    // invoked after unsuccessful start
                    console.log(errorMessage);
                }
            );

            timer.onTick = tick => {
                // invoked on tick

                // i++;
                // console.log("tick", i);

                if (i >= MAX_TIME) {
                    timer.stop();
                }
            };
            timer.onError = function(errorMessage) {
                // invoked after error occurs
            };
            timer.onStop = hasError => {
                // invoked after stop
                LocalNotifications.schedule({
                    notifications: [
                        {
                            title: `success`,
                            body: `background service finished`,
                            id: Date.now(),
                            schedule: {
                                at: new Date(Date.now() + 1000 * 5)
                            },
                            sound: `default`,
                            attachments: null,
                            actionTypeId: '',
                            extra: null
                        }
                    ]
                });
                BackgroundTask.finish({
                    taskId
                });
            };
        });
    }
}
