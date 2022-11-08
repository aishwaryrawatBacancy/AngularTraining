import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
<<<<<<< HEAD
import { DropdownDirective } from './shared/attribute-directive/dropdown.directive';
=======
import { HighlightCardDirective } from './shared/directives/highlight-card.directive';
import { UnlessDirective } from './shared/directives/structural-directive/unless.directive';
>>>>>>> 0365779c76991bb2b96f6a9e7c54c68a7c37b25a

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
<<<<<<< HEAD
    DropdownDirective
=======
    HighlightCardDirective,
    UnlessDirective
>>>>>>> 0365779c76991bb2b96f6a9e7c54c68a7c37b25a
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
