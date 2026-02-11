import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-job-search-editor',
  templateUrl: './job-search-editor.component.html',
  styleUrls: ['./job-search-editor.component.scss'],
 imports: [ReactiveFormsModule],
})
export class JobSearchEditorComponent  implements OnInit {
  jobSearchForm = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    datefin: new FormControl(''),
    company: new FormControl(''),
    city: new FormControl(''),
    lat: new FormControl(''),
    lon: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {}

}
