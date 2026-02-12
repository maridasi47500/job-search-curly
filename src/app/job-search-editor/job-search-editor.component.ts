import { Component, OnInit } from '@angular/core';
import { IonIcon, IonPopover, IonMenu, IonHeader, IonButtons, IonMenuButton, IonContent, IonTitle, IonToolbar, InfiniteScrollCustomEvent, IonModal, IonInfiniteScroll, IonInfiniteScrollContent, IonChip, IonActionSheet, IonButton, IonAlert, IonBadge, IonLabel, IonList, IonItem, IonBreadcrumb, IonBreadcrumbs } from '@ionic/angular/standalone';
import { CommonModule, NgFor } from '@angular/common';

import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-search-editor',
  templateUrl: './job-search-editor.component.html',
  styleUrls: ['./job-search-editor.component.scss'],
  imports: [NgFor,CommonModule, ReactiveFormsModule,IonLabel, IonItem,IonChip,IonIcon],
})
export class JobSearchEditorComponent  implements OnInit {
  skills:any=[];
  jobSearchForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    datefin: new FormControl(''),
    company: new FormControl(''),
    city: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
    skill: new FormControl(''),
    job: new FormGroup({      
      name: new FormControl(''),
      description: new FormControl(''),
    }),
  });


  updateSkill() {
    var myvalue=(this.jobSearchForm.value);
    this.skills.push(myvalue.skill);
    myvalue.skill="";
    this.jobSearchForm.patchValue(myvalue);
  }
  updateProfile() {
    this.jobSearchForm.patchValue({
      title: 'IT support technician (H/F)',
      description: `Vos missions :

Administration des systèmes et du réseau :

    Administration, maintenance et évolution des infrastructures informatiques
    Gestion des stocks, incidents et documentation technique
    Analyse et proposition d'acquisition hardware & software
    Veille technologique et contrôle de cohérence des systèmes

Sécurité des systèmes d'information :

    Gestion de la fiabilité et sécurité du SI, des droits d'accès et de l'infrastructure réseau
    Participation à la politique SSI et audits

Support & Assistance utilisateurs :

    Analyse et traitement des incidents
    Installation et mise à jour des matériels et logiciels
    Accompagnement des utilisateurs et rédaction de guides internes

Reporting & Exploitation de la donnée :

    Contribution aux tableaux de bord informationnels et décisionnels
    Fiabilisation et structuration de la donnée (MyReport ou autres outils)
    Collaboration avec les services métiers pour les besoins en indicateurs

Environnements techniques :

Maîtrise des environnements Windows / Linux / MacOS, connaissances en réseaux, virtualisation, cloud, SQL et intérêt pour le reporting.

Expertise souhaitée : scripting / automatisation, administration systèmes & réseaux, production de reportings.

Vos atouts :

    Formation supérieure en informatique niveau Bac +2/3 et expérience similaire (minimum 1 an)
    Maîtrise de l'anglais technique
    Rigueur, esprit de synthèse et curiosité technologique
    Autonomie, sens de l'organisation et esprit d'équipe
    Pédagogie et sens du service
    Confidentialité / Discrétion

Type d'emploi : Temps plein, CDI

Rémunération : à partir de 1 900,00€ par mois

Lieu du poste : En présentiel`,
      datefin: "01/03/2026",
      company: "Mon entreprise",
      city: "Ma ville",
      lat: "8.33",
      lon: "52.99",
      job: {
        name: 'IT support technicien',
        description: "Le technicien support informatique est celle/celui qui va résoudre les pannes ou les bugs informatiques",
      },
    });
  }


  constructor() { }

  ngOnInit() {}

}
