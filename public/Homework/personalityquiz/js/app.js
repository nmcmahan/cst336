$("button").on("click", gradeQuiz);

function gradeQuiz() {
              $("#validationFdbk").html("");
              
              if (!isFormValid()) {
                  return;
              }
              
              let white=0;
              let blue=0;
              let black=0;
              let red=0;
              let green=0;
              let q1Response = $("input[name=q1]:checked").val();
              let q2Response = $("input[name=q2]:checked").val();
              let q3Response = $("input[name=q3]:checked").val();
              let q4Response = $("input[name=q4]:checked").val();
              let q5Response = $("input[name=q5]:checked").val();
              
              if (q1Response=="wh") {
                  white+=10;
              } else if (q1Response=="bu") {
                  blue+=10;
              } else if (q1Response=="bl") {
                  black+=10;
              } else if (q1Response=="rd") {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q2Response=="wh") {
                  white+=10;
              } else if (q2Response=="bu") {
                  blue+=10;
              } else if (q2Response=="bl") {
                  black+=10;
              } else if (q2Response=="rd") {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q3Response=="wh") {
                  white+=10;
              } else if (q3Response=="bu") {
                  blue+=10;
              } else if (q3Response=="bl") {
                  black+=10;
              } else if (q3Response=="rd") {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q4Response=="wh") {
                  white+=10;
              } else if (q4Response=="bu") {
                  blue+=10;
              } else if (q4Response=="bl") {
                  black+=10;
              } else if (q4Response=="rd") {
                  red+=10;
              } else {
                  green+=10;
              }
              
              if (q5Response=="wh") {
                  white+=10;
              } else if (q5Response=="bu") {
                  blue+=10;
              } else if (q5Response=="bl") {
                  black+=10;
              } else if (q5Response=="rd") {
                  red+=10;
              } else {
                  green+=10;
              }
             
}