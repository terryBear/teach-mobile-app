import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ModalController, ViewController } from 'ionic-angular';
import { BookingDateComponent } from '../booking-date/booking-date.component';

@IonicPage()
@Component({
  selector: 'app-booking-options',
  templateUrl: './booking-options.component.html',
  styleUrls: ['./booking-options.component.css']
})
export class BookingOptionsComponent implements OnInit {

  formDate = 'asap';

  constructor(
    private viewCtrl: ViewController,
    private modalCtrl: ModalController
  ) { }

  ngOnInit() {
  }

  getItems(e) {
    console.log(e.target.value);
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }
  presentDate() {
    const modal = this.modalCtrl.create(BookingDateComponent);
    modal.present();
    modal.onDidDismiss(data => {
     console.log(data);
    });
  }
  saveAddress() {
    console.log(this.formDate);
    this.formDate === 'asap' ? this.dismiss() : this.presentDate();
  }
}