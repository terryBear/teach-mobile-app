import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, IonicPage, ModalController, ToastController, ActionSheetController } from 'ionic-angular';
import { BookingOptionsComponent } from '../../../components/booking-options/booking-options.component';
import { BookingActivityComponent } from '../../../components/booking-activity/booking-activity.component';
import { BookingDateComponent } from '../../../components/booking-date/booking-date.component';

declare var google;

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef;
  map: any;
  activityString: string;
  activityRate: number;

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController,
    public toastCtrl: ToastController,
    public actionSheetCtrl: ActionSheetController
  ) {

  }

  ionViewDidLoad(){
    this.loadMap();
  }

  loadMap(){

    let latLng = new google.maps.LatLng(-34.9290, 138.6010);

    let mapOptions = {
      center: latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    }

    this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);

  }

  getItems(e) {
    console.log(e.target.value);
  }
  presentOptions() {
    const modal = this.modalCtrl.create(BookingOptionsComponent);
    modal.onDidDismiss(data => {
     console.log(data);
    });
    modal.present();
  }
  presentDate() {
    const modal = this.modalCtrl.create(BookingDateComponent);
    modal.onDidDismiss(data => {
     console.log(data);
    });
    modal.present();
  }
  presentActivity(target, rate) {
    this.activityString = target;
    this.activityRate = rate;
    const modal = this.modalCtrl.create(BookingActivityComponent, {
      rate: this.activityRate,
      activity: this.activityString
    });
    modal.onDidDismiss(data => {
     console.log(data);
    });
    modal.present();
  }
  servicesToast() {
    const actionSheet = this.actionSheetCtrl.create({
      title: 'Select',
      cssClass: 'action-sheet-md activity-select',
      buttons: [
        {
          text: 'Destructive',
          handler: () => {
            console.log('Destructive clicked');
          }
        },{
          text: 'Archive',
          handler: () => {
            console.log('Archive clicked');
          }
        },{
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }
}
