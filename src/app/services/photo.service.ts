import { Injectable } from '@angular/core';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Storage } from '@ionic/storage';
import { ImagePicker, ImagePickerOptions } from '@ionic-native/image-picker/ngx';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  public photos: Photo[] = [];

  constructor(
    private camera: Camera,
    private imagePicker: ImagePicker,
    private storage: Storage) { }

  takePicture() {
    const options: CameraOptions = {
      quality: 100,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    this.camera.getPicture(options).then((imageData) => {
      // Add new photo to gallery
      this.photos.unshift({
        data: 'data:image/jpeg;base64,' + imageData
      });
      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
      console.log('Camera issue:' + err);
    });
  }

  public loadMultipleImageFromGallery() {
    const options: ImagePickerOptions = {
      // Android only. Max images to be selected, defaults to 15. If this is set to 1, upon
      // selection of a single image, the plugin will return it.
      maximumImagesCount: 15,
      // while setting a number 15 we can load 15 images in one selection.

      // quality of resized image, defaults to 100
      quality: 100,

      width: 600,
      height: 600,

      // it returns a base64 data for an image
      outputType: 1
    };

    this.imagePicker.getPictures(options).then((results) => {
      for (let i = 0; i < results.length; i++) {
        // console.log('Image URI: ' + results[i]);
          // here iam converting image data to base64 data and push a data to array value.
          this.photos.unshift({
            data: 'data:image/jpeg;base64,' + results[i]
          });
      }
      // console.log(“Image Lists”, this.imageLists);
      // Save all photos for later viewing
      this.storage.set('photos', this.photos);
    }, (err) => {
      console.log('Error occurred while loading', err);
    });
  }

  loadSaved() {
    this.storage.get('photos').then((photos) => {
      this.photos = photos || [];
    });
  }

}

class Photo {
  data: any;
}
