let getBooks = function() {
    $("#books").empty();
    var url = "https://openlibrary.org/api/books?bibkeys=ISBN:" + $("#ISBN").val() + "&format=json&jscmd=data";
    $.ajax({
       url : url,
       type: "GET",
       datatype : "json",
       success: function(data) {
           console.log(data);
           var vals = Object.values(data);
           var objname = vals[0].publishers[0];
          // var info = "Title: " +val[0].title+ "\n Author: " +vals[0].authors['name']+ "\n Publish year" +vals[0].publish_date+ "\n Publisher: " +vals[0].publishers['name']+ "\n ISBN: "  "\n Pages: " +val[0].pagination;
           console.log(vals);
           console.log(objname);
           $("#books").append("<div class=\"img-thumbnail flex-item\"><img src=\""+vals[0].cover['large']+"\"></div>");
          // $("#books").append("<div></div>"");
       },
       error: function(err){
			console.log(err);
		}
    });
}