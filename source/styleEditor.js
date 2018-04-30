$(document).ready(function(){
  $(".submit").click(function (event)) {
    var property = $("input#property");
    var value = $("input#value");
    var selector = $("input#selector");
    $(selector.val()).css(property.val(), value.val();
    event.preventDefault
  });
});
