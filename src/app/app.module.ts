import { MatIconModule } from '@angular/material/icon';
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { TopBarComponent } from "./top-bar/top-bar.component";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { AppRoutingModule } from './app.routes';


@NgModule({
    declarations: [
        AppComponent,
        TopBarComponent,
        ProductListComponent,
        ProductAlertsComponent
    ],
    imports: [
      BrowserModule,
      ReactiveFormsModule,
      MatIconModule,
      BrowserAnimationsModule,
      AppRoutingModule
    ],
    bootstrap: [
      AppComponent
    ]
  })
  export class AppModule { }