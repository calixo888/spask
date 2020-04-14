import { Component, OnInit } from '@angular/core';
import {Media, MediaObject} from "@ionic-native/media";
import {File} from "@ionic-native/file/ngx";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  status: string = "";

  CreateFile() {
    const audioFile: MediaObject = this.media.create('./audiofile.mp3');
    // this.file.externalRootDirectory +
  }

  constructor(private media: Media, private file: File) {}

  ngOnInit() {
  }

  RecordAudio() {
    this.audioFile.startRecord();
    this.status = "recording..."
  }

  StopRecording() {
    this.audioFile.stopRecord();
    this.status = "stopped recording";
  }
}

// export class HomePage implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
