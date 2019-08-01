import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-cancelticket',
  templateUrl: './cancelticket.component.html',
  styleUrls: ['./cancelticket.component.scss']
})
export class CancelticketComponent implements OnInit {

  public check = false;
  public cancelMessages = [];
  public ticketId: number;

  constructor(private _bookingService: BookingService) { }

  ngOnInit() {
  }

  cancelTicket() {
    debugger;
    this._bookingService.removeTicket(this.ticketId)
      .subscribe(resp =>{ 
        console.log(resp);
        this.cancelMessages = resp
        console.log(this.cancelMessages)});
    this.check = true;
  }
}
