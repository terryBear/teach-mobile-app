import { Component, OnInit, ViewChild } from '@angular/core';
import { NavController, IonicPage, ModalController, ToastController, ActionSheetController, Slides } from 'ionic-angular';
import { ProfilesFilterComponent } from '../profiles-filter/profiles-filter.component';
import { ProfilePageComponent } from '../profile-page/profile-page.component';

@IonicPage()
@Component({
  selector: 'app-profiles-list',
  templateUrl: './profiles-list.component.html',
  styleUrls: ['./profiles-list.component.css']
})
export class ProfilesListComponent implements OnInit {

  @ViewChild(Slides) slides: Slides;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

  ngOnInit() {
  }

  showFilters() {
    this.navCtrl.push(ProfilesFilterComponent);
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log('Current index is', currentIndex);
  }

  slidePrev() {
   this.slides.slidePrev();
  }

  slideNext() {
   this.slides.slideNext();
  }

  viewProfile() {
    this.navCtrl.push(ProfilePageComponent)
  }
}