$('button').on('click', gradeQuiz);


function isFormValid(){
              let isValid=true;
              if ($("#name").val()=="") {
                  isValid=false;
                  $("#namecheck").html("Please enter your name");
              }
              return isValid;
          }
          
function gradeQuiz() {
              $("#namecheck").html("");
              
              if (!isFormValid()) {
                  return;
              }
              
              let name=$("#name").val();
              let white=0;
              let blue=0;
              let black=0;
              let red=0;
              let green=0;
              let q1Response = $('input[name=q1]:checked').val();
              let q2Response = $('input[name=q2]:checked').val();
              let q3Response = $('input[name=q3]:checked').val();
              let q4Response = $('input[name=q4]:checked').val();
              let q5Response = $('input[name=q5]:checked').val();
              
              if (q1Response=='white') {
                  white+=10;
              } else if (q1Response=='blue') {
                  blue+=10;
              } else if (q1Response=='black') {
                  black+=10;
              } else if (q1Response=='red') {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q2Response=='white') {
                  white+=10;
              } else if (q2Response=='blue') {
                  blue+=10;
              } else if (q2Response=='black') {
                  black+=10;
              } else if (q2Response=='red') {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q3Response=='white') {
                  white+=10;
              } else if (q3Response=='blue') {
                  blue+=10;
              } else if (q3Response=='black') {
                  black+=10;
              } else if (q3Response=='red') {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q4Response=='white') {
                  white+=10;
              } else if (q4Response=='blue') {
                  blue+=10;
              } else if (q4Response=='black') {
                  black+=10;
              } else if (q4Response=='red') {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q5Response=='white') {
                  white+=10;
              } else if (q5Response=='blue') {
                  blue+=10;
              } else if (q5Response=='black') {
                  black+=10;
              } else if (q5Response=='red') {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (white>=20) {
                  $("#feedback").html(name + " Your primary mana is white, the color of loyalty, cooperation, and strength in numbers");
                  $("#white").css('display', 'block');
              } else if (blue>=20) {
                  $("#feedback").html(name + ": Your primary mana is blue, the color of knowledge, logic, and control");
                  $("#blue").css('display', 'block');
              } else if (black>=20) {
                  $("#feedback").html(name + ": Your primary mana is black, the color of ambition, power, and sacrifice");
                  $("#black").css('display', 'block');
              } else if (red>=20) {
                  $("#feedback").html(name + ": Your primary mana is red, the color of emotion, volatility, and independence");
                  $("#red").css('display', 'block');
              } else {
                  $("#feedback").html(name + ": Your primary mana is green, the color of nature, strength, and the natural order");
                  $("#green").css('display', 'block');
              }
             
}