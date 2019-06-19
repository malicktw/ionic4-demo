import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FilesystemComponent} from './filesystem.component';
import {IonicModule} from '@ionic/angular';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';

@NgModule({
    declarations: [FilesystemComponent],
    imports: [
        IonicModule,
        CommonModule,
        FormsModule,
        RouterModule.forChild([{path: '', component: FilesystemComponent}])
    ]
})
export class FilesystemModule {
}
