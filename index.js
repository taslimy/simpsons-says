// jQuery Phrase Changes.

// List of strings.
let phrase = [
  "D'oh!",
  "Woo Hoo!",
  "Why you little!",
  "Mmm, donuts.",
  "Aaargh!",
  "Stupid Flanders.",
  "BART!",
];

// looping through it
let count = 0;
function changePhrase() {
  $("#phrase").text(phrase[count]);
  count < 7 ? count++ : (count = 0);
}
setInterval(changePhrase, 800);




