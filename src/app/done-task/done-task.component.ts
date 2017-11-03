import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'vaari-done-task',
  templateUrl: './done-task.component.html',
  styleUrls: ['./done-task.component.css']
})
export class DoneTaskComponent implements OnInit {
  @Input()
  tasksDone: Array < string > = [];

  constructor() { }

  ngOnInit() {
  }

}
