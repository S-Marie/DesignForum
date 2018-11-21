$(function() {
  var a = [
    "http://i68.tinypic.com/2evq4o0.jpg",
    "http://i64.tinypic.com/md12dy.jpg",
  ];
 
  $("#pun-logo img,#i_logo,#logo img").attr("src", a[Math.floor(Math.random() * a.length)])
});