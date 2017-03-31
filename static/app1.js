//Distance between Prev and Current Positions
function getDistanceFromLatLonInKm(lat1,lon1,lat2,lon2) {
  var R = 6371; // Radius of the earth in km
  var dLat = deg2rad(lat2-lat1);  // deg2rad below
  var dLon = deg2rad(lon2-lon1);
  var a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
    Math.sin(dLon/2) * Math.sin(dLon/2)
    ;
  var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  var d = R * c; // Distance in km
  console.log(d);
  return d;
}

var TimeStamp = function(){
  var timeStamp = Math.floor(Date.now() / 1000);
  console.log(timeStamp);
  return timeStamp;
};

function speedCalc(){
  diff_timestamp = timestamp2 - timestamp1;
  speed = getDistanceFromLatLonInKm()/diff_timestamp;
  return speed;
}

function deg2rad(deg) {
  return deg * (Math.PI/180);
}


$(document).on('click','#login-btn',function(e){
  var username = $('#username').val();
    var userStorage = JSON.parse(localStorage.getItem("user"));
    var storedUsername = userStorage.username;

    storedUsername.forEach(function(i,j){
      if(username == i){
        var lat = userStorage.lat[j];
        var lng = userStorage.lng[j];
        var timeStamp = userStorage.timeStamp[j];
        if (navigator.geolocation) {
                 navigator.geolocation.getCurrentPosition(function(position) {
                    pos = {
                     lat: position.coords.latitude,
                     lng: position.coords.longitude
                   };
                 });
               }

        var totalDistance = getDistanceFromLatLonInKm(lat,lng,pos.lat,pos.lng);
        var timeStampDIff = (TimeStamp() - timeStamp)/3600;
        var speed = totalDistance/timeStampDIff;
        console.log(speed);
        if(speed>300){
          e.preventDefault();
          window.location.pathname='/otp';
          console.log('its working');
        }
      }
    });

  for(i=0;i<userStorage.username.length;i++){
    if(username === userStorage.username[i]){
      //var storedUsername = userStorage.username[i];
      var lat = userStorage.lat[i];
    }
  }


});
