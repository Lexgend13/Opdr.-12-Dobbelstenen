const Button = document.getElementById("knop")
const FrequencyCells = document.getElementsByClassName("Count")

knop.addEventListener("click", function() {
    console.log('Er is gegooid')
    array = []
    const count = [0,0,0,0,0,0]
    for (let index = 0; index < 8; index++) {
        randomNumber = Math.ceil(Math.random()*6)
        array.push(randomNumber) 
        count[randomNumber -1]++      
    }
    console.log(array)
    console.log(count)
    for (let i = 0; i < FrequencyCells.length; i++) {
        FrequencyCells[i].innerHTML = count[i]        
    }   
})



