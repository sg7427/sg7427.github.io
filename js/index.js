window.onload = function() {
  window.scrollTo(0, 0);
  var headElement = document.getElementById("head");
  var text = headElement.innerHTML;
  headElement.innerHTML = "";
  type(text, headElement, false);
  // addAndRotateWords(headElement);

};

var i = 0;
var hasPrevWord = false;
var speed = 200;

var words = ["TSA", "Sai"];

function type(txt, element, del) {
  if (i < txt.length) {
    var currentText = element.innerHTML;
    if (del) {
      element.innerHTML = currentText.substr(0, currentText.length -1);
      i++;

    } else {
      element.innerHTML = currentText + txt.charAt(i)
      i++;
    }

    setTimeout(function() {
      type(txt, element)
    }, speed);
  }
}

var  wordIndex   = 0;
var len = words.length;
function addAndRotateWords(element) {
  var prevWord = "";
  while (wordIndex <= len)  {
    if (wordIndex == len - 1 ) {
      wordIndex = 0;
    }
    if (wordIndex == 0) {
      prevWord = words[len - 1];
    } else  {
      prevWord = words[wordIndex - 1];
    }

    var word = words[wordIndex++];
    if (!hasPrevWord) {
      type(word, element, true);
      type(word, element, false);
    }
    hasPrevWord = true;
  }
}


window.addEventListener("resize", function() {
  if (document.documentElement.clientWidth < 800) {
    document.getElementById('discover').style.marginBottom = "0px"
    document.getElementById('discover').style.marginTop = "20px"
    document.getElementById('header').style.height = "auto"
    document.getElementById('tsa').style.marginLeft = "80px"
    document.getElementById('myCarousel').style.marginTop = "40px"
  } else
    document.getElementById('discover').style.marginBottom = " 50px"
  document.getElementById('myCarousel').style.marginTop = "400px"
}, true);
//
function backspace(c_elem, elem, t_list, c_speed = 800, t_speed = 100, w_time = 1000, b_speed = 50) {
  // setting cursor blink:
  setInterval(() => {
    $(c_elem).css("opacity", 0);
  }, c_speed);
  setTimeout(() => {
    setInterval(() => {
      $(c_elem).css("opacity", 100);
    }, c_speed);
  }, c_speed / 2);

  var word_time = 0;

  setInterval(() => {
    for (let i = 0; i < t_list.length; i++) {
      setTimeout(() => {
        // typing process:
        for (let j = 0; j < t_list[i].length; j++) {
          setTimeout(() => {
            $(elem).text($(elem).text() + t_list[i][j]);
          }, word_time);
          word_time += t_speed;
        }

        word_time += w_time;

        // backspace process:
        for (let j = 0; j < t_list[i].length; j++) {
          setTimeout(() => {
            $(elem).text($(elem).text().slice(0, -1));
          }, word_time);
          word_time += b_speed;
        }
      }, word_time);
    }
  }, 0);
}
