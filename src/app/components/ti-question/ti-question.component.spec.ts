import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TiQuestionComponent } from './ti-question.component';

describe('TiQuestionComponent', () => {
  let component: TiQuestionComponent;
  let fixture: ComponentFixture<TiQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TiQuestionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TiQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
