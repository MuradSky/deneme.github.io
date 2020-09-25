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
            let btnIndex = e.target.dataset.i
            if(btnIndex === "0") {
                // if there was a click on the index 0
                fanSvg.style.fill ="#ccc" 
                animateTransform.endElement();
                btnSwitch = false;
            }
            if(btnIndex === "1") {
                // if there was a click on the index 1
                fanSvg.style.fill ="#09f53c";
                btnSwitch = true;
                animateTransform.endElement();
            }
            if(btnIndex === "2") {
                // if there was a click on the index 3
                if(btnSwitch) {
                    // if btnSwitch === true
                    fanSvg.style.fill ="#000"
                    animateTransform.beginElement();
                }
            }
        })
    })
}
/** btnsListener */
export {btnsListener};