document.addEventListener('init', function (event) {
    var page = event.target;
    console.log(page.id);
    if (page.id === 'page1') {
        page.querySelector('#bw').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/detail.html'); page.querySelector('#bb').onclick = function () {
                document.querySelector('#myNavigator').pushPage('views/detail2.html');
            };
        };
    } else if (page.id === 'page1') {
        page.querySelector('#bb').onclick = function () {
            document.querySelector('#myNavigator').pushPage('views/detail2.html');
        };
    }
});