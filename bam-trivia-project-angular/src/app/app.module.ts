import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuizListComponent } from './quiz-list/quiz-list.component';
import { QuestionsComponent } from './questions/questions.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AnswerListComponent } from './answer-list/answer-list.component';
import { QuizComponent } from './quiz/quiz.component';
import { TakeQuizComponent } from './take-quiz/take-quiz.component';

@NgModule({
  declarations: [
    AppComponent,
    QuizListComponent,
    DashboardComponent,
    AnswerListComponent,
    QuestionsComponent,
    QuizComponent,
    TakeQuizComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
