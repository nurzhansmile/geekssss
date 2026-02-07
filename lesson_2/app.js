// const kgsInput = document.querySelector('#kgs-input')
// const currenciesContainer = document.querySelector('.currencies')

// const { createElement } = require("react");

// const currenciesBlocks = currenciesContainer.querySelectorAll('.block')
// // const usdBlock = currenciesBlocks[0]
// // const euroBlock = currenciesBlocks[1]
// // const yuanBlock = currenciesBlocks[2]

// const [usdBlock, euroBlock, yuanBlock] = [...currenciesBlocks]

// kgsInput.addEventListener('input', function(){
//     const value  = Number(kgsInput.value)
// if(!value){
// // currenciesContainer.style.display = "none"
// currenciesContainer.classList.remove("visiable")
// }    else{
// // currenciesContainer.style.display = "flex"
//     currenciesContainer.classList.add("visiable")

// }
// let usdValue = usdBlock.querySelector("span")
// usdValue.textContent = (value / 87).toFixed(2)
// let euroValue = euroBlock.children[1]
// euroValue.textContent = (value / 103).toFixed(2)
// let yaunValue = yuanBlock.querySelector("span")
// yaunValue.textContent = (value / 12 ).toFixed(2) 

// })

const  inputNum1 = document.querySelector('#number1')
const  inputNum2 = document.querySelector('#number2')
const comparisonSigns = document.querySelector(".comparisonSigns")

let value2;
let value1;

inputNum2.addEventListener('input', ()=>{
value2 = Number(inputNum2.value)
  console.log(value2);
  
})
inputNum1.addEventListener('input', ()=>{
  value1 = Number(inputNum1.value)
  console.log(value1);
  
})

const btnCompare = document.querySelector(".compare")
console.log(btnCompare);
btnCompare.addEventListener('click', ()=>{
    if(value1 > value2){
        comparisonSigns.textContent = '>'
    }else if(value1 < value2){
        comparisonSigns.textContent = '<'
    }else if(value1 = value2){
        comparisonSigns.textContent = '='
    }
    
})