import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'app-booking-date',
  templateUrl: './booking-date.component.html',
  styleUrls: ['./booking-date.component.css']
})
export class BookingDateComponent implements OnInit {

  myDate: Date;

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss({ date: this.myDate });
  }

  setDate() {
    console.log(this.myDate);
    this.dismiss();
  }
}