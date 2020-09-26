/**
 *  @function btnsListener  function to manipulate buttons and fan state
 * 
 *  @param{string} btns get buttons elements by selector
 *  @param{string} fan get fan vector object by id
 *  @param{string} animation get animationTransform SVG element by id
 * 
 *  @type{headerBtns }  save the received button elements
 *  @type{fanSvg }  save the received button fan
 *  @type{animateTransform }  save the received button animation
 *  @type{btnSwitch }  switch fan state  if (btnSwitch === false) fan disablet else  fan active
 *  @type{btnIndex } get button index by data attribute 
 */

const btnsListener = (btns, fan, animation) => {
    let headerBtns = document.querySelectorAll(btns),
        fanSvg = document.querySelector(fan),
        animateTransform = document.querySelector(animation),
        btnSwitch = false;
        fanSvg.style.fill ="#ccc";

    headerBtns.forEach(item => {
        item.addEventListener('click', (e, i) => {
            headerBtns.forEach(item => {item.classList.remove('active')})
            item.classList.add('active');
            //convert string dataset to number    
            let btnIndex = +e.target.dataset.i

            switch(btnIndex) {
                case 0 :
                    fanSvg.style.fill ="#ccc" 
                    animateTransform.endElement();
                    btnSwitch = false;
                    break;
                case 1 : 
                    fanSvg.style.fill ="#09f53c";
                    btnSwitch = true;
                    animateTransform.endElement();
                    break;
                case 2 :
                    if (btnSwitch) {
                        fanSvg.style.fill ="#000"
                        animateTransform.beginElement();
                    } 
                    break;
                default :
                    break;
            }
        })
    })
}
/** btnsListener */
export {btnsListener};
