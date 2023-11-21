import { IndividualModule } from './../../../../apps/pms-reservation/src/app/modules/individual/individual.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [CommonModule, IndividualModule],
})
export class PmsAuthModule {}
