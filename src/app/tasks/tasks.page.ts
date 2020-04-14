import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { ModalController } from '@ionic/angular';
import { AddTaskModalPage } from '../modals/add-task-modal/add-task-modal.page';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {
  tasks = [];

  constructor(public modalController: ModalController, private storage: Storage) { }

  ngOnInit() {
    this.getTasks();
  }

  async getTasks() {
    await this.storage.get("tasks").then(tasks => this.tasks = tasks)
  }

  async deleteTasks() {
    this.storage.clear();
  }

  async presentModal() {
    const modal = await this.modalController.create({
      component: AddTaskModalPage
    });
    return await modal.present();
  }
}
