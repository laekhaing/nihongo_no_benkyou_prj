// function onLoadFunction() {
//   $("#n1_button").addClass('button-clicked');
//   $("#kanji_button").addClass('button-clicked');
// }

var n1_click_count, kanji_click_count, grammar_click_count, n2_click_count
// Check N1 button is clicked
$("#n1_button").on('click' , function(e) {
  console.log("n1 is clicked")
  $("#n1_button").addClass('button-clicked');
  $("#n2_button").addClass('button-release');
	n1_click_count = $(this).data('clicked-times');
	$(this).data('clicked-times', ++n1_click_count);
  Cookies.set('n1_click_count', n1_click_count);
  // checkButtonClick()
});

// Check N2 button is clicked
$("#n2_button").on('click' , function(e) {
  $("#n2_button").addClass('button-clicked');
  $("#n1_button").addClass('button-release');
	n2_click_count = $(this).data('clicked-times');
	$(this).data('clicked-times', ++n2_click_count);
  checkButtonClick()
});

// Check Kanji button is clicked
$("#kanji_button").on('click' , function(e) {
    $("#kanji_button").addClass('button-clicked');
	kanji_click_count = $(this).data('clicked-times');
	$(this).data('clicked-times', ++kanji_click_count);
  Cookies.set('kanji_click_count', kanji_click_count);
  Cookies.remove('grammar_click_count');
  // checkButtonClick()
});

// Check Grammar button is clicked
$("#grammar_button").on('click' , function(e) {
  $("#grammar_button").addClass('button-clicked');
  $("#kanji_button").removeClass('button-clicked');
	grammar_click_count = $(this).data('clicked-times');
	$(this).data('clicked-times', ++grammar_click_count);
  Cookies.set('grammar_click_count', grammar_click_count);
  Cookies.remove('kanji_click_count');
  // checkButtonClick()
});

function checkButtonClick(){
  // Check N1 and Kanji buttons are clicked
  if (Cookies.get('n1_click_count') == 1 && Cookies.get('kanji_click_count') == 1){
      $("#n1_button").addClass('button-clicked');
      $("#kanji_button").addClass('button-clicked');
    // set url link of N1 Kanji Questions for 01
    $("a.question01").attr("href", "/question/kanji/n1_kanji_question_01");
    // set url link of N1 Kanji Questions for 02
    $("a.question02").attr("href", "/question/kanji/n1_kanji_question_02");
    // set url link of N1 Kanji Questions for 03
    $("a.question03").attr("href", "/question/kanji/n1_kanji_question_03");
    // set url link of N1 Kanji Questions for 04
    $("a.question04").attr("href", "/question/kanji/n1_kanji_question_04");
  }

// Check N1 and Grammar buttons are clicked
  if (Cookies.get('n1_click_count') == 1 && Cookies.get('grammar_click_count') == 1){
      // set url link of N1 Grammar Questions for 01
    $("a.question01").attr("href", "/question/grammar/n1_grammar_question_01");
    // set url link of N1 Grammar Questions for 02
    $("a.question02").attr("href", "/question/grammar/n1_grammar_question_02");
    // set url link of N1 Grammar Questions for 03
    $("a.question03").attr("href", "/question/grammar/n1_grammar_question_03");
  }

// Check N2 and Kanji buttons are clicked
  if (n2_click_count == 1 && kanji_click_count == 1){
    // set url link of N2 Kanji Questions for 01
    $("a.question01").attr("href", "/question/kanji/n2_kanji_question_01");
    // set url link of N2 Kanji Questions for 02
    $("a.question02").attr("href", "/question/kanji/n2_kanji_question_02");
  }

// Check N2 and Grammar buttons are clicked
  if (n2_click_count == 1 && grammar_click_count == 1){
    // set url link of N2 Grammar Questions for 01
    $("a.question01").attr("href", "/question/grammar/n2_grammar_question_01");
    // set url link of N2 Grammar Questions for 02
    $("a.question02").attr("href", "/question/grammar/n2_grammar_question_02");
  }
}
