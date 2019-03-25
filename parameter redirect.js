 function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, '\\$&');
    var regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, ' '));
};


document.addEventListener("DOMContentLoaded", function() {
  if (getParameterByName("tab") === 'menu') {
      console.log(getParameterByName("tab"));
    $('a[href=#vip-menu]').trigger('click');

    if (getParameterByName("feature") === 'dinner') {
      console.log(getParameterByName("feature"));
    document.querySelector("#menu-dinner").querySelector(".accordion-toggle").click()
        }
    }
});
