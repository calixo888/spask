import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecordPageRoutingModule } from './record-routing.module';

import { RecordPage } from './record.page';

import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';

import {Media, MediaObject} from "@ionic-native/media/ngx";
import {File} from "@ionic-native/file/ngx";

@NgModule({
  declarations: [RecordPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordPageRoutingModule
  ],
  providers: [
    SpeechRecognition,
    Media,
    File
  ]
})
export class RecordPageModule {}
