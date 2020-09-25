/**
 * Bu çalışmamda ES6 ve node.js modules /import - export/ kullanımını gerçekleştirdim
 * 
 * Render SVG picture and manipulating animation state
 * @module btnsListener loading module ./btnsListener.js
 * @module drawHouse loading module ./drawHouse.js
 * @module fanSVG loading module ./fan.js
 * 
 * @function drawHouse  Render house figure
 * 
 * @function fanSVG Render house figure
 * @param {string} #fan_spinner passed id for manipulation fan spinner | id which is written after rendering
 * 
 * @function btnListener Button event function onclick
 * @param{string} .btn passed class selector to get the DOM item
 * @param{string} #fan passed id for manipulation fan color
 * @param{string} #animation passed id for manipulation SVG element animation Transform | which is written after rendering
*/

import {btnsListener} from './btnsListener.js';
import {drawHouse} from './drawHouse.js';
import {fanSVG} from './fan.js';
window.addEventListener('load', ()=>{
    drawHouse();
    fanSVG('#fan_spinner');
    btnsListener('.btns', '#fan', '#animation');
})