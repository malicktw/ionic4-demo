import { Component } from '@angular/core';
import {Plugins} from '@capacitor/core';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  /**
   * @see https://javascripttuts.com/ionic-capacitor-in-one-go/
   */
  async showConfirm() {
    await Plugins.Modals.confirm({
      title: 'Capacitor integration test',
      message: 'Is Capacitor working?'
    });
  }
}
