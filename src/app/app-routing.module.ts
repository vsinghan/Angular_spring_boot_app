import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TicketComponent } from './ticket/ticket.component';
import { CancelticketComponent } from './cancelticket/cancelticket.component';
import { FlightComponent } from './flight/flight.component';
import { LoginComponent } from './login/login.component';


const routes: Routes = [
  { path: 'login', component: LoginComponent},
  { path: 'book-flight', component: FlightComponent},
  { path: 'view-ticket', component: TicketComponent},
  { path: 'cancel-ticket', component: CancelticketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ FlightComponent, TicketComponent, CancelticketComponent ]
