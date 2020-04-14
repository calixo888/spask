import { Component, OnInit } from '@angular/core';
import {Media, MediaObject} from "@ionic-native/media/ngx";
import {File} from "@ionic-native/file/ngx";

// import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})

export class RecordPage implements OnInit {
  status: string = "";
  audioFile: MediaObject;

  constructor(private media: Media, private file: File) {}

  ngOnInit() {
    // let options: CaptureImageOptions = { limit: 3 }
    // this.mediaCapture.captureImage(options).then(
    //   (data: MediaFile[]) => console.log(data),
    //   (err: CaptureError) => console.error(err)
    // );
    this.CreateFile();
  }

  CreateFile() {
    this.audioFile = this.media.create(this.file.externalRootDirectory + './audiofile.mp3');
  }

  StartRecording() {
    console.log("recording...")
    this.audioFile.startRecord();
    this.status = "recording..."
  }

  StopRecording() {
    console.log("stopped recording")
    this.audioFile.stopRecord();
    this.status = "stopped recording";
  }
}
