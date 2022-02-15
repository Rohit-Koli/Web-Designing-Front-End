$(".nav a").on("click", function () {
    var position = $(this).parent().position();
    var width = $(this).parent().width();
    $(".nav a").removeClass("is-active");
    $(this).addClass("is-active");
    $(".nav .slide").css({
        opacity: 1,
        left: +posotion.left,
        width: width,
    });
});