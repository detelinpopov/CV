﻿/**
 * Define SVG path for target icon
 */
var targetSVG =
    "M9,0C4.029,0,0,4.029,0,9s4.029,9,9,9s9-4.029,9-9S13.971,0,9,0z M9,15.93 c-3.83,0-6.93-3.1-6.93-6.93S5.17,2.07,9,2.07s6.93,3.1,6.93,6.93S12.83,15.93,9,15.93 M12.5,9c0,1.933-1.567,3.5-3.5,3.5S5.5,10.933,5.5,9S7.067,5.5,9,5.5 S12.5,7.067,12.5,9z";

/**
 * Create the map
 */
var map = AmCharts.makeChart("divMap",
    {
        "type": "map",
        "showDescriptionOnHover": false,
        "theme": "light",
        "imagesSettings": {
            "rollOverColor": "#40ff00",
            "rollOverScale": 2.5,
            "selectedScale": 2.5,
            "selectedColor": "#40ff00",
            "color": "#40ff00"
        },

        "areasSettings": {
            "unlistedAreasColor": "#15A892",
            "outlineThickness": 0.1
        },

        "dataProvider": {
            "map": "worldLow",
            "zoomLongitude": 23,
            "zoomLatitude": 42,
            "images": [
                {
                    "svgPath": targetSVG,
                    "scale": 1,
                    "title": "<div> Sofia, Bulgaria </div>",                   
                    "latitude": 42.6977,
                    "longitude": 23.3219
                }
            ]
        },
        "export": {
            "enabled": false
        }
    });
