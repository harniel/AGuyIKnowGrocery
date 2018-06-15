import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-add-item',
  templateUrl: 'add-item.html',
})
export class AddItemPage {
	name: any;
	quantity: any = 0;
	color: any;
	brand: any;
	size: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
  	public view: ViewController, private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddItemPage');
  }

  saveItem(){
 
    let newItem = {
      name: this.name,
	  quantity: this.quantity,
      color: this.color,
	  brand: this.brand,
	  size: this.size
    };
    console.log(newItem);
    if (newItem.name == null) {
    	this.presentToast("Item name is empty!");
    	return;
    	
    }
    if (newItem.quantity == 0) {
    	this.presentToast("Item quatity should be greater than 0!")
    	return;
    }
 
    this.view.dismiss(newItem);
 
  }

  close(){
    this.view.dismiss();
  }


  addQuant(){
  	this.quantity++;
  }

  minusQuant(){
  	if (this.quantity > 0) {
  		this.quantity--;
  	}
  	
  }

  presentToast(mess) {
  let toast = this.toastCtrl.create({
    message: mess,
    duration: 2000,
    position: 'bottom'
  });

  toast.present();
}




}
