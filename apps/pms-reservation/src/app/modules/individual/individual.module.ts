import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndividualComponent } from './individual.component';
import { individualRoutes } from './individual.routes';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(
      individualRoutes
    ),
  ],
  declarations: [IndividualComponent]
})
export class IndividualModule { }
