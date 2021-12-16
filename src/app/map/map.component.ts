import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.scss'],
})
export class MapComponent {

    public zoom = 15;

    public position = {
        lat: 50.4638308,
        lng: 30.5006951,
    };

    constructor() {
    }

    //in index html add script 
    //<script src="https://maps.googleapis.com/maps/api/js?key=KEY&callback=initMap" ></script>
    
}
