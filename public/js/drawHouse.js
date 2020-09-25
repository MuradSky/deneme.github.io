/**
 *  @module SVG loading svg.js library module ./fan.js
 *  @function drawHouse Creating a new SVG figure(House)
*/


import {SVG} from './svg.js';

const drawHouse = () => {
    const canvas = SVG().addTo('#zone-picture').viewbox(0, -255, 360, 260)
    // var rect = canvas.rect(10, 10).attr("width", "50%").attr("height", "50%").move("25%", "25%")
    var building = canvas.path('m0,0 360,0 m-30,0 0,-180 -150,-50 -150,50 0,180'
        ).fill('none').stroke({
        width: 6,
        color: '#87CEFA',
        linejoin: 'round',
        linecap: 'round'
      }).attr("id", "house"); 
}

/** drawHouse */
export {drawHouse};