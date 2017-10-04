
const axios = require("axios");
const url =
  "https://maps.googleapis.com/maps/api/js?key=AIzaSyAAOcyB-GjFLa4ck2GfeIQksgtunFbxpow&libraries=places&callback=initialize";
axios
  .get(url)
  .then(response => {
    console.log(
      `${response.data}`
    );
  })
  .catch(error => {
    console.log(error);
});