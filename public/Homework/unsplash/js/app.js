$('button').on('click', searchUnsplash);

function searchUnsplash() {
    var keyword = $("#keyword").val();
  var URL = "https://api.unsplash.com/search/photos?client_id=9EusTlPAOginEYxCR0J3RBpZYMgLMq1gFRUs6H0PLPA&query=" + encodeURIComponent(keyword);
  $("#images").empty();
$.ajax({
    type: "GET",
    url: URL,
    dataType: "json",
    success: function(data) {
        console.log(data);
        console.log(data.results[0].urls['small']);
       for (var i=0; i<6; i++){
       $("#images").append("<img class=\"resultimg\" src=\""+data.results[i].urls['small']+"\">");
       if (data.results[i].likes<=100) {
           $("#images").append("<img class=\"licon\" src=\"img/angry.png\"><br>");
       } else if (data.results[i].likes<=500) {
           $("#images").append("<img class=\"licon\" src=\"img/sad.png\"><br>");
       } else if (data.results[i].likes<=1000) {
           $("#images").append("<img class=\"licon\" src=\"img/neutral.png\"><br>");
       } else if (data.results[i].likes<=2000) {
           $("#images").append("<img class=\"licon\" src=\"img/happy.png\"><br>");
       } else {
           $("#images").append("<img class=\"licon\" src=\"img/vhappy.png\"><br>");
       }
    }
    },
    error: function(error) {
        console.log(error);
    }
});
};