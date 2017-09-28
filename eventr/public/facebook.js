FB.getLoginStatus(function(response) {
  if (response.status === 'connected') {
    // the user is logged in and has authenticated your
    // app, and response.authResponse supplies
    // the user's ID, a valid access token, a signed
    // request, and the time the access token 
    // and signed request each expire
    var uid = response.authResponse.userID;
    var accessToken = response.authResponse.accessToken;
  } else if (response.status === 'not_authorized') {
    // the user is logged in to Facebook, 
    // but has not authenticated your app
  } else {
    // the user isn't logged in to Facebook.
  }
 });

 //While you can call FB.getLoginStatus any time (for example, when the user tries to take a social action), most social apps need to know the user's status as soon as possible after the page loads. In this case, rather than calling FB.getLoginStatus explicitly, it is possible to check the user's status by setting status: true when you call FB.init.