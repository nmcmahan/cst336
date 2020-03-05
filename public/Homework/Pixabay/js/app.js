$(document).ready(function(){
var keyword = ["otter", "sun", "sports"];
var API_KEY = '15448261-ac74d31ddd5ba964f8fafb916';
$("#images").empty();
var random = Math.floor((Math.random() * 3) + 1);
var select = keyword[random];
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(select);
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        for (var i=0; i<4; i++){
        var random = Math.floor((Math.random() * 20) + 1);
        var like = data.hits[random].likes;
        $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+data.hits[random].pageURL+"\">Likes:"+like+"</img></div>");
    }
    }
};
xmlhttp.open("GET", URL, true);
xmlhttp.send();
});

let searchPixabay = function(){
var API_KEY = '15448261-ac74d31ddd5ba964f8fafb916';
var keyword = $("#keyword").val();
var orientation = $("#orientation").val();
var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent(keyword)+"&orientation=" +encodeURIComponent(orientation);
$("#images").empty();
var xmlhttp = new XMLHttpRequest();
xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        var data = JSON.parse(this.responseText);
        console.log(data);
        for (var i=0; i<4; i++){
        var random = Math.floor((Math.random() * 20) + 1);
        var like = data.hits[random].likes;
        $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+data.hits[random].pageURL+"\">Likes:"+like+"</img></div>");
    }
    }
};
xmlhttp.open("GET", URL, true);
xmlhttp.send();
};
/* $.getJSON(URL, function(data){
    for (var i=0; i<4; i++){
        var random = Math.floor((Math.random() * 20) + 1);
        var like = data.hits[random].likes;
        $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+data.hits[random].pageURL+"\">Likes:"+like+"</img></div>");
    }
//if (parseInt(data.totalHits) > 0) {
   // $.each(data.hits, function(i, hit){ console.log(hit.pageURL); });
    
//}
//else
//   console.log('No hits');
 console.log(data);
}); 

}; */

/*   
$("#images").empty();
$.ajax({
    type: "GET",
    url: URL,
    dataType: "json",
    success: function(data) {
        console.log(data);
        for (var i=0; i<4; i++){
        $("#images").append("<div class=\"img-thumbnail flex-item\"><img src=\""+data.hits[i].pageURL+"\"></div>");
    }
    },
    error: function(error) {
        console.log(error);
    }
});
 */


