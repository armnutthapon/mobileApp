document.addEventListener('init', function(event) {
    var page = event.target;
  console.log(page.id);
    if (page.id === 'page1') {
      page.querySelector('#bw').onclick = function() {
        document.querySelector('#myNavigator').pushPage('views/detail.html', {data: {title: 'Page 2'}});
      };
    } else if (page.id === 'page2') {
      page.querySelector('ons-toolbar .center').innerHTML = page.data.title;
    }
  });