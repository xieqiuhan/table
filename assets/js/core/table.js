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
                     "<td><input type='text' class='toIndex' style='width:20px;' />" +
                     "<input type='button' class='downbtn'  value = '移动'/>" +
                     "</td>" + "</tr>");
       });


       //delete Method 
       $("#delete").click(function () {
        
              var id = $("input[type='radio']:checked").val();
             
               $("tr[id='" + id + "']").remove();

       });
       
       //move Method
       $(document).on("click",".downbtn ",function(){
              var trLength = $("input.downbtn").length;
              var $tr = $(this).parents("tr");
              var toIndex = $(this).prev().val();
              var l = $tr.index();
              if(toIndex == 0){
                     return;
              }else if(l > toIndex){
                     $(".table tr").eq(toIndex ).before($tr);
                     $tr.find("#queue").html(toIndex);
                     changeQueue(toIndex,l);
                     $('.toIndex').val("");  

              }else
              {
                     $(".table tr").eq(toIndex ).after($tr);
                     $tr.find("#queue").html(toIndex);
                     changeQueue(l,toIndex);
                     $('.toIndex').val("");  
              }
            
              console.log(toIndex);
            
       });

      //a < b
       function changeQueue(a,b){
              for(var i = a ;i<=b+1;i++){
                     $(".table tr").eq(i).find("#queue").html(i);
              }
       }


     //  up Method
       // $(document).on("click",".upbtn ",function(){
       //        var $tr = $(this).parents("tr");
       //        var toIndex = $(this).prev().val();
       //        console.log(toIndex);
       //        var l = $tr.index();
       //        if (l != 0) {
       //               $tr.prev().before($tr); //在每个匹配的元素之前插入内容。
       //               $tr.find("#queue").html(l);
       //               $tr.next().find("#queue").html(l + 1);
       //        }
       // });

       //down Method
       // $(document).on("click",".downbtn ",function(){
              
       //        var trLength = $("input.downbtn").length;
       //        console.log(trLength);
       //        var $tr = $(this).parents("tr");
       //        var l = $tr.index();
       //        console.log(l);
       //        if (l != trLength - 1) {
       //               $tr.next().after($tr); //在每个匹配的元素之后插入内容。
       //               $tr.find("#queue").html(l + 2);
       //               $tr.prev().find("#queue").html(l + 1);
       //        }

       // });

});