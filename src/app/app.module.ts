import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { MedicationsComponent } from './components/medications/medications.component';
import { ModalComponent } from './components/modal/modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './home/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { QuestionComponent } from './components/question/question.component';
import { TiQuestionComponent } from './components/ti-question/ti-question.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    MedicationsComponent,
    ModalComponent,
    NavbarComponent,
    HomeComponent,
    QuestionComponent,
    TiQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
