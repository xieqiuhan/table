$(function(){
    //上移
    var $up = $(".up")
    $up.click(function() {
        var $tr = $(this).parents("tr");
        if ($tr.index() != 0) {
            $tr.fadeOut().fadeIn();
            $tr.prev().before($tr);
            
        }
    });
    //下移
    var $down = $(".down");
    var len = $down.length;
    $down.click(function() {
        var $tr = $(this).parents("tr");
        if ($tr.index() != len - 1) {
            $tr.fadeOut().fadeIn();
            $tr.next().after($tr);
        }
    });
    //置顶
    var $top = $(".top");
    $top.click(function(){
        var $tr = $(this).parents("tr");
        $tr.fadeOut().fadeIn();
        $(".table").prepend($tr);
        $tr.css("color","#f60");
    });
});
