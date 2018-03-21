import { Component, OnInit } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import {HotelsService} from '../../providers/hotels.service'

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {

  hotel:any;

  constructor(private route: ActivatedRoute, private location: Location, private hs:HotelsService) { }

  ngOnInit() {
    let name = null;
    this.route.params.subscribe((res)=>{
      name = res.name || null;
    });
    if(name === null){
      this.hotel = [];
    }
    else{
      this.hotel=this.hs.getHotel(name);
    }
  }

}
