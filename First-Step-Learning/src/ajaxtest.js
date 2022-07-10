var date

var time

var topics

var Password

var Dura

var josnbody

var combine

var url

var email

var sJWT

document.getElementById("myBtn").onclick = function () { GrabV };

document.getElementById("myBtn").addEventListener("click", GrabV)

function GrabV() {

email = document.getElementById("email").value

date = document.getElementById("date").value

time = document.getElementById("time").value

topics = document.getElementById("topic").value

Password = document.getElementById("Password").value

Dura = document.getElementById("duration").value

Dura = parseInt(Dura)

combine = date + "T" + time

MakeToken()

}

function MakeToken() {

MakeJson()

}

function MakeJson() {

jsonbody = {

"topic": topics,

"type": 2,

"start_time": combine,

"duration": Dura,

"password": Password,

"timezone": 'America/New_York',

"settings": {

  "host_video": true,

  "participant_video": true,

  "join_before_host": false,

  "mute_upon_entry": true,

}
}

Func()

}

function Func() {

url = 'https://api.zoom.us/v2/users/ 1' + email + '/meetings'

var jboy = JSON.stringify(josnbody)

var head = new Headers();

head.append('Content-Type', 'application/json');

head.append('authorization', 'Bearer' + sJWT);

var initObject = {

method: 'POST', headers: head, body: jboy
}

var input = new Request(url, initObject)

fetch(input)

.then(function (repsonse) {

  return response.json();

})

.then(function (data) {

  console.log(data);

})

.catch(function (err) {

  console.log("Something went wrong!", err);

});
}




