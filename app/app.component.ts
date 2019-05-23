import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';

import { LandingPage } from '../pages/auth/landing/landing';
import { HomePage } from '../pages/site/home/home';
import { TabsPage } from '../pages/site/tabs/tabs';
import { ProfilePageComponent } from '../pages/site/profile-page/profile-page.component';
import { ProfilesFilterComponent } from '../pages/site/profiles-filter/profiles-filter.component';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = ProfilePageComponent;

  constructor(platform: Platform) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  }

  goToPages() {

  }
}
