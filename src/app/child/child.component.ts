import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AppService } from '../app.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit {
  public Name = 'Shayke';
  private _count = 0;
  @Input('msg') message: string;
  @Output() count = new EventEmitter<number>()
  constructor(public app: AppService) { }

  ngOnInit() {
  }
  onClick1() {
    this._count++;
    this.count.emit(this._count);
  }
  onClick() {
    this.app.count++;
  }
}