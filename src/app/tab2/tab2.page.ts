import { Component } from '@angular/core';
import { PhotoService } from '../services/photo.service';
import { ActionSheetController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  //constructor() {}
  constructor(public photoService: PhotoService,
    public actionSheetController: ActionSheetController) {}

  ngOnInit() {
    this.photoService.loadSaved();
  }

  //function
  public async showActionSheet(photo, position){
    const actionSheet = await this.actionSheetController.create({
      header: 'Photos',
      buttons: [{
        //delete option that calls deletePicture function
        text: 'Delete',
        role: 'destructive',
        icon: 'trash',
        handler: () => {
          this.photoService.deletePicture(photo, position);
        }
      },{
        //cancel option that just closes action sheet
        text: 'Cancel',
        icon: 'close',
        role: 'cancel',
        handler: () => {
          //Nothing, action sheet closes automatically
        }
      }]
    });
    await actionSheet.present();
  }

}
