

const titleInput$ = $("#title-input");
const subtitleInput$ = $("#subtitle-input");
const authorInput$ = $("#author-input");
const thumbnailInput$ = $("#thumbnail-input");
const languageInput$ = $("#language-input");
const submitBtn$ = $("#submit-btn");



submitBtn$.click(() => {

  if (!validateShowMsg("Enter Valid Title", titleInput$)) {
    return;
  }
  if (!validateShowMsg("Enter Valid SubTitle", subtitleInput$)) {
    return;
  }
  if (!validateShowMsg("Enter Valid Author", authorInput$)) {
    return;
  }

  let url = thumbnailInput$.val();
  let isValidurl = /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  if (!isValidurl.test(url)) {
    $("#alert-message").text("Enter valid url").show();
    return
  }
  else {
    $("#alert-message").hide();
  }

  if (!validateShowMsg("Enter at least One language", languageInput$)) {
    return;
  }
  
  const newBook = {};

  newBook.title = titleInput$.val();
  newBook.subtitle = subtitleInput$.val();
  newBook.author = authorInput$.val();
  newBook.smallThumbnail = thumbnailInput$.val();
  newBook.language = languageInput$.val();
  console.log(newBook);


  $.ajax({
    url: "http://localhost:3000/books",
    type: "POST",
    dataType: "json",
    data: JSON.stringify(newBook),
    success: function (tableData) {
      $(".container").show();
      $(".form-container").hide();
      $(".view a").addClass("active").css("color", "pink");
      $(".add a").removeClass("active").css("color", "white");
      createTable(tableData);
    },
    contentType: "application/json;charset=UTF-8",
  });
});

function validateShowMsg(msg, inputEle) {
  if (inputEle.val() === "") {
    $("#alert-message").text(msg).show();
  }
  else {
    $("#alert-message").hide();
  }
  return (inputEle.val() !== "");
}

