import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { OdkrywcaComponent } from './role/odkrywca/odkrywca.component';
import { InspiratorComponent } from './role/inspirator/inspirator.component';
import { PerfekcjonistaComponent } from './role/perfekcjonista/perfekcjonista.component';
import { RealizatorComponent } from './role/realizator/realizator.component';
import { MobilizatorComponent } from './role/mobilizator/mobilizator.component';
import { AnalitykComponent } from './role/analityk/analityk.component';
import { EkspertComponent } from './role/ekspert/ekspert.component';
import { InnowatorComponent } from './role/innowator/innowator.component';
import { OrganizatorComponent } from './role/organizator/organizator.component';

const routes: Routes = [
  {
    component: HomeComponent,
    path: ''
  },
  {
    component: QuizComponent,
    path: 'quiz'
  },
  {
    component: OdkrywcaComponent,
    path: 'odkrywca'
  },
  {
    component: InspiratorComponent,
    path: 'inspirator'
  },
  {
    component: OrganizatorComponent,
    path: 'organizator'
  },
  {
    component: InnowatorComponent,
    path: 'innowator'
  },
  {
    component: AnalitykComponent,
    path: 'analityk'
  },
  {
    component: EkspertComponent,
    path: 'ekspert'
  },
  {
    component: MobilizatorComponent,
    path: 'mobilizator'
  },
  {
    component: RealizatorComponent,
    path: 'realizator'
  },
  {
    component: PerfekcjonistaComponent,
    path: 'perfekcjonista'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
