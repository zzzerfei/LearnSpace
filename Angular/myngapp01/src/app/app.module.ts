import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyC01Component } from './myc01';
import { MyC02Component } from './myc02.component';
import { Myc03Component } from './myc03/myc03.component';
import { InstructionComponent } from './instruction/instruction.component';
import {FormsModule} from '@angular/forms';
import { DependinjectionComponent } from './dependinjection/dependinjection.component';
import { HttpclientComponent } from './httpclient/httpclient.component'
import {HttpClientModule} from '@angular/common/http'
@NgModule({
  declarations: [ // 声明
    AppComponent,
    MyC01Component,
    MyC02Component,
    Myc03Component,
    InstructionComponent,
    DependinjectionComponent,
    HttpclientComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
