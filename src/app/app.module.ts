import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
import { AddClassCardDirective } from './shared/directives/add-class-card.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    HighlightCardDirective,
    UnlessDirective,
    AddClassCardDirective
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
