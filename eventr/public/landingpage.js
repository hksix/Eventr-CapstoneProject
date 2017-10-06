

var accessToken;

function statusChangeCallback(response) {
  console.log('statusChangeCallback');
  console.log(response);
  // The response object is returned with a status field that lets the
  // app know the current login status of the person.
  // Full docs on the response object can be found in the documentation
  // for FB.getLoginStatus().
  if (response.status === 'connected') {
    // Logged into your app and Facebook.
    document.getElementById('status').innerHTML = 'You are logged in'
    FB.api();
  } else {
    // The person is not logged into your app or we are unable to tell.
  }
}
function login() {
  FB.login(function(response){
    console.log(response)
    console.log("user is logged in")

  });
}

function logout() {
  FB.logout(function(response) {
    console.log("user is logged out")
  })
}

function checkLoginState() {
  FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
    console.log(response.authResponse)
  });
}



// document.getElementById('facebook-logout').addEventListener('click', () => {
//   console.log("working")
//   function checkLoginState() {
//     FB.getLoginStatus(function(response) {
//       console.log(response)
//       statusChangeCallback(response);
//     });
//   }
//   FB.logout(function(response) {
//   // Person is now logged out
//   });
// })

// FB.getLoginStatus(function(response) {
//   statusChangeCallback(response);
//   if (response.status === 'connected') {
//     var uid = response.authResponse.userID;
//     accessToken = response.authResponse.accessToken;
//   } else if (response.status === 'not_authorized'){
//     console.log("user has not authentecated in app")
//   } else {
//     console.log("user is not logged in")
//   }
// });
  
  
// function statusChangeCallback(response) {
//   console.log('statusChangeCallback');
//   console.log(response);
//   // The response object is returned with a status field that lets the
//   // app know the current login status of the person.
//   // Full docs on the response object can be found in the documentation
//   // for FB.getLoginStatus().
//   if (response.status === 'connected') {
//     // Logged into your app and Facebook.
//     testAPI();
//   } else {
//     // The person is not logged into your app or we are unable to tell.
//     document.getElementById('status').innerHTML = 'Please log ' +
//       'into this app.';
//   }
// }