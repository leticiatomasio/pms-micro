import { Component } from '@angular/core';
import { AppFacade } from '@pms-store';

@Component({
  selector: 'app-dashboard',
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
