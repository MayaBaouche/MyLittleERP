import { Component } from '@angular/core';
import {JOBS_TITLES, User} from '../app/api-model/user-model';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-little-erp';
  jobstitles = JOBS_TITLES;
}
