import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-task-modal',
  templateUrl: './add-task-modal.page.html',
  styleUrls: ['./add-task-modal.page.scss'],
})
export class AddTaskModalPage implements OnInit {

  constructor(public modalController: ModalController) { }

  ngOnInit() {
  }

  async dismiss() {
    // using the injected ModalController this page
    // can "dismiss" itself and optionally pass back data
    await this.modalController.dismiss({
      'dismissed': true
    });
  }
}
