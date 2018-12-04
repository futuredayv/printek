import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'printek-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  map = {
    lat: 40.0851224,
    lng: 29.5114472,
    zoom: 17
  };

  marker = {
    lat: 40.0851224,
    lng: 29.5114472,
    zoom: 17,
    icon: ''
  };

  constructor() { }

  ngOnInit() {
  }

}
