import {Component} from '@angular/core';
import {Plugins} from '@capacitor/core';
import {BackgroundService} from '../background.service';

const {App, BackgroundTask} = Plugins;

@Component({
    selector: 'app-tab3',
    templateUrl: 'tab3.page.html',
    styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

    taskId: any;

    constructor(
        private background: BackgroundService) {
    }

    /**
     * @see https://javascripttuts.com/ionic-capacitor-in-one-go/
     */
    async showConfirm() {
        await Plugins.Modals.confirm({
            title: 'Capacitor integration test',
            message: 'Is Capacitor working?'
        });
    }

    startTask() {
        this.taskId = BackgroundTask.beforeExit(async () => {
            return new Promise((resolve, reject) => {
                setTimeout(() => {
                    console.log('TASK DONE!', this.taskId);

                    // Must call in order to end our task
                    BackgroundTask.finish({
                        taskId: this.taskId
                    });

                    resolve();
                }, 5000);
            });
        });
        console.log('Starting background task:', this.taskId);
    }

    startTask2() {
        this.background.init();
    }

    startTask3() {
        this.background.init2();
    }
}
