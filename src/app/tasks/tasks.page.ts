import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.page.html',
  styleUrls: ['./tasks.page.scss'],
})
export class TasksPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  async deleteTasks() {
    console.log("boi");
  }
}
