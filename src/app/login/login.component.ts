import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { SharedService } from '../shared.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  // public userName;
  public verify;
  public eligibleMessage;
  public check = false;
  

  constructor(private _bookingService: BookingService,  public _sharedService : SharedService, private _appComponent:AppComponent) { }

  ngOnInit() {
  }

  verifyUser(userName: string) {debugger;
    this.check = true;
    this._bookingService.checkUser(userName)
        .subscribe(resp => {
          this.verify = resp;
    if(this.verify) {
      this.eligibleMessage = "Congrats!! You are eligible to book ticket";
      this._sharedService.saveCheckUser(false);
      this._sharedService.saveUserName(userName);
      this._appComponent.check1=false;
    }
    if(!this.verify) {
      this.eligibleMessage = "Oops!! Your account has been blocked";
      this._appComponent.check1=true;
    }
        });
    
  }
}
