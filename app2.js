// js for Car Details Page
var currentPlotArr = []

function park() {
        var carName = document.querySelector("#carname").value;
        console.log(carName)

        var carNumber = document.querySelector("#carnum").value;
        console.log(carNumber)

        var userName = document.querySelector("#username").value;
        console.log(userName)

        var userId = document.querySelector("#userID").value;
        console.log(userId)

        var plotused = localStorage.getItem("Plot NO")
        var cardet = {
                "NameOfCar ": carName,
                "numberOfCar": carNumber,
                "nameOfUser": userName,
                "UserID": userId,
                "ParkingPlot": plotused
        }

        //creating empty array in localStorage For plotArr
        if (localStorage.getItem('plotArr') == null) {
                localStorage.setItem('plotArr', '[]');
        }

        let oldData = JSON.parse(localStorage.getItem('plotArr'));
        oldData.push(cardet); //pushing data to array

        //saving the old and new data
        localStorage.setItem('plotArr',JSON.stringify(oldData))

        localStorage.setItem(userId, JSON.stringify(cardet));
        location.href = "index.html"
}