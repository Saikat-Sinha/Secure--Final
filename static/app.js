//Checking Compatibility for geolocation
if (navigator.geolocation) {
         navigator.geolocation.getCurrentPosition(function(position) {
           var pos = {
             lat: position.coords.latitude,
             lng: position.coords.longitude
           };

         });
       }

//TimeStamp
var TimeStamp = function(){
  var timeStamp = Math.floor(Date.now() / 1000);
  console.log(timeStamp);
  return timeStamp;
};

//Getting the Current Lat and long

$(document).ready(function(){
  TimeStamp();
  var username = $('#username').val();
  var email = $('#email').val();
  var signupBtn = $('.my-btn');
  var storageParse = JSON.parse(localStorage.getItem('user'));
  if (navigator.geolocation) {
           navigator.geolocation.getCurrentPosition(function(position) {
              pos = {
               lat: position.coords.latitude,
               lng: position.coords.longitude
             };
             return pos;
           });
         }
         if (localStorage.getItem("user") === null) {
           $(document).on("click",'.my-btn',function(){


                 var user = {}; //var user = {"username":["saikat123","sasaaa"],"lat":["103232","2134"]}
                 user.username = [];
                 user.lat = [];
                 user.lng = [];
                 user.timeStamp = [];

                   user.username.push($('#username').val());
                   user.lat.push(pos.lat);
                   user.lng.push(pos.lng);
                   user.timeStamp.push(TimeStamp());
                   localStorage.setItem('user', JSON.stringify(user));

         });
       }
       else{
         var user = {}; //var user = {"username":["saikat123","sasaaa"],"lat":["103232","2134"]}
         user = JSON.parse(localStorage.getItem('user'));
         $(document).on("click",'.my-btn',function(){
           user.username.push($('#username').val());
           user.lat.push(pos.lat);
           user.lng.push(pos.lng);
           user.timeStamp.push(TimeStamp());
           localStorage.setItem('user', JSON.stringify(user));
         });
       }

  });
