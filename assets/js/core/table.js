$(document).ready(function () {
       var teamName = "name";
       var captainName = "leadername";
       var classUp = "upbtn";
       var classDown = "downbtn";

       //add Method
       $("#add").click(function () {
              var _len = $("#tb tr").length;
              $("#tb").append("<tr id=" + _len + " >" +
                     "<td>" + "<div class='radio'> <label> <input type='radio' name='optionsRadios' id=" + _len + " value=" + _len + "> </label></div>" + "</td>" +
                     "<td>" + teamName +_len + "</td>" +
                     "<td>" + captainName + "</td>" +
                     "<td id = 'queue'>" + _len + "</td>" +
                     "<td><input type='button' class='upbtn'  value = '上移'/>" +
                     "<input type='button' class='downbtn'  value = '下移'/>" +
                     "</td>" + "</tr>");
       });




       //delete Method 
       $("#delete").click(function () {
              var _len = $("#ta tr").length;
              var id = $("input[type='radio']:checked").val();
               $("tr[id='" + id + "']").remove();

       });

       //up Method
       $(document).on("click",".upbtn ",function(){
              var $tr = $(this).parents("tr");
              var l = $tr.index();
              if (l != 0) {
                     $tr.prev().before($tr); //在每个匹配的元素之前插入内容。
                     $tr.find("#queue").html(l);
                     $tr.next().find("#queue").html(l + 1);
              }
       });

       //down Method
       $(document).on("click",".downbtn ",function(){
              
              var trLength = $("input.downbtn").length;
              console.log(trLength);
              var $tr = $(this).parents("tr");
              var l = $tr.index();
              console.log(l);
              if (l != trLength - 1) {
                     $tr.next().after($tr); //在每个匹配的元素之后插入内容。
                     $tr.find("#queue").html(l + 2);
                     $tr.prev().find("#queue").html(l + 1);
              }

       });

});