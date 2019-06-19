import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { ChildComponent } from './child/child.component';
import { SonComponent } from './son/son.component';
import { AppService } from './app.service';
import { FormComponent } from './form/form.component';
import { NameEditorComponent } from './name-editor/name-editor.component';
import { ProfileEditorComponent } from './profile-editor/profile-editor.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ,ReactiveFormsModule],
  declarations: [ AppComponent, HelloComponent, ChildComponent, SonComponent, FormComponent, NameEditorComponent, ProfileEditorComponent ],
  bootstrap:    [ AppComponent ],
  providers: [AppService]
})
export class AppModule { }
