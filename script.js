

function generateNumber() {

    console.log("Me chamou?")

    const min = Math.ceil(document.querySelector(".minNumber").value)
    const max = Math.floor(document.querySelector(".maxNumber").value)

    const result = Math.floor(Math.random() * (max - min) + min);

    alert(result)
    console.log(min)
    console.log(max)
}


