document.querySelector("#eggNog").addEventListener("click", zero)

let total = 1;

function zero() {
    total = total + 1

    document.querySelector("#resulty").innerText = total
}


document.querySelector("#hotChocolate").addEventListener("click", addFour)

function addFour() {
    total = total + 4
    document.querySelector("#resulty").innerText = total
}
