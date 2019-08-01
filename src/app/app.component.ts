import { Component } from '@angular/core';
import { AppComponentService } from './app.component.service';
import { SharedService } from './shared.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Flight Booking';
  public check1: boolean = true;
  // userName;
  // verify;
  
  

  constructor(private _appComponentService: AppComponentService,  public _sharedService : SharedService ) { 
    // this.check1 = this._sharedService.check;
    // this.check1 = this._sharedService.getCheckUser();
    // alert(this.check1);
  } 
  
  

  // verifyUser() {debugger;
  //   this._appComponentService.checkUser()
  //       .subscribe(resp =>{ 
  //       console.log(resp);
  //       this.verify = resp
  //       console.log(this.verify)});
  //   }
}

// bootstrap(AppComponent, [SharedService]);

