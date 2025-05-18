import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { provideHttpClient } from '@angular/common/http'; // Import HttpClientModule

import { AppRoutingModule } from './app-routing.module';

import { GifsModule } from './gifs/gifs.module';
import { SharedModule } from './shared/shared.module';

import { AppComponent } from './app.component';

//Primero importar modules y luego componentes

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    GifsModule,
    SharedModule,
  ],
  providers: [
    provideHttpClient() // Provide HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
