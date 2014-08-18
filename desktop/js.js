$(document).ready(function(){
    
    $("#menubar").css("width", $(document).width());
    
    var plus = true;
    
    $('#button').click(function() {
        $("#sidebar").slideToggle(200);
        if (plus){
            $("#button").html("-");
            plus = false;
        }else{
            $("#button").html("+");
            plus = true;
        }
        console.log("toggled");
    });
    
    $("#s1").click(function(){
        document.location = "index.html";
    });
    
    $("#twtr").click(function(){
        document.location = "http://tehurn.com/";
    });
    
    $("#titletext").mouseenter(function() {
        $("#motto").slideDown(200);
    });
    
    $("#titletext").mouseleave(function() {
        $("#motto").slideUp(200);
    });

})