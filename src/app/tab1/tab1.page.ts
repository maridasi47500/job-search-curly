import { Component } from '@angular/core';
import { IonActionSheet, IonButton, IonAlert } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonActionSheet, IonButton, IonAlert],
  standalone: false,
})
export class Tab1Page {
  alertButtons = ['Close'];
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },

    }
    {
      text: 'Share',
      role: 'destructive',
      data: {
        action: 'share',
      },

    },
    {
      text: 'Cancel',
      role: 'cancel',
      data: {
        action: 'cancel',
      },

    },
  ];

  constructor() {}

}
