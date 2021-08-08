let car = document.querySelectorAll(".fa-car");
// var plotfull = [];
// plotfull.push(car[1])

var popUpForEntry = document.querySelector(".popForEmptyPlot").firstChild;
var popCont = document.querySelector(".popUpContent");
var numOfPlots = JSON.parse(localStorage.getItem("plotArr"));
var plotFromArr = [];
if (numOfPlots) {
  numOfPlots.map(element => {
    plotFromArr.push(element.ParkingPlot);
  })
}

function displayingCar() {
  if (plotFromArr.includes("Plot 1")) {
    car[0].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 2")) {
    car[1].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 3")) {
    car[2].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 4")) {
    car[3].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 5")) {
    car[4].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 6")) {
    car[5].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 7")) {
    car[6].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 8")) {
    car[7].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 9")) {
    car[8].style.visibility = "visible";
  }
  if (plotFromArr.includes("Plot 10")) {
    car[9].style.visibility = "visible";
  }
}
displayingCar();

//WrongId PopUp Ok
var wrongIdPopUp = document.querySelector(".wrongIdPopUp");
var IdButton = document.querySelector(".idHidden")
IdButton.addEventListener("click", function () {
  wrongIdPopUp.style.display = "none";
})

//Full PopUp Ok
var fullPop = document.querySelector(".plotsFull");
var fullButton = document.querySelector(".fullHidden")
fullButton.addEventListener("click", function () {
  fullPop.style.display = "none";
})


//Empty PopUp
let popUpOPenerEmpty = document.querySelector(".btnForEmptyPlot");
let popUpEmpty = document.querySelector(".popForEmptyPlot");

//FulFil PopUp
let popUpOPenerOut = document.querySelector(".checkOut");
let popUpOut = document.querySelector(".popForCheckOut");

//PopUp Sec
for (var i = 0; i < car.length; i++) {
  var elements = car[i].parentElement.nextElementSibling;
  var plotNo = elements.innerText;
  pElementForPop = document.createElement("p");
  var textForPElement = document.createTextNode(plotNo);
  pElementForPop.appendChild(textForPElement);

  if (getComputedStyle(car[i]).getPropertyValue("visibility") == "hidden") {
    document.querySelector(".popUpEmptyContent").appendChild(pElementForPop);
    pElementForPop.addEventListener("click", function () {
      var currentplot = event.target.innerText;
      localStorage.setItem("Plot NO", currentplot);
      location.href = "carDetals.html";
    });
  }
  else if (getComputedStyle(car[i]).getPropertyValue("visibility") == "visible") {
    document.querySelector(".popCheckOutContent").appendChild(pElementForPop);
    pElementForPop.addEventListener("click", function () {
      var plotForRemove = event.target.innerText;
      numOfPlots.map(element => {
        if (element.ParkingPlot == plotForRemove) {
          var idNoChecking = prompt("Enter Your Id No.")
          if (idNoChecking == element.UserID) {
            var deletingPlot = numOfPlots.indexOf(element)
            numOfPlots.splice(deletingPlot, 1)
            location.reload()
          } else {
            popUpOut.style.display = "none"
            wrongIdPopUp.style.display = "flex";
          }
        }
      })
      localStorage.setItem('plotArr', JSON.stringify(numOfPlots))
    })
  }
}


//function For popUp
const popUpFun = (popUpSel) => {
  if (getComputedStyle(popUpSel).getPropertyValue("display") == "none") {
    popUpSel.style.display = "flex";
  } else if (popUpSel.style.display == "flex") {
    popUpSel.style.display = "none";
  }
}

popUpOPenerEmpty.addEventListener("click", function () {
  var EmptiedPopEle = popUpEmpty.getElementsByTagName("p")
  if (EmptiedPopEle.length == 0) {
    fullPop.style.display = "flex"
  }
  else {
    popUpFun(popUpEmpty)
  }
})
popUpOPenerOut.addEventListener("click", function () {
  popUpFun(popUpOut)
})
checkOutEmpt = popUpOut.getElementsByTagName("p") 
if(checkOutEmpt.length == 0){
  popUpOPenerOut.setAttribute("disabled", "disabled");
}