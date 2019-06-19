import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { SonComponent } from './son/son.component';
import { AppService } from './app.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, ChildComponent, SonComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
