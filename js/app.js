document.addEventListener('init', function(event) {
    var page = event.target;
    console.log(page.id);

    if (page.id === 'home') {
        // js of tab 1


    } else if (page.id === 'search') {
        // js of tab 2

        document.getElementById("tab2alert").onclick = function() {
            console.log("Alert Clicked");
            ons.notification.alert("Alert in Tab2")

        }

    } else if (page.id === 'favorite') {
        // js of tab 2

        document.getElementById("tab2alert").onclick = function() {
            console.log("Alert Clicked");
            ons.notification.alert("Alert in Tab2")

        }

    } else if (page.id === 'profile') {
        // js of tab 2

        document.getElementById("tab2alert").onclick = function() {
            console.log("Alert Clicked");
            ons.notification.alert("Alert in Tab2")

        }



    }
});