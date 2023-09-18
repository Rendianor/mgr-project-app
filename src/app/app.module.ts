import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { ChangeBgDirective } from './change-bg.directive';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { QuizComponent } from './quiz/quiz.component';
import { UiPageComponent } from './ui/ui-page/ui-page.component';
import { InspiratorComponent } from './role/inspirator/inspirator.component';
import { OdkrywcaComponent } from './role/odkrywca/odkrywca.component';
import { PerfekcjonistaComponent } from './role/perfekcjonista/perfekcjonista.component';
import { RealizatorComponent } from './role/realizator/realizator.component';
import { MobilizatorComponent } from './role/mobilizator/mobilizator.component';
import { AnalitykComponent } from './role/analityk/analityk.component';
import { EkspertComponent } from './role/ekspert/ekspert.component';
import { InnowatorComponent } from './role/innowator/innowator.component';
import { OrganizatorComponent } from './role/organizator/organizator.component';
import {MatIconModule} from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuizComponent,
    UiPageComponent,
    InspiratorComponent,
    OdkrywcaComponent,
    ChangeBgDirective,
    InnowatorComponent,
    OrganizatorComponent,
    EkspertComponent,
    AnalitykComponent,
    MobilizatorComponent,
    RealizatorComponent,
    PerfekcjonistaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    MatButtonModule,
    HttpClientModule,
    MatTooltipModule,
    MatIconModule,
    FormsModule,
    
  ],
  providers: [],
  exports:[UiPageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
