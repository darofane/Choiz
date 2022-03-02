import { Component, Input, OnInit } from '@angular/core';
import { Iques } from 'src/app/model/ques.model';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.sass']
})
export class QuestionComponent implements OnInit {

  @Input() que: Iques | undefined;
  view: boolean = false;
  constructor() { }

  ngOnInit(): void {
  }

  open(){
    this.view = !this.view
  }
}
