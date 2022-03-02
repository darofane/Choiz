import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { MedicineModel } from "../model/medicine.model";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { QuestionModel } from "../model/question.model";
@Injectable({
    providedIn: 'root',
})
export class MedicineService {
    constructor(private http: HttpClient) { }
    BASE_URL = environment.BASE_URL;
    MEDICINE = environment.MEDICINE;
    QUESTION = environment.QUESTION;
    
    getMedicine(): Observable<MedicineModel> {
        return this.http.get<MedicineModel>(
            (`${this.BASE_URL}/${this.MEDICINE}`)
        );
    }

    getQuestion(): Observable<QuestionModel> {
        return this.http.get<QuestionModel>(
            (`${this.BASE_URL}/${this.QUESTION}`)
        );
    }
}