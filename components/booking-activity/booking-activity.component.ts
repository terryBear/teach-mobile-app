import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ViewController, NavParams } from 'ionic-angular';
import { ProfilesListComponent } from '../../pages/site/profiles-list/profiles-list.component';

@IonicPage()
@Component({
  selector: 'app-booking-activity',
  templateUrl: './booking-activity.component.html',
  styleUrls: ['./booking-activity.component.css']
})
export class BookingActivityComponent implements OnInit {

  selectOptions = null;

  activities = [];

  name: string;
  rate: number;

  constructor(
    private viewCtrl: ViewController,
    private navCtrl: NavController,
    private params: NavParams
  ) {
    this.name = this.params.get('activity');
    this.rate = this.params.get('rate');
    this.selectOptions = {
      title: `Select ${this.name} Activity`,
      subTitle: 'Please select your activity below',
      mode: 'ios'
    };
    switch (this.name) {
      case 'tutor': {
        this.activities = [
          {
            name: 'Mathematics',
            value: 'math'
          },
          {
            name: 'Science',
            value: 'sc'
          },
          {
            name: 'Accounting',
            value: 'acc'
          },
          {
            name: 'Afrikaans',
            value: 'afr'
          },
          {
            name: 'English',
            value: 'eng'
          }
        ];
        break;
      }
      case 'coach': {
        this.activities = [
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
        ];
        break;
      }
      case 'aupair': {
        this.activities = [
          {
            name: 'Aupair',
            value: 'aup'
          },
          {
            name: 'Baby Sitter',
            value: 'bs'
          },
          {
            name: 'Pet Sitter',
            value: 'ps'
          },
          {
            name: 'House Sitter',
            value: 'hs'
          },
        ];
        break;
      }
      default:
        break;
    }
  }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

  nextProfile() {
    this.navCtrl.push(ProfilesListComponent);
  }
}