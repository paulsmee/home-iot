window.livingRoomTemperature = function () {
  $.get("/sensor/temperature/livingroom/data")
    .done(function (value) {
      console.log(value);
      document.getElementById("t1").innerHTML = "" + value + "c";
      if (value >= 35) {
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-half");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-three-quarters");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-quarter");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-empty");
        document
          .getElementById("living-temp")
          .classList.add("fa-thermometer-full");
      } else if (value >= 30 && value < 35) {
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-full");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-quarter");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-empty");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-half");
        document
          .getElementById("living-temp")
          .classList.add("fa-thermometer-three-quarters");
      } else if (value >= 25 && value < 30) {
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-full");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-three-quarters");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-quarter");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-empty");
        document
          .getElementById("living-temp")
          .classList.add("fa-thermometer-half");
      } else if (value >= 20 && value < 25) {
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-full");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-three-quarters");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-empty");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-half");
        document
          .getElementById("living-temp")
          .classList.add("fa-thermometer-quarter");
      } else {
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-full");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-three-quarters");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-quarter");
        document
          .getElementById("living-temp")
          .classList.remove("fa-thermometer-half");
        document
          .getElementById("living-temp")
          .classList.add("fa-thermometer-empty");
      }
    })
    .catch(function (err) {
      console.log("uh oh");
    });
};
livingRoomTemperature();
setInterval(() => {
  livingRoomTemperature();
}, 30000);
