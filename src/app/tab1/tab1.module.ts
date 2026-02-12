import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { FormsModule } from '@angular/forms';
import { IonContent, IonPopover, IonMenu, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, InfiniteScrollCustomEvent, IonModal, IonInfiniteScroll, IonInfiniteScrollContent, IonChip, IonActionSheet, IonButton, IonAlert, IonBadge, IonLabel, IonList, IonItem, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';
import { ReactiveFormsModule } from '@angular/forms';
import { JobSearchEditorComponent }  from '../job-search-editor/job-search-editor.component';


import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';

@NgModule({
  imports: [
    IonicModule,
JobSearchEditorComponent,
    CommonModule,

//    FormsModule,

 ReactiveFormsModule,
IonMenu, IonContent, IonPopover, IonHeader, IonButtons, IonMenuButton, IonTitle, IonToolbar, IonChip, IonActionSheet, IonModal, IonButton, IonAlert, IonBadge, IonItem, IonLabel, IonList, IonBreadcrumb, IonBreadcrumbs,
IonInfiniteScrollContent, IonInfiniteScroll,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule, Tab1Page
  ],
  declarations: []

})
export class Tab1PageModule {}
