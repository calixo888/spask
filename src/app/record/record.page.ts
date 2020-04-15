import { Component, OnInit } from '@angular/core';
import { Media, MediaObject } from '@ionic-native/media/ngx';
// import {File} from "@ionic-native/file/ngx";
// import { MediaPlugin } from '@ionic-native/media';
import { File } from '@ionic-native/file/ngx';
import { Plugins } from '@capacitor/core';
const { SplashScreen } = Plugins;

// Show the splash for an indefinite amount of time:
SplashScreen.show({
  autoHide: false
});
//import {SpeechRecognition, SpeechRecognitionListeningOptionsAndroid, SpeechRecognitionListeningOptionsIOS} from '@ionic-native/speech-recognition/ngx';
//import { TextToSpeech } from '@ionic-native/text-to-speech/ngx';

// import { MediaCapture, MediaFile, CaptureError, CaptureImageOptions } from '@ionic-native/media-capture/ngx';

@Component({
  selector: 'app-record',
  templateUrl: './record.page.html',
  styleUrls: ['./record.page.scss'],
})

export class RecordPage implements OnInit {
  // status: string = "";
  // audioFile: MediaObject;

  constructor(public media: Media, public file: File) {}
  //private speech: SpeechRecognition

  ngOnInit() {
    // let options: CaptureImageOptions = { limit: 3 }
    // this.mediaCapture.captureImage(options).then(
    //   (data: MediaFile[]) => console.log(data),
    //   (err: CaptureError) => console.error(err)
    // );
    //this.isSpeechSupported();
    //this.getPermission();

    console.log("ngInit test");
    // this.audioFile = this.media.create('audio.mp3');
    // console.log("created file")
  }

  record() {
    console.log("temp dir")
    console.log(this.file.tempDirectory)
    this.file.createFile(this.file.tempDirectory, 'record.m4a', true).then(() => {
      console.log('first')
      let mediaObject = this.media.create(this.file.tempDirectory.replace(/^file:\/\//, '') + 'record.m4a');
      console.log('second')
      mediaObject.startRecord();
      console.log('third')
      window.setTimeout(() => {
        console.log('fourth')
        mediaObject.stopRecord();
        mediaObject.release();
        /** Do something with the record file and then delete */
        // this.file.removeFile(this.file.tempDirectory, 'record.m4a');
      }, 10000);
    });
  }

  // Check feature available
  // async isSpeechSupported() {
  //   const isAvailable = await this.speech.isRecognitionAvailable();
  //   console.log(isAvailable);
  //   return isAvailable;
  // }
  //
  // // Get Permissions
  // async getPermission() {
  //   try {
  //     const permission = await this.speech.requestPermission();
  //     console.log(permission);
  //     return permission;
  //   } catch(e) {
  //     console.log(e);
  //   }
  // }

  // Start the recognition process
  // listenForSpeech() {
  //   // this.androidOptions = {
  //   //   language: 'en-US'
  //   // }
  //   // this.speech.startListening().subscribe(data => console.log(data), speechList = data, error => console.log(error));
  // }
  //
  //   // Stop the recognition process (iOS only)
  // // this.speechRecognition.stopListening()
  // //   }
  //
  // StartRecording() {
  //   // this.file.createFile(this.file.dataDirectory, 'audio.mp3', true);
  //   // this.file.checkDir(this.file.dataDirectory, 'audio.mp3').then(_ => console.log('Directory exists')).catch(err => console.log("Directory doesn't exist"));
  //
  //   console.log("recording...")
  //   this.audioFile.startRecord();
  //   this.status = "recording..."
  // }
  //
  // StopRecording() {
  //   console.log("stopped recording")
  //   this.audioFile.stopRecord();
  //   this.status = "stopped recording";
  // }
}
