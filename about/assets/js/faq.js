$(".faq__item.active .faq__answer").each(function () {
    $(this).css("max-height", $(this).prop("scrollHeight") + "px");
});

$(".faq__question").on("click", function () {
    var parentItem = $(this).parent();
    var answer = parentItem.find(".faq__answer");

    // Если текущий элемент активен, то закрываем его
    if (parentItem.hasClass("active")) {
        answer.css("max-height", "0px");
        parentItem.removeClass("active");
    } else {
        // Закрываем все другие активные элементы
        $(".faq__item.active").each(function () {
            var otherAnswer = $(this).find(".faq__answer");
            otherAnswer.css("max-height", "0px");
            $(this).removeClass("active");
        });

        // Открываем текущий элемент
        answer.css("max-height", answer.prop("scrollHeight") + "px");
        parentItem.addClass("active");
    }
});