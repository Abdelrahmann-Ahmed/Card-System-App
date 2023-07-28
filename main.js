main = document.getElementsByClassName("section-2")[0]
cardNumber = document.getElementsByClassName("data")[0].children[0]
cardName = document.getElementsByClassName("details")[0].children[0]
cardExpire = document.getElementsByClassName("details")[0].children[1]
backNumber = document.getElementsByClassName("back")[0].children[0]

cardName.value = `FELICIA LEIRE`
cardNumber.value = `0000 0000 0000 0000`
cardExpire.value = `00/00`
backNumber.value = `00/00`

inputName = document.getElementsByName("cardholdername")[0]
inputNumber = document.getElementsByName("cardnumber")[0]
month = document.getElementsByName("date")[0]
year = document.getElementsByName("date")[1]
cvc = document.getElementsByName("cvc")[0]
button = document.getElementsByTagName("button")[0]

errorOne = document.getElementsByClassName("error1")[0]
errorTwo = document.getElementsByClassName("error2")[0]
errorThree = document.getElementsByClassName("error3")[0]
errorFour = document.getElementsByClassName("error4")[0]

inputNumber.addEventListener("focus",function() {
    inputNumber.style.border = "2px solid black"
    errorOne.style.display = "none"
    errorTwo.style.display = "none"
})

month.addEventListener("focus",function() {
    month.style.border = "2px solid black"
    year.style.border = "2px solid black"
    cvc.style.border = "2px solid black"
    errorThree.style.display = "none"
    errorFour.style.display = "none"
})

function checkNum(element,error2) {
    if (element.value.length !== 16) {
        element.style.border = "2px solid red"
        error2.style.display = "block"
        return false
    } 
    else {
        return true
    }
}

function checkLimits(element1,element2,error) {
    if ((element1.value > 2023 && element2.value<=12)) {
        return true
    } else {
        element2.style.border = "2px solid red"
        error.style.display = "block"
        return false
    }
}

function checkBlank (element,element2,element3,error) {
    if (element.value === ""||element2.value === "" ||element3.value === "") {
        error.style.display = "block"
        element.style.border = "2px solid red"
        return false
    } else {
        return true
    }
}

function checkName (element) {
    if (element.value==="") {
        element.style.border = "2px solid red"
        return false
    } else {
        return true
    }
}



button.addEventListener("click", function() {
    let len = main.children.length
    checkNum(inputNumber,errorTwo)
    checkBlank(month,year,cvc,errorThree)
    checkLimits(year,month,errorFour)
    checkName(inputName)
    if (checkNum(inputNumber,errorTwo)&&checkBlank(month,year,cvc,errorThree)&&checkLimits(year,month,errorFour)&&checkName(inputName)) {
        cardNumber.innerHTML = ` ${inputNumber.value.slice(0,4)} ${inputNumber.value.slice(4,8)} ${inputNumber.value.slice(8,12)} ${inputNumber.value.slice(12,16)}`
        cardName.innerHTML = `${inputName.value}`
        cardExpire.innerHTML= `${month.value}/${year.value}`
        backNumber.innerHTML = `${cvc.value}`
        let nw = document.createElement("div")
        let nd = document.createElement("div")
        let ns = document.createElement("div")
        let nnf = document.createElement("div")
        let butt = document.createElement("button")
        butt.innerHTML = `Continue`
        nw.setAttribute("class","form")
        nd.setAttribute("class","nimg")
        ns.setAttribute("class","nspan")
        ns.innerHTML = `THANK YOU` 
        nnf.setAttribute("class","ndiv")
        nnf.innerHTML = `We 've added your card details` 
        nw.appendChild(nd)
        nw.appendChild(ns)
        nw.appendChild(nnf)
        nw.appendChild(butt)
        for (let i = 0 ; i < len ; i++) {
            main.removeChild(main.children[0])
        }
        main.appendChild(nw)
    }
})