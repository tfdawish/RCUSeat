//var StartDate;
//var EndDate;
//var eDate;
//var sDate;
//var today = new Date();

jQuery(".pooled").click(function () {
    //console.log("pooled click");
    if (jQuery(this).hasClass("reserve"))
        alert("the seat already reserved");
    else
        jQuery(this).addClass("reserve");
    //alert($(this).attr("id"));
});

//
//console.log("Turki Aldawish");
////
//
//
//
//jQuery("#chk").click(function () {
//
//    setTimeout(function () {
//        console.log("check click");
//    }, 4000);
//    console.log("check click");
//    //    // alert("clicked");
//    //    StartDate = document.getElementById('txtStartDate').value;
//    //    EndDate = document.getElementById('txtEndDate').value;
//    //
//    //    eDate = new Date(EndDate);
//    //
//    //    sDate = new Date(StartDate);
//    //
//    //    //var today = new Date();
//    //    console.log(StartDate + " and " + EndDate);
//    //    console.log("eDate : " + eDate);
//    //    console.log("sDate : " + sDate);
//    //    today = Date.now;
//    //    console.log("sDate : " + today);
//    //    if (sDate < today) {
//    //        alert("the start date less than today");
//    //    }
//    //
//    //    var listPooled = [
//    //        "aso-11-22",
//    //        "aso-11-23",
//    //        "aso-11-24",
//    //        "aso-11-25",
//    //        "aso-11-26"
//    //    ];
//    //    console.log(listPooled[1]);
//    //
//    //    //    console.log(sDate + " and " + eDate);
//    //    //    if (StartDate != "" && EndDate != "" && eDate > sDate) {
//    //    //        alert("Please ensure that the End Date is greater than or equal to the Start Date.");
//    //    //        return false;
//    //    //    }
//});
