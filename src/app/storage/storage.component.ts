import {Component, OnInit} from '@angular/core';
import {Plugins} from '@capacitor/core';

const {Storage} = Plugins;

/**
 * https://capacitor.ionicframework.com/docs/apis/storage/
 *
 * Ionic pages and navigation.
 */

@Component({
    selector: 'app-storage',
    templateUrl: './storage.component.html'
})
export class StorageComponent implements OnInit {

    constructor() {
    }

    ngOnInit() {
        console.log('ngOnInit StorageComponent');
    }

    // JSON "set" example
    async setObject() {
        await Storage.set({
            key: 'user',
            value: JSON.stringify({
                id: 1,
                name: 'Max'
            })
        });
    }

    // JSON "get" example
    async getObject() {
        const ret = await Storage.get({key: 'user'});
        const user = JSON.parse(ret.value);
        console.log('Got item JSON.parse: ', user);
        console.log('Got item ret.value: ', ret.value);
    }

    async setItem() {
        await Storage.set({
            key: 'name',
            value: 'Max'
        });
    }

    async getItem() {
        const ret = await Storage.get({key: 'name'});
        console.log('Got item name: ', ret.value);
    }

    async removeItem() {
        await Storage.remove({key: 'name'});
    }

    async keys() {
        const keys = await Storage.keys();
        console.log('Got keys: ', keys);
    }

    async clear() {
        await Storage.clear();
    }

}
