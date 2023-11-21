import { Component } from '@angular/core';
import { AppFacade } from '@totvs/pms-store';

@Component({
  selector: 'pms-individual',
  templateUrl: './individual.component.html',
  styleUrls: ['./individual.component.scss']
})
export class IndividualComponent  {
  constructor(public appFacade: AppFacade) { }

  setStateError() {
    this.appFacade.setError('errorPMSRESERVATION');
  }

  clearError() {
    this.appFacade.setError('');
  }
}
