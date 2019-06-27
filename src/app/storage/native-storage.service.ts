import { Injectable } from '@angular/core';
import { Plugins } from '@capacitor/core';
const { Storage } = Plugins;

/**
 * https://capacitor.ionicframework.com/docs/apis/storage/
 */

@Injectable({
  providedIn: 'root'
})
export class NativeStorageService {

  constructor() { }

  // MOVE Storage operation here

}
