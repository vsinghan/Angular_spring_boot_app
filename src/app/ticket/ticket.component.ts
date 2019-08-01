import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-ticket',
  templateUrl: './ticket.component.html',
  styleUrls: ['./ticket.component.scss']
})
export class TicketComponent implements OnInit {

  public ticket;
  public check = false;
  public ticketId: number;

  constructor(private _bookingService: BookingService) { }

  ngOnInit() {
  }

  showTicket() {
    debugger;
    this._bookingService.getTicket(this.ticketId)
      .subscribe(resp =>{ 
        console.log(resp);
        this.ticket = resp
        console.log(this.ticket)});
    this.check = true;
  }
}
