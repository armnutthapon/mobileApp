document.addEventListener('prechange', function(event) {
    document.querySelector('ons-toolbar .center')
        .innerHTML = event.tabItem.getAttribute('label');
});

document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === 'home') {
        // js of tab 1


    } else if (page.id === 'profile') {
        // js of tab 2

        document.getElementById("tab2alert").onclick = function() {
            console.log("Alert Clicked");
            ons.notification.alert("Alert in Tab2")

        }



    }
});