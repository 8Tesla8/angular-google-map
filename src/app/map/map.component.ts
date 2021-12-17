import { Component } from '@angular/core';

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
}
