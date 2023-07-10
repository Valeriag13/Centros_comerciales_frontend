import { AfterViewInit, Component, OnInit } from '@angular/core';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import { fromLonLat } from 'ol/proj';
import OSM from 'ol/source/OSM';
import Feature from 'ol/Feature';
import Point from 'ol/geom/Point';
import Style from 'ol/style/Style';
import Icon from 'ol/style/Icon';
import VectorLayer from 'ol/layer/Vector';
import VectorSource from 'ol/source/Vector';




@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
})
export class InicioComponent  implements OnInit {

  constructor() { }
  
  ngOnInit() {
    this.initMap()
  }

  initMap(){
    const map = new Map({
      target: 'map',
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: fromLonLat([-75.51738,5.06889]),
        zoom: 14
      }),
    });
    
    const markers = [
      { lon: -75.4853100079514, lat: 5.056945798973207},
      { lon: -75.5094924899971, lat: 5.069560771670291 },
      { lon: -75.51289529184452, lat: 5.068490285085545 },
      { lon: -75.48980906300919, lat: 5.065632933582206 }
    ];

    const markerFeatures = markers.map((marker) => {
      const feature = new Feature({
        geometry: new Point(fromLonLat([marker.lon, marker.lat])),
      });
      feature.setStyle(
        new Style({
          image: new Icon({
            src: 'assets/marker.png',
            scale: 0.2,
          }),
        })
      );
      return feature;
    });
    

    const markerSource = new VectorSource({
      features: markerFeatures,
    });

    const markerLayer = new VectorLayer({
      source: markerSource,
    });

    map.addLayer(markerLayer);
  }
  

}


