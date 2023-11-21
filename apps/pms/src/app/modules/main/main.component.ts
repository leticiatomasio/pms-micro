import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppFacade } from '@totvs/pms-store';

@Component({
  selector: 'pms-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  constructor(
    private router: Router,
    public appFacade: AppFacade
  ) {};

  ngOnInit(): void {
    sessionStorage.setItem('token', '278316287361x')
  }

  setReservationState() {
    this.router.navigate(['pms-reservation']);
  }
}
