import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketComponent } from './ticket/ticket.component';
import { HttpClientModule } from '@angular/common/http';
import { BookingService } from './booking.service';
import { AppComponentService } from './app.component.service';
import { FlightComponent } from './flight/flight.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    TicketComponent,
    FlightComponent,
    CancelticketComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [BookingService, AppComponentService, AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
