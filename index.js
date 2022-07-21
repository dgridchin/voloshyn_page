$(document).ready(function() {
    var links = [
        // {'link': 'https://secure.wayforpay.com/button/bbc0402c266b2', 'block': 'page2', 'm': 'site2'},
        // {'link': 'https://secure.wayforpay.com/button/b246032bc679b', 'block': 'page2', 'm': 'site3'},
        // {'link': 'https://secure.wayforpay.com/button/b99dcb0dcc72d', 'block': 'page2', 'm': 'site4'},
        // {'link': 'https://secure.wayforpay.com/button/bf3508bef3322', 'block': 'page2', 'm': 'site5'},
        // {'link': 'https://secure.wayforpay.com/button/bc8b3371b6c09', 'block': 'page2', 'm': 'site6'},
        // {'link': 'https://secure.wayforpay.com/button/b0a4b342130a1', 'block': 'page2', 'm': 'site7'},
        // {'link': 'https://secure.wayforpay.com/button/be5c512ba9293', 'block': 'page2', 'm': 'site8'},
        // {'link': 'https://secure.wayforpay.com/button/b79d77135b072', 'block': 'page2', 'm': 'site9'},
        // {'link': 'https://secure.wayforpay.com/button/b92e359f37858', 'block': 'page2', 'm': 'site10'},
        // {'link': 'https://secure.wayforpay.com/button/b3493d32d2337', 'block': 'page2', 'm': 'site11'},
        // {'link': 'https://secure.wayforpay.com/button/b6dd479320c72', 'block': 'page2', 'm': 'site12'},
        // {'link': 'https://secure.wayforpay.com/button/b46561fc4b8bc', 'block': 'page2', 'm': 'site13'},
        // {'link': 'https://secure.wayforpay.com/button/b0e7f25aeadb7', 'block': 'page2', 'm': 'site14'},
        //
        // {'link': 'https://secure.wayforpay.com/button/b53792990be55', 'block': 'page3', 'm': 'site15'},
        // {'link': 'https://secure.wayforpay.com/button/baa57f4075c26', 'block': 'page3', 'm': 'site16'},
        // {'link': 'https://secure.wayforpay.com/button/baefa5da66e22', 'block': 'page3', 'm': 'site17'},
        // {'link': 'https://secure.wayforpay.com/button/bc8e803f80ffb', 'block': 'page3', 'm': 'site18'},
        // {'link': 'https://secure.wayforpay.com/button/b1bcae12d4ccd', 'block': 'page3', 'm': 'site19'},
        // {'link': 'https://secure.wayforpay.com/button/b510df91848ee', 'block': 'page3', 'm': 'site20'},

        // {'link': 'https://secure.wayforpay.com/button/b379c55edf0eb', 'block': 'page8', 'm': 'site80'},
        // {'link': 'https://secure.wayforpay.com/button/b087057ea256e', 'block': 'page8', 'm': 'site81'},
        // {'link': 'https://secure.wayforpay.com/button/b46501ac35806', 'block': 'page8', 'm': 'site82'},
        // {'link': 'https://secure.wayforpay.com/button/bfd4331263404', 'block': 'page8', 'm': 'site83'},
        // {'link': 'https://secure.wayforpay.com/button/b16cc5a70dcc8', 'block': 'page8', 'm': 'site84'},
        // {'link': 'https://secure.wayforpay.com/button/bd7b242efd8df', 'block': 'page8', 'm': 'site85'},
        // {'link': 'https://secure.wayforpay.com/button/b2a938c74e918', 'block': 'page8', 'm': 'site86'},
        // {'link': 'https://secure.wayforpay.com/button/b1cd2ce757885', 'block': 'page8', 'm': 'site87'},
        // {'link': 'https://secure.wayforpay.com/button/b82cb6898f217', 'block': 'page8', 'm': 'site88'},
        // {'link': 'https://secure.wayforpay.com/button/ba832e8006632', 'block': 'page8', 'm': 'site89'},
        // {'link': 'https://secure.wayforpay.com/button/b142eefe2452b', 'block': 'page8', 'm': 'site90'},
        // {'link': 'https://secure.wayforpay.com/button/bce62d76ca3f2', 'block': 'page8', 'm': 'site91'},
        // {'link': 'https://secure.wayforpay.com/button/b1a7a9dd9752b', 'block': 'page8', 'm': 'site92'},
        //
        {'link': 'https://secure.wayforpay.com/button/b9c82421539bb', 'block': 'page9', 'm': 'site93'},
        {'link': 'https://secure.wayforpay.com/button/b9266631b0163', 'block': 'page9', 'm': 'site94'},

        // {'link': 'https://secure.wayforpay.com/button/b977b7833bcad', 'block': 'page9', 'm': 'site95'},



        // {'link': '', 'block': 'page8', 'm': 'site83'},
        // {'link': '', 'block': 'page8', 'm': 'site84'},
        // {'link': '', 'block': 'page8', 'm': 'site85'},
    ];

    var d = [
        {'link': '', 'block': '', 'm': ''},
    ];



    var domains = ['http://page.local/', 'https://voloshyn.site/', 'https://voloshyn-lesson.online/'];
    var href = document.location.href;
    href = href.replace(".html", "");
    domains.forEach(function (domain, index) {
        href = href.replace(domain, "");
    })

    if (!href) {
        href = 'page0';
    }


    var item = links[Math.floor(Math.random() * links.length)];
    console.log(item);

    var link = item.link;
    $('.js-create-order').attr('href', link)



    var minutes = 14;
    var seconds = 59;
    setInterval(function () {
        seconds--;
        if (seconds <= 0) {
            seconds = 59;
            minutes--;
        }

        var secText = seconds;
        var minText = minutes;

        if (seconds <= 9) {
            secText = '0'+seconds;
        }
        if (minutes <= 9) {
            minText = '0'+minutes;
        }

        document.getElementById('timer-seconds').innerHTML = secText;
        document.getElementById('timer-minutes').innerHTML = minText;

        if (minutes < 0) document.location.reload();

    }, 1000);
});