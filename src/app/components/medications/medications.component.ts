import { Component, OnInit } from '@angular/core';
import { IData } from 'src/app/model/Data';
import { MedicineModel } from 'src/app/model/medicine.model';
import { PillsModel } from 'src/app/model/pills.model';
import { MedicineService } from 'src/app/sevices/medicine.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-medications',
  templateUrl: './medications.component.html',
  styleUrls: ['./medications.component.sass']
})
export class MedicationsComponent implements OnInit {

  medicine: MedicineModel | undefined;
  products: MedicineModel[] = [];
  pildoras!: PillsModel[];
  anillos!: PillsModel[];
  parches!: PillsModel[];
  constructor(
    private service: MedicineService,
  ) { }

  ngOnInit(): void {
    this.getMedicine();
  }

  private getMedicine(): void {
    this.service
      .getMedicine()
      .subscribe((medi: any) => {
        console.log(medi);
        this.medicine = medi;
        this.anillos = medi.data.rings
        this.pildoras = medi.data.pills
        this.parches = medi.data.patches
      });
  }

}
