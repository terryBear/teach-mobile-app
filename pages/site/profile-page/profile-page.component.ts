import { Component, OnInit } from '@angular/core';
import { NavController, IonicPage, ModalController, ToastController, ActionSheetController, Slides, ViewController } from 'ionic-angular';
import { ProfileReviewsComponent } from '../profile-reviews/profile-reviews.component';

@IonicPage()
@Component({
  selector: 'app-profile-page',
  templateUrl: './profile-page.component.html',
  styleUrls: ['./profile-page.component.css']
})
export class ProfilePageComponent implements OnInit {

  active = 'Profile';

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    private viewCtrl: ViewController,
    public actionSheetCtrl: ActionSheetController
  ) { }

  ngOnInit() {
  }

  showReviews() {
    const modal = this.modalCtrl.create(ProfileReviewsComponent);
    modal.onDidDismiss(data => {
     console.log(data);
    });
    modal.present();
  }


}