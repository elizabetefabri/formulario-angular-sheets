import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Layout/Components/login/login.component';
import { AppModuleModule } from './Shared/AppModule/app-module.module';
import { ErrorDialogComponent } from './Shared/Components/error-dialog/error-dialog.component';
import { CreateDataComponent } from './Layout/Components/create-data/create-data.component';
import { HeaderComponent } from './Layout/Components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorDialogComponent,
    CreateDataComponent,
    HeaderComponent
  ],
  imports: [
    AppModuleModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
