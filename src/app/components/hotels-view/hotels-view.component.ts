import { Component, OnInit } from '@angular/core';
import {HotelsService} from '../../providers/hotels.service'

@Component({
  selector: 'app-hotels-view',
  templateUrl: './hotels-view.component.html',
  styleUrls: ['./hotels-view.component.css']
})
export class HotelsViewComponent implements OnInit {

  constructor(private hs:HotelsService) { }


hotelsList: any;
  ngOnInit() {
    this.hotelsList = this.hs.hotels;
  }

}
