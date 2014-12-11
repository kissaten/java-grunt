$(function () {
  $('div.container').click(function (e) {
    alert(e.target.nodeName);
    alert(e.currentTarget.nodeName);
  });

});
