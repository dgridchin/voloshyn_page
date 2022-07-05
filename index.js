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

$(function () {
    // position: absolute; top: 10px; left: 10px; color: #ffffff; z-index: 100500;
    var sub = $('<div/>')
        .css({
            'position': 'absolute',
            'top': '10px',
            'left': '10px',
            'color': '#ffffff',
            'z-index': '100500'
        })
    var mid = getUrlParameter('mid');
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
                    sub.html(data.sub);
                    $('#vimeo').attr('src', data.video)
                    $('#video-block').append(sub);

                    var oldTime = 0;
                    var iframe = $('#video-block iframe');
                    var player = new Vimeo.Player(iframe);

                    player.on('play', function () {
                        player.getCurrentTime().then(function(seconds) {
                            if ((seconds - oldTime) > 1) {
                                console.log(oldTime);
                                oldTime = seconds;
                            }
                        });
                    })
                }
            } else {
                alert('Произошла системная ошибка. Обновите страницу');
            }
        },
        error: function(XMLHttpRequest, textStatus, errorThrown) {
            alert('Произошла системная ошибка. Обновите страницу');
        }
    });
})