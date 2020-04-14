import { Component, OnInit } from '@angular/core';
// import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})
export class RecordPage implements OnInit {

  // constructor(private mediaCapture: MediaCapture) { }
  constructor() { }

  ngOnInit() {
    // let options: CaptureImageOptions = { limit: 3 }
    // this.mediaCapture.captureImage(options).then(
    //   (data: MediaFile[]) => console.log(data),
    //   (err: CaptureError) => console.error(err)
    // );
  }
}
