jQuery(".pooled").click(function () {
    //console.log("pooled click");
    if (jQuery(this).hasClass("reserve"))
        alert("the seat already reserved");
    else
        jQuery(this).addClass("reserve");
    //alert($(this).attr("id"));
});
