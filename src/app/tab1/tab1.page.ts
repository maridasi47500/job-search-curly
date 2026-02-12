import { Component, OnInit,CUSTOM_ELEMENTS_SCHEMA, ViewChild } from '@angular/core';
import { IonPopover, IonMenu, IonHeader, IonButtons, IonMenuButton, IonContent, IonTitle, IonToolbar, InfiniteScrollCustomEvent, IonModal, IonInfiniteScroll, IonInfiniteScrollContent, IonChip, IonActionSheet, IonButton, IonAlert, IonBadge, IonLabel, IonList, IonItem, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';
import { JobSearchEditorComponent }  from '../job-search-editor/job-search-editor.component';



@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
schemas:[CUSTOM_ELEMENTS_SCHEMA],
imports:[
JobSearchEditorComponent,
IonInfiniteScrollContent, IonInfiniteScroll, IonContent, IonPopover, IonButton, IonToolbar, IonButtons, IonTitle, IonHeader,IonModal, IonLabel, IonItem, IonBadge,
],
  //standalone: false,
})
export class Tab1Page implements OnInit {
  items: string[] = [];
  isModalOpen:any = {};
  @ViewChild('popover') popover!: HTMLIonPopoverElement;

  isOpen:any = {};

  presentPopover(e: Event, hello: string) {
    this.popover.event = e;
    this.isOpen[hello] = true;
  }
  setOpen(isOpen: boolean, hello: string) {
    this.isModalOpen[hello] = isOpen;
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
    for (let i = 0; i < 50; i++){
      this.isModalOpen[i]=false;
      this.isOpen[i]=false;
    }
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
