//Next tab buttons
$('#personal-next').on("click", function(){
    $('#nav-tab a').eq(1).click();
});

$('#position-next').on("click", function(){
    $('#nav-tab a').eq(2).click();
});

$('#employer-next').on("click", function(){
    $('#nav-tab a').eq(3).click();
});

$('#education-next').on("click", function(){
    $('#nav-tab a').eq(4).click();
});

$('#general-next').on("click", function(){
    $('#nav-tab a').eq(5).click();
});

//Previous tab buttons
$('#position-back').on("click", function(){
    $('#nav-tab a').eq(0).click();
});

$('#employer-back').on("click", function(){
    $('#nav-tab a').eq(1).click();
});

$('#education-back').on("click", function(){
    $('#nav-tab a').eq(2).click();
});

$('#general-back').on("click", function(){
    $('#nav-tab a').eq(3).click();
});
$('#confirmation-back').on("click", function(){
    $('#nav-tab a').eq(4).click();
});