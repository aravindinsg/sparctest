$(document).ready(function () {
  $(".train_item div").eq(0).css("background-color", "#378dff");
  $(".train_item div").eq(1).css("background-color", "#e1566e");
  $(".train_item div").eq(2).css("background-color", "#6edb4e");
  $(".train_item div").eq(3).css("background-color", "#5997e8");
  $(".train_item div").eq(4).css("background-color", "#f5a61f");
  $(".train_item div").eq(5).css("background-color", "#a469da");
  $(".train_item div").css("color", "white");

  $(".alumni_container").click(function () {
    window.location.href = "review.html";
  });
});
document
  .getElementById("bookingForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    var formData = new FormData(this);

    var mailtoLink = "mailto:sparcstonz@gmail.com?";
    mailtoLink += "subject=Live%20Class%20Booking";
    mailtoLink +=
      "&body=Hi,%20I%20would%20like%20to%20make%20a%20booking%20for%20a%20live%20class%20demo.";
    formData.forEach(function (value, key) {
      mailtoLink +=
        "%0A" + encodeURIComponent(key) + ": " + encodeURIComponent(value);
    });
    console.log(mailtoLink);
    window.location.href = mailtoLink;
    return false;
  });
