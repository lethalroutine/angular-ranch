import {AfterViewInit, Component} from '@angular/core';

import * as L from 'leaflet';
import {DataProviderService} from '../_services/data-provider.service';
import {AccountService} from '../_services/account.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  private map;
  private isUserLoggedIn = false;

  constructor(
    private dataService: DataProviderService,
    private accountService: AccountService
    ) {
    this.accountService.isUserAuthenticated.subscribe((value) =>
    this.isUserLoggedIn = value);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [ 39.8282, -98.5795 ],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onClick(id: number) {
    this.dataService.fetchDataFromServer(id).subscribe((data) =>
    {
      console.log(data);
    });
  }
}
