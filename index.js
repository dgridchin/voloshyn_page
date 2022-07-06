var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
    return false;
};

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //Максимум не включается, минимум включается
}


function addSub (text) {
    $('body').find('.sub-text').remove();

    if (getRandomInt(0, 2)) {
        $('#video-block').append(
            $('<span/>')
                .addClass('sub-text')
                .css({
                    'position': 'absolute',
                    'top': '10px',
                    'right': '10px',
                    'color': '#ffffff',
                    'z-index': '100500',
                })
                .html(text)
        );
    } else {
        $('#video-block').append(
            $('<span/>')
                .addClass('sub-text')
                .css({
                    'position': 'absolute',
                    'top': '10px',
                    'left': '10px',
                    'color': '#ffffff',
                    'z-index': '100500',
                })
                .html(text)
        );
    }


}

$(document).ready(function() {
    var domains = ['http://page.local/', 'https://voloshyn.site/'];
    var href = document.location.href;
    href = href.replace(".html", "");
    domains.forEach(function (domain, index) {
        href = href.replace(domain, "");
    })

    if (!href) {
        href = 'page0';
    }
    console.log(href)
    $('.js-footer').hide();
    $('#footer-'+href).show();



    jQuery.extend(jQuery.validator.messages, {
        required: "Заполните это поле",
        remote: "Please fix this field.",
        email: "Укажите корректный email адрес",
        url: "Please enter a valid URL.",
        date: "Please enter a valid date.",
        dateISO: "Please enter a valid date (ISO).",
        number: "Please enter a valid number.",
        digits: "Please enter only digits.",
        creditcard: "Please enter a valid credit card number.",
        equalTo: "Please enter the same value again.",
        accept: "Please enter a value with a valid extension.",
        maxlength: jQuery.validator.format("Please enter no more than {0} characters."),
        minlength: jQuery.validator.format("Please enter at least {0} characters."),
        rangelength: jQuery.validator.format("Please enter a value between {0} and {1} characters long."),
        range: jQuery.validator.format("Please enter a value between {0} and {1}."),
        max: jQuery.validator.format("Please enter a value less than or equal to {0}."),
        min: jQuery.validator.format("Please enter a value greater than or equal to {0}.")
    });


    $('#form').validate({
        success: function () {

        },
        showErrors: function(errorMap, errorList) {
            this.defaultShowErrors();
        }
    });

    $('#form').on('submit', function (e) {
        e.preventDefault();
        var form = $('#form');
        if (form.valid()) {
            var serverUrl = 'https://gridchin.tech/api/create_order?mid='+getUrlParameter('mid');
            $.post(serverUrl, form.serializeArray(), function (data) {
                console.log(data);
                $('#form').hide();
                $('#pay-form').hide();
            })
        }


    })
    $('.js-create-order').on('click', function (e) {
        e.preventDefault();
    })







    // position: absolute; top: 10px; left: 10px; color: #ffffff; z-index: 100500;

    // var mid = getUrlParameter('mid');
    // var subText = null;
    // $.ajax({
    //     type: "POST",
    //     url: "https://gridchin.tech/api/get_video",
    //     data: {
    //         mid: mid
    //     },
    //     success: function(data) {
    //         if (data) {
    //             data = JSON.parse(data);
    //             if (data.status == 'ok') {
    //                 $('#loading').hide();
    //                 $('#vimeo').attr('src', data.video)
    //                 subText = data.sub;
    //                 addSub(subText)
    //             } else {
    //                 alert('Ссылку менять нельзя!');
    //             }
    //         } else {
    //             alert('Произошла системная ошибка. Обновите страницу');
    //         }
    //     },
    //     error: function(XMLHttpRequest, textStatus, errorThrown) {
    //         alert('Произошла системная ошибка. Обновите страницу');
    //     }
    // });
    //
    // var oldTime = 0;
    //
    // setInterval(function () {
    //     addSub(subText);
    // }, 5000)
});



$(function () {

})