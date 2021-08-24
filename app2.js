// js for Car Details Page
var currentPlotArr = []

function park() {
        // var carName = document.querySelector("#carname").value;
        // var carNumber = document.querySelector("#carnum").value;
        // var userName = document.querySelector("#username").value;
        // var userId = document.querySelector("#userID").value;

        let divOfDet = document.querySelector(".details")
        let arrOfInputs = divOfDet.getElementsByTagName("input");
        let [carName, carNumber, userName, userId] = arrOfInputs;
        var boolVal = 0;

        for (let i = 0; i < arrOfInputs.length - 1; i++) {
                if (!!arrOfInputs[i].value == true) {
                        boolVal++
                }
        }
        if (boolVal == 4) {
                var plotused = localStorage.getItem("Plot NO")
                var cardet = {
                        "NameOfCar": carName.value,
                        "numberOfCar": carNumber.value,
                        "nameOfUser": userName.value,
                        "UserID": userId.value,
                        "ParkingPlot": plotused
                }

                //creating empty array in localStorage For plotArr
                if (localStorage.getItem('plotArr') == null) {
                        localStorage.setItem('plotArr', '[]');
                }

                let oldData = JSON.parse(localStorage.getItem('plotArr'));
                oldData.push(cardet); //pushing data to array

                //saving the old and new data
                localStorage.setItem('plotArr', JSON.stringify(oldData))

                localStorage.setItem(userId, JSON.stringify(cardet));
                location.href = "index.html"
        }
        else { alert("It seems you have not fulfil all the box") }
}
