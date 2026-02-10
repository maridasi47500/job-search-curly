import { Component, OnInit, ViewChild } from '@angular/core';
import { IonPopover, IonMenu, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, InfiniteScrollCustomEvent, IonModal, IonInfiniteScroll, IonInfiniteScrollContent, IonChip, IonActionSheet, IonButton, IonAlert, IonBadge, IonLabel, IonList, IonItem, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  imports: [IonMenu, IonPopover, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonContent, IonChip, IonActionSheet, IonModal, IonButton, IonAlert, IonBadge, IonItem, IonLabel, IonList, IonBreadcrumb, IonBreadcrumbs, IonInfiniteScrollContent, IonInfiniteScroll],
  standalone: false,
})
export class Tab1Page implements OnInit {
  items: string[] = [];
  isModalOpen = false;
  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  isOpen = false;

  presentPopover(e: Event) {
    this.popover.event = e;
    this.isOpen = true;
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  alertButtons = ['Close'];
  public actionSheetButtons = [
    {
      text: 'Delete',
      role: 'destructive',
      data: {
        action: 'delete',
      },

    },
    {
      text: 'Save',
      data: {
        action: 'save',
      },

    },
    {
      text: 'Apply',
      data: {
        action: 'apply',
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
  ngOnInit() {
    this.generateItems();
  }
  private generateItems(){
    const count=this.items.length + 1;
    for (let i = 0; i < 50; i++){
      this.items.push(`Items ${count + i}`);
    }
  }
  onIonInfinite(event: InfiniteScrollCustomEvent) {
    this.generateItems();
    setTimeout(() => {
      event.target.complete();
    }, 500);
  }
 
  

  constructor() {}

}
