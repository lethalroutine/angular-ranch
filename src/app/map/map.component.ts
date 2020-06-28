import { AfterViewInit, Component } from '@angular/core';

import * as L from 'leaflet';
import { DataProviderService } from '../_services/data-provider.service';
import { AccountService } from '../_services/account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements AfterViewInit {
  map;
  isUserLoggedIn = false;

  constructor(
    private dataService: DataProviderService,
    private accountService: AccountService,
    private router: Router
  ) {
    this.accountService.isUserAuthenticated.subscribe((value) =>
      this.isUserLoggedIn = value);
  }

  ngAfterViewInit(): void {
    this.initMap();
  }

  private initMap(): void {
    this.map = L.map('map', {
      center: [39.8282, -98.5795],
      zoom: 3
    });

    const tiles = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 19,
      attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    });

    tiles.addTo(this.map);
  }

  onClick(id: number) {
    this.dataService.fetchDataFromServer(id).subscribe((data) => {
      this.drawPolygon(data);
    }, (error => {
      this.handleExpiredToken();
    }));
  }

  private drawPolygon(data) {
    const corners = data['corners'];
    const polygonData = corners.map(val => [val['lat'], val['lng']]);
    const polygon = L.polygon(polygonData, {color: 'red'});
    polygon.addTo(this.map);
  }

  private handleExpiredToken() {
    window.alert('Token has expired');
    this.accountService.isUserAuthenticated.next(false);
    this.router.navigate(['log-in']);
  }
}
