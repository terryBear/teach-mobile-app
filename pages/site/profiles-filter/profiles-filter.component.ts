import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ModalController, ToastController, ActionSheetController, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'app-profiles-filter',
  templateUrl: './profiles-filter.component.html',
  styleUrls: ['./profiles-filter.component.css']
})
export class ProfilesFilterComponent implements OnInit {

  filter = {
    type: 'coach',
    distance: 10,
    qualification: 3,
    rating: 3,
    gender: 0
  }

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  saveFilters() {
    this.navCtrl.pop();
  }

  setType(type) {
    this.filter.type = type;
  }

}