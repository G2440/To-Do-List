$("ul").on("click","li",function(){
    $(this).toggleClass("cutoff");
});

$("ul").on("click","span",function(event){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$("input[type = 'text']").keypress(function(event){
    if(event.which == 13){
        var todoText = $(this).val();
        $(this).val("");

        $("ul").append("<li><span>X<span> " + todoText + "</li>");
    }
})
// THIS IS UNSTYLED
