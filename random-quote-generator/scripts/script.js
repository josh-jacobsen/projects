// +++++++++ JSON Format +++++++++++++++++++//
// function getQuote() {

//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://api.icndb.com/jokes/random", false);
//   xhr.send();

//   var data = xhr.responseText;
//   var jsonResponse = JSON.parse(data);
//   var txt = jsonResponse["value"]["joke"];
//   var display = document.getElementById("display-area");
//   display.innerHTML = txt;
// }

// +++++++++ JSON Format +++++++++++++++++++//
function getQuote() {

  var xhr = new XMLHttpRequest();
  xhr.open("GET", "http://quotesondesign.com/api/3.0/api-3.0.json", false);
  xhr.send();

  var data = xhr.responseText;
  var jsonResponse = JSON.parse(data);
  var txt = jsonResponse["value"]["joke"];
  var display = document.getElementById("display-area");
  display.innerHTML = txt;
}

//+++++++++++++++ XML Format +++++++++++++++ //

//  function getQuote() {
//   var xhr = new XMLHttpRequest();
//   xhr.open("GET", "http://quotes.rest/qod.xml", false);
// //  Results in a "No 'Access-Control-Allow-Origin' header" error
// //  xhr.open("GET", "http://quotes.rest/", false);
//   //xhr.setRequestHeader('Content-Type', 'text/xml');
//   xhr.send();
//   //alert("Getting quote");
//   console.log(xhr.status);
//   console.log(xhr.statusText);
//   //console.log(xhr);
//   xmlDocument = xhr.responseXML;
//   console.log(xmlDocument);//.childNodes['0'].textContent);
//   //console.log(xhr);
//   //var json = JSON.parse(xhr);
//   //console.log(json);

//   txt = xmlDocument.getElementsByTagName("quote")[0].childNodes[0].nodeValue;
//   console.log(txt);

//   var display = document.getElementById("display-area");
//   //display.style.backgroundColor = "blue";
//   display.innerHTML = txt;
//   console.log(typeof xhr);
// }



  //console.log(xhr);
 // xmlDocument = xhr.responseXML;
  //console.log(xmlDocument);//.childNodes['0'].textContent);
  //console.log(xhr);


  //txt = xmlDocument.getElementsByTagName("quote")[0].childNodes[0].nodeValue;
  //console.log(txt);

  //var display = document.getElementById("display-area");
  //display.style.backgroundColor = "blue";
  //display.innerHTML = txt;
//}

//var url = 'http://api.alice.com/cors';
//xhr.send();

// function getQuote() {
//   var text = $.ajax({
//      url: "http://api.icndb.com/jokes/random",
//      data: {
//         format: 'json'
//      },
//      error: function() {
//         $('#display-area').html('<p>An error has occurred</p>');
//      },
//      dataType: 'json',
//      success: function(data) {
//         var $title = $('<h1>').text(data.talks[0].talk_title);
//         var $description = $('<p>').text(data.talks[0].talk_description);
//         $('#display-area')
//            .append($title)
//            .append($description);
//      },
//      type: 'GET'
//   });
//   console.log(text);
// }