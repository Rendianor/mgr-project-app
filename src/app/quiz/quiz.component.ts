import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../service/question.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {
  public questionList: any = [];
  public currentQuestion: number = 0;
  public routerLink!: string;
  isVisibleHome: boolean = true;
  odkrywca: number = 0;
  inspirator: number = 0;
  organizator: number = 0;
  innowator: number = 0;
  analityk: number = 0;
  ekspert: number = 0;
  mobilizator: number = 0;
  realizator: number = 0;
  perfekcjonista: number = 0;

  constructor(private questionService: QuestionService, private router: Router) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }
  getAllQuestions() {
    this.questionService.getBalbinQuestionJson()
      .subscribe(res => {
        this.questionList = res.questions;
      })
  }
  answer(currentQno: number, option: any) {
    if (option.value) {
      this.odkrywca += option.value.odkrywca ?? 0;
      this.inspirator += option.value.inspirator ?? 0;
      this.ekspert += option.value.ekspert ?? 0;
      this.organizator += option.value.organizator ?? 0;
      this.mobilizator += option.value.mobilizator ?? 0;
      this.realizator += option.value.realizator ?? 0;
      this.perfekcjonista += option.value.perfekcjonista ?? 0;
      this.innowator += option.value.innowator ?? 0;
      this.analityk += option.value.analityk ?? 0;


      let variables: [string, number][] = [["odkrywca", this.odkrywca], ["inspirator", this.inspirator], ["organizator", this.organizator],
      ["ekspert", this.ekspert], ["mobilizator", this.mobilizator], ["realizator", this.realizator],
      ["perfekcjonista", this.perfekcjonista], ["innowator", this.innowator], ["analityk", this.analityk]];
      variables.sort((a, b) => b[1] - a[1]);
      const filteredArray = variables.filter((result) => !isNaN(result[1]));
      for (let i = 0; i < filteredArray.length; i++) {
        console?.log(`${filteredArray[i][0]}: ${filteredArray[i][1]}`);
        this.routerLink = filteredArray[0][0];
      }
      if (currentQno + 1 === this.questionList.length) {
        this.generateLink(this.routerLink)
      }
    }
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  generateLink(url: string) {
    console.log("/" + url)
    const pageUrl = this.getPageUrl(url);
    console.log(this.router.navigateByUrl(pageUrl));
  }
  getPageUrl(pageId: string): string {
    return `/${pageId}`;
  }
}
