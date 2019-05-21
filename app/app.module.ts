import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Auth Pages
import { AboutPage } from '../pages/auth/about/about';
import { LandingPage } from '../pages/auth/landing/landing';

// Site Pages
import { ContactPage } from '../pages/site/contact/contact';
import { HomePage } from '../pages/site/home/home';
import { TabsPage } from '../pages/site/tabs/tabs';
import { BookingOptionsComponent } from '../components/booking-options/booking-options.component';
import { BookingActivityComponent } from '../components/booking-activity/booking-activity.component';
import { BookingDateComponent } from '../components/booking-date/booking-date.component';
import { ProfilesListComponent } from '../pages/site/profiles-list/profiles-list.component';
import { ProfilesFilterComponent } from '../pages/site/profiles-filter/profiles-filter.component';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LandingPage,
    BookingOptionsComponent,
    BookingActivityComponent,
    BookingDateComponent,
    ProfilesListComponent,
    ProfilesFilterComponent
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp, {
      mode: 'ios',
      tabsPlacement: 'top',
      modalEnter: 'modal-slide-in',
      modalLeave: 'modal-slide-out',
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    LandingPage,
    BookingOptionsComponent,
    BookingActivityComponent,
    BookingDateComponent,
    ProfilesListComponent,
    ProfilesFilterComponent
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
