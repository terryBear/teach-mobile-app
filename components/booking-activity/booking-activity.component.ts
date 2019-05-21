import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ViewController } from 'ionic-angular';
import { ProfilesListComponent } from '../../pages/site/profiles-list/profiles-list.component';

@IonicPage()
@Component({
  selector: 'app-booking-activity',
  templateUrl: './booking-activity.component.html',
  styleUrls: ['./booking-activity.component.css']
})
export class BookingActivityComponent implements OnInit {

  activities = [
    {
      name: 'Rugby',
      value: 'rugby'
    },
    {
      name: 'Cricket',
      value: 'c'
    },
    {
      name: 'Modern Dance',
      value: 'md'
    },
    {
      name: 'Hockey',
      value: 'h'
    },
    {
      name: 'Golf',
      value: 'g'
    },
    {
      name: 'Swimming',
      value: 'sw'
    },
  ]

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  nextProfile() {
    this.navCtrl.push(ProfilesListComponent);
  }
}