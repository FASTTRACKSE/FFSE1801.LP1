var req = new XMLHttpRequest();
var data;
var url = "http://api.kaitokid.test/api/products/5";
var param = "";
req.open("DELETE", url, true);
// req.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
req.send(param);
req.onreadystatechange = function(params) {
  if (req.readyState == 4) {
    if (req.status == 200) {
      data = eval("(" + req.responseText + ")");
      document.write(data[1].name);
      console.log(data);
    } else {
      document.write(req.statusText);
    }
  }
};
// var client = new XMLHttpRequest();
// client.open("GET", url, true);
// client.send();
// client.onreadystatechange = function() {
//   if (this.readyState == this.HEADERS_RECEIVED) {
//     document.write(client.getResponseHeader("Content-Type"));
//     document.write(client.response);
//     console.log(client);
//   }
// };
// // Create the XHR object.
// function createCORSRequest(method, url) {
//   var xhr = new XMLHttpRequest();
//   if ("withCredentials" in xhr) {
//     // XHR for Chrome/Firefox/Opera/Safari.
//     xhr.open(method, url, true);
//   } else if (typeof XDomainRequest != "undefined") {
//     // XDomainRequest for IE.
//     xhr = new XDomainRequest();
//     xhr.open(method, url);
//   } else {
//     // CORS not supported.
//     xhr = null;
//   }
//   return xhr;
// }

// // Helper method to parse the title tag from the response.
// function getTitle(text) {
//   return text.match("<title>(.*)?</title>")[1];
// }

// // Make the actual CORS request.
// function makeCorsRequest() {
//   // This is a sample server that supports CORS.
//   var url =
//     "http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html";

//   var xhr = createCORSRequest("GET", url);
//   if (!xhr) {
//     alert("CORS not supported");
//     return;
//   }

//   // Response handlers.
//   xhr.onload = function() {
//     var text = xhr.responseText;
//     var title = getTitle(text);
//     alert("Response from CORS request to " + url + ": " + title);
//   };

//   xhr.onerror = function() {
//     alert("Woops, there was an error making the request.");
//   };

//   xhr.send();
// }

// var url = "http://api.kaitokid.test/api/products",
//   method = "GET";
// var a = createCORSRequest(method, url);

// document.write(a);
// console.log(a);

// var a = axios
//   .get("http://api.kaitokid.test/api/products")
//   .then(function(response) {
//     console.log(response);
//   })
//   .catch(function(error) {
//     console.log(error);
//   });

// console.log(a);

// var xhr = new XMLHttpRequest();
// xhr.open("GET", "http://test.test/index.php", true);
// xhr.onreadystatechange = function() {
//   if (xhr.readyState == 4) {
//     // JSON.parse does not evaluate the attacker's scripts.
//     var resp = JSON.parse(xhr.responseText);
//   }
// };
// xhr.send();
// console.log(xhr);
