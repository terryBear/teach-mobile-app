import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { HomePage } from '../../site/home/home';

@Component({
  selector: 'page-landing',
  templateUrl: 'landing.html'
})
export class LandingPage {

  @ViewChild(Slides) slides: Slides;

  constructor(public navCtrl: NavController) {

  }

  next(target: string) {
    switch (target) {
      case 'register': {
        this.slides.slideTo(1, 500);
        break;
      }
      case 'login': {
        this.slides.slideTo(2, 500);
        break;
      }
      default:
        break;
    }
  }

  goToTabs() {
    this.navCtrl.setRoot(HomePage);
  }

}
