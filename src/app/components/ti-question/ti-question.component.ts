import { Component, OnInit } from '@angular/core';
import { Iques } from 'src/app/model/ques.model';
import { QuestionModel } from 'src/app/model/question.model';
import { MedicineService } from 'src/app/sevices/medicine.service';

@Component({
  selector: 'app-ti-question',
  templateUrl: './ti-question.component.html',
  styleUrls: ['./ti-question.component.sass']
})
export class TiQuestionComponent implements OnInit {

  question: QuestionModel | undefined;
  ques: Iques[] | undefined;
  constructor(
    private service: MedicineService,
  ) { }

  ngOnInit(): void {
    this.getQuestion();
  }

  private getQuestion(): void {
    this.service
      .getQuestion()
      .subscribe((ques: any) => {
          this.question = ques;
          this.ques = ques.data;
      });
  }
}
