import { Component, OnInit } from '@angular/core';
import {Media, MediaObject} from "@ionic-native/media/ngx";
import {File} from "@ionic-native/file/ngx";
import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';

// import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})

export class RecordPage implements OnInit {
  status: string = "";
  audioFile: MediaObject;

  constructor(private media: Media, private file: File, private speechRecognition: SpeechRecognition) {}

  ngOnInit() {
    // let options: CaptureImageOptions = { limit: 3 }
    // this.mediaCapture.captureImage(options).then(
    //   (data: MediaFile[]) => console.log(data),
    //   (err: CaptureError) => console.error(err)
    // );
    //this.CreateFile();
  }

  // Check feature available
  async isSpeechSupported():Promise<boolean> {
    const isAvailable = await this.speech.isRecognitionAvailable();
    console.log(isAvailable);
    return isAvailable;
  }

  // Get Permissions
  async getPermission():Promise<void> {
    try{
      const permission = await this.speech.requestPermission();
      console.log(permission);
      return permission;
    }
    catch(e){
      console.log(e);
    }
  }

  // Start the recognition process
  listenForSpeech():void {
    this.speech.startListening().subscribe(data => console.log(data), error => console.log(error));
  }

    // Stop the recognition process (iOS only)
  // this.speechRecognition.stopListening()
  //   }

  CreateFile() {
    // console.log(this.file.dataDirectory + './audiofile.mp3')
    this.audioFile = this.media.create('assets/audio/audiofile.m4a');
    // const file: MediaObject = this.media.create('path/to/file.mp3');

    this.file.createFile(this.file.dataDirectory, 'audio.mp3', true);
    this.file.checkDir(this.file.dataDirectory, 'audio.mp3').then(_ => console.log('Directory exists')).catch(err => console.log("Directory doesn't exist"));

    // file.startRecord();
    //
    // file.stopRecord();
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
