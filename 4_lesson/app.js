// const array = [23, 45, 65, 46, 95, 27]
const originalContainer = document.querySelector("#original");
const resultContainer = document.querySelector("#result");

// renderArray(originalContainer, array);

// function renderArray (container, array){
//     container.innerHTML = " "
//     array.forEach(function(x){
//         const div = <div class="color-box">${x}</div>
//         let html = container.innerHTML
//         html += div
//         container.innerHTML = html
//     })
// }

// function mapExample (){
// const x10array = array.map(function(item){
//     return  item * 10
// })
// renderArray(resultContainer, x10array)

// }

// function filterExample (item){
//     const filtered = array.filter(function(item){
//         return item > 40
//     })
//     renderArray(resultContainer, filtered)
// }

// function reduceExample(){
//     const max = array.reduce(function(max,item){
//         return item > max ? item : max
//     })

//     const sum = array.reduce(function(sum, item){
//         return sum +=item
//     })
//     renderArray(resultContainer, [max, sum])
// }

///////////////////////////////

console.log("1-задача");
const cashArray = [100, 150, 200, 250, 300, 350];
const som = cashArray.map((usd) => usd * 87);
som.forEach((item) => {
  console.log(item + " " + "сом");
});

//////////////////////////

console.log("2-задача");
const rating = [5, 4, 3, 4, 5, 3, 4, 3, 4, 5, 5];
const rateLetters = rating.map((rate) => {
  if (rate === 5) {
    return "A";
  } else if (rate === 4) {
    return "B";
  } else if (rate === 3) {
    return "C";
  }
  // console.log(rate);
});
console.log(rating);
console.log(rateLetters);

//////////////////////////////

console.log("3-задача");
const flags = [
  "us4155552671",
  "us2125558392",
  "us3055551299",
  "de0301234567",
  "de0897654321",
  "de0409876543",
  "kg312123456",
  "kg551987654",
  "kg770456789",
  "ru4951234567",
];

const codeNumber = flags.map((code) => {
  const codeFlag = code.slice(0, 2);
  if (codeFlag === "us") {
    return "+1";
  } else if (codeFlag === "de") {
    return "+49";
  } else if (codeFlag === "kg") {
    return "+996";
  } else if (codeFlag === "ru") {
    return "+7";
  }
});
console.log(codeNumber);

//////////////////////////

console.log("4-задача");
const phoneNumbers = [
  "0700 123 456",
  "0770 234 567",
  "0550 345 678",
  "0551 456 789",
  "0555 567 890",
  "0705 678 901",
  "0707 789 012",
  "0755 890 123",
  "0500 901 234",
  "0505 012 345",
];

const megaNumbers = phoneNumbers.filter((num) => {
  // console.log(num[2]);
  if (num[2] === "5") {
    return num;
  }
});
console.log(megaNumbers);

/////////////////////////

console.log("5-задача");
const carNumber = [
  "01 KG 123 ABC",
  "02 KG 456 DEF",
  "03 KG 789 GHI",
  "01 KG 321 JKL",
  "05 KG 654 MNO",
  "06 KG 987 PQR",
  "07 KG 111 STU",
  "01 KG 222 VWX",
  "09 KG 333 YZA",
  "01 KG 444 BCD",
];

const numBish = carNumber.filter((num) => {
  const firstNun = num.slice(0, 2);
  if (firstNun === "01") {
    return num;
  }
});
console.log(numBish);

/////////////

console.log("6-задача");
const points = [8, 10, 7, 10, 8, 9, 4, 10];
const sum = points.reduce((sum, point) => {
  return (sum += point);
});
console.log("Итоги баллов студента:" + " " + sum);

///////////////

console.log("7-задача");
const visits = [1, 0, 1, 1, "online", "online", 1, 0];

const result = visits.reduce((sum, visit) => {  
if(visit==="online"){
 return sum += 1
}else{
 return sum += visit
}
});
console.log(result);
