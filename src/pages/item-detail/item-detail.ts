import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,ToastController } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-item-detail',
  templateUrl: 'item-detail.html',
})
export class ItemDetailPage {
	item: any = [];
	name: any;
	quantity: any = 0;
	color: any;
	brand: any;
	size: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,public view: ViewController,
  	 private toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ItemDetailPage');
    this.item = this.navParams.get('item');
    this.name = this.item.name;
    this.quantity = this.item.quantity;
    this.color = this.item.color;
    this.brand = this.item.brand;
    this.size = this.item.size;

    console.log(this.name);
  }

   addQuant(){
  	this.quantity++;
  }

  minusQuant(){
  	if (this.quantity > 0) {
  		this.quantity--;
  	}
  	
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

  presentToast(mess) {
  let toast = this.toastCtrl.create({
    message: mess,
    duration: 2000,
    position: 'bottom'
  });

  toast.present();
}

}
