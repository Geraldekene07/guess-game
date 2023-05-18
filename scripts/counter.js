//selecting DOM elements
const result = document.querySelector('.result')
const Decrease = document.querySelector('.Dec')
const Increase = document.querySelector('.inc')
const Reset = document.querySelector('.res')
const display = document.querySelector('.display')

// console.log(Decrease, Increase,Reset);

//for decrease
Decrease.addEventListener('click', () =>{
    result.innerHTML--;
    handleColorChange()
})
//for increase
Increase.addEventListener('click', () => {
    result.innerHTML++
    handleColorChange()
})
//for reset
Reset.addEventListener('click', () => {
    result.innerHTML =+0
    handleColorChange()
})

//
function handleColorChange() {
    if(result.innerHTML < 0){
        display.style.color = 'red';
    }else if(result.innerHTML > 0){
        display.style.color = 'green';
    }else{
        display.style.color = '#fff';
    }
    
}