$('#generate').on('click', function() {
    let num = $("#number").val();
    $("#images").html('');
$.ajax({
    type: "GET",
    url : "https://dog.ceo/api/breeds/image/random/" + num,
    dataType: "json",
    success: function(data) {
        console.log(data);
        data.message.forEach(function(message){
            $("#images").append("<img src="  +message +" />")
        })
    },
    error: function(error) {
        console.log(error);
    }
});
})