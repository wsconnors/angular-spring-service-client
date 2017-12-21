import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { UserInputTableComponent } from './components/user-input-table/user-input-table.component';
import { AddUserService } from './services/add-user.service';




@NgModule({
  declarations: [
    AppComponent,
    UserInputTableComponent
  ],
  imports: [
    HttpModule,
    BrowserModule,
    FormsModule
  ],
  providers: [
    AddUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
