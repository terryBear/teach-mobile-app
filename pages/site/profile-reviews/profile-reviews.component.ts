import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ModalController, ToastController, ActionSheetController, Slides, ViewController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'app-profile-reviews',
  templateUrl: './profile-reviews.component.html',
  styleUrls: ['./profile-reviews.component.css']
})
export class ProfileReviewsComponent implements OnInit {

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  dismiss() {
    this.viewCtrl.dismiss();
  }

}