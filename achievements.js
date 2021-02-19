/*let achievement = 0
let stars = 0

fetch("achievements.json")
.then(response => response.json()) 
  .then(function(data){
    console.log(data)*/
    
var settings = {
  "url": "https://integratedprojectid-785e.restdb.io/rest/card",
  "method": "GET",
  "timeout": 0,
  "headers": {
    "x-apikey": "602bcd635ad3610fb5bb60f0"
  },
};


function ghost(){
$.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    let content=""
    content += "<tr><td>" + data[i].name + "</td>" +
          "<td>" + data[i].image + "</td>" +
          "<td>" + data[i].information + "</td>
    //var result= response.array[0].name;
    console.log(result);
    $("#achievement1","#ghost","#information").html(content);
  });

$.ajax(settings).done(function (response) {
    //var JSONResponse= JSON.parse(response);
    console.log(response);
    var result= data[0].image;
    console.log(result);
    $("#ghost").html(result);
  });
  }

$(document).ready(function () {
  $("html").on("load",function ghost(){
  })
})

