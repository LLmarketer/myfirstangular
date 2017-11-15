import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyNestedComponent } from './my-nested/my-nested.component';
import { MySecondComponent } from './my-second/my-second.component';
import { MyeventbindingComponent } from './myeventbinding/myeventbinding.component';
import { MytwowaybindingComponent } from './mytwowaybinding/mytwowaybinding.component';
import { MytemplatevariableComponent } from './mytemplatevariable/mytemplatevariable.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNestedComponent,
    MySecondComponent,
    MyeventbindingComponent,
    MytwowaybindingComponent,
    MytemplatevariableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] //this is not bootstrap css
  //this is just to say that the app is bootstrapped

})
export class AppModule { }
