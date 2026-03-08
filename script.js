let weights = []
let height = 1.78   // 5ft10

function addWeight(){

let input = document.getElementById("weightInput")
let weight = parseFloat(input.value)

if(!weight) return

weights.push(weight)

updateStats()

updateList()

input.value=""
}

function updateStats(){

let current = weights[weights.length-1]

let bmi = (current/(height*height)).toFixed(1)

document.getElementById("currentWeight").innerText = current+" kg"
document.getElementById("bmi").innerText = bmi

if(weights.length>1){

let change = (current - weights[weights.length-2]).toFixed(1)

document.getElementById("change").innerText = change+" kg"

}

}

function updateList(){

let list = document.getElementById("weightList")

list.innerHTML=""

weights.forEach(w=>{

let li = document.createElement("li")

li.innerText = w+" kg"

list.appendChild(li)

})

}
