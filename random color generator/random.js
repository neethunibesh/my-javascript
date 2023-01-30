function getRandomColor()
{
    var letter = '0123456789ABCDEFGHIJ';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letter[Math.floor(Math.random() *16)];
    }
    return color;
  }

  function setRandomColor() {
    $(".color").css("background-color", getRandomColor());
     $("#main").css("background-color", getRandomColor());
    // $("h1").css("background-color", getRandomColor());
    // $("h1").css("color", getRandomColor());
  }

