array = [1,500,230,40,65,28,32,45,1002]
let orden1 = array.sort(function(a,b){return a -b})
console.log(orden1)

let orden2 = orden1.reverse()
console.log(orden2)


function eliminar (){
    orden1.shift()
    console.log(orden1)
}

function concatenar () {
    let x = orden1.concat(orden2)
    console.log (x)
}

orden1.push(85,65,103,25)
console.log(orden1)