import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.sass']
})
export class ModalComponent implements OnInit {

  title: string = "Paso a paso para la consulta remota"
  @Output() close: EventEmitter<boolean>;
  constructor() {
    this.close = new EventEmitter<boolean>();
   }

  ngOnInit(): void {
  }

  closeM(){
    this.close.emit(true)
  }

}
