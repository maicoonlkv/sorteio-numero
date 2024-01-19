

function generateNumber() {

    console.log("Me chamou?")

    const min = Math.ceil(document.querySelector(".minNumber").value)
    const max = Math.floor(document.querySelector(".maxNumber").value)

    if (min > max) {
        alert("O PRIMEIRO NÚMERO PRECISA SER MENOR QUE O SEGUNDO")
    } else {

        const result = Math.floor(Math.random() * (max - min) + min);

        alert(result)
        console.
            log(min)
        console.log(max)
    }
}



