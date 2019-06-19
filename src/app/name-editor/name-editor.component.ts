import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-name-editor',
  templateUrl: './name-editor.component.html',
  styleUrls: ['./name-editor.component.css']
})
export class NameEditorComponent implements OnInit {

  constructor() { }
  name = new FormControl('');
  ngOnInit() {
    this.name.setValue('Shayke');
    this.name.setValidators(Validators.required);
    this.name.valid
  }
  print(value) {
    console.log(value);
  }

}