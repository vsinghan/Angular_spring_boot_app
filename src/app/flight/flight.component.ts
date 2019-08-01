import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { IBooking } from '../IBooking';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-flight',
  templateUrl: './flight.component.html',
  styleUrls: ['./flight.component.scss']
})
export class FlightComponent implements OnInit {

  Arr = Array;
  public availableSeats: number;
  public check1 = false;
  public check2 = false;
  public check3 = false;
  public noOfPassengers: number;

  public passengerName: string;
  public passengerAge: number;
  public passengerPhone: number;
  public passengerEmail: string;
  public passengerSeatNo: number;
  public userName: string;


  public passengers = [];
  public tickets = [];
  public datatosend:IBooking={passengerDTO: {
    name: null,
    age: 0,
    mobileNo: 0,
    emailId: null
},
seatNo: 0,
userDTO: {
  username: null
}
};

  constructor(private _bookingService: BookingService,  public _sharedService : SharedService) { }

  ngOnInit() {
  }

  displayAvailableSeats() {
    debugger;
    this._bookingService.viewSeats()
      .subscribe(resp => this.availableSeats = resp);
    this.check1 = true;
  }

  displayForm() {
    this.check2 = true;
  }

  submitForm() {
    // this.passengers.push({passengerName: this.passengerName, passengerAge: this.passengerAge, passengerPhone: this.passengerPhone, passengerEmail: this.passengerEmail})
    this.datatosend.passengerDTO.name=this.passengerName;
    this.datatosend.passengerDTO.age=this.passengerAge;
    this.datatosend.passengerDTO.mobileNo=this.passengerPhone;
    this.datatosend.passengerDTO.emailId=this.passengerEmail;
    this.datatosend.seatNo=this.passengerSeatNo;
    this.datatosend.userDTO.username=this._sharedService.getUserName();
    this.passengers.push(this.datatosend)
  }

  bookTicket() {
    this.check3 = true;
    this._bookingService.addPassenger(this.passengers)
      .subscribe(resp => this.tickets = resp);
  }
}
