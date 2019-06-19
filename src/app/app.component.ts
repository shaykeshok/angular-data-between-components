import { Component ,ViewChild } from '@angular/core';
import {AppService} from './app.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Yonatan Altman';
  message:string = 'Ariel';
  count:number;
constructor(public app: AppService) { }

 // @ViewChild('app-child',{read}) ChildComponent
}
