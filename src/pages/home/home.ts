import { Component } from '@angular/core';
import { ModalController,NavController, AlertController } from 'ionic-angular';
import { AddItemPage } from '../add-item/add-item';
import { ItemDetailPage } from '../item-detail/item-detail';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: any = [];

  constructor(public navCtrl: NavController, 
  	public modalCtrl: ModalController,
  	public alertCtrl: AlertController) {

  }

  ionViewDidLoad(){
 
    

 
  }

  addItem(){
  	// var item = {
  	// 	name: "Ruler", 
	  // 	quantity: "10.00", 
	  // 	color:"Red", 
	  // 	brand: "Orion"};
  	// this.items.push(item);

  	let addModal = this.modalCtrl.create(AddItemPage);
 
    addModal.onDidDismiss((item) => {
    	console.log(item);
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();
 
  }

  saveItem(item){
    this.items.push(item);
  }
 
  viewItem(item){
  	let addModal = this.modalCtrl.create(ItemDetailPage, {
  		item: item
  	});
 
    addModal.onDidDismiss((item) => {
    	console.log(item);
 
          if(item){
            this.saveItem(item);
          }
 
    });
 
    addModal.present();

    for(var i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
      	
        this.items.splice(i, 1);
      }
 
    }
	}

  removeItem(item){
    for(var i = 0; i < this.items.length; i++) {
 
      if(this.items[i] == item){
      	
        this.items.splice(i, 1);
      }
 
    }
 
  }

  showConfirm(item) {
    const confirm = this.alertCtrl.create({
      title: 'Remove Item',
      message: 'Do you really want to remove this item?',
      buttons: [
        {
          text: 'Disagree',
          handler: () => {
            return;
          }
        },
        {
          text: 'Agree',
          handler: () => {
            this.removeItem(item);
          }
        }
      ]
    });
    confirm.present();
  }
 

}
