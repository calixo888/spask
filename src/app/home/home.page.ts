import { Component, OnInit } from '@angular/core';
import {Media, MediaObject} from "@ionic-native/media/ngx";
import {File} from "@ionic-native/file/ngx";

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})

export class HomePage {
  // status: string = "";
  // audioFile: MediaObject;
  //
  // constructor(private media: Media, private file: File) {}
  //
  // ngOnInit() {
  // }
  //
  // CreateFile() {
  //   this.audioFile = this.media.create('./audiofile.mp3');
  //   // this.file.externalRootDirectory +
  // }
  //
  // StartRecording() {
  //   this.audioFile.startRecord();
  //   this.status = "recording..."
  // }
  //
  // StopRecording() {
  //   this.audioFile.stopRecord();
  //   this.status = "stopped recording";
  // }
}

// export class HomePage implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
