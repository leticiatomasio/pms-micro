import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'thex-pms-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'pms';

  ngOnInit(): void {
    sessionStorage.setItem('token', '278316287361x')
  }

}
