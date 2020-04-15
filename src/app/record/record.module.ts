import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { RecordPageRoutingModule } from './record-routing.module';

import { RecordPage } from './record.page';

import {SpeechRecognition} from '@ionic-native/speech-recognition/ngx';

@NgModule({
  declarations: [RecordPage],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecordPageRoutingModule
  ],
  providers: [
    SpeechRecognition
  ]
})
export class RecordPageModule {}
