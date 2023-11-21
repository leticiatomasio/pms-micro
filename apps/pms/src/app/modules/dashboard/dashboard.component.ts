import { Component } from '@angular/core';
import { AppFacade } from '@totvs/pms-store';

@Component({
  selector: 'pms-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  constructor(public appFacade: AppFacade) { }

  setStateError() {
    this.appFacade.setError('errorPMS');
  }

  clearError() {
    this.appFacade.setError('');
  }
}
