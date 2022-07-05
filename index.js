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

$(function () {
    // position: absolute; top: 10px; left: 10px; color: #ffffff; z-index: 100500;

    var mid = getUrlParameter('mid');
    var subText = null;
    $.ajax({
        type: "POST",
        url: "https://gridchin.tech/api/get_video",
        data: {
            mid: mid
        },
        success: function(data) {
            if (data) {
                data = JSON.parse(data);
                if (data.status == 'ok') {
                    $('#loading').hide();
                    $('#vimeo').attr('src', data.video)
                    subText = data.sub;
                    addSub(subText)
                } else {
                    alert('Атата');
                }
            } else {
                alert('Произошла системная ошибка. Обновите страницу');
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('Произошла системная ошибка. Обновите страницу');
        }
    });

    var oldTime = 0;

    setInterval(function () {
        addSub(subText);
    }, 5000)
})