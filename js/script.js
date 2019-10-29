/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

var quotes = [
  {
    "quote" : "Learn to be calm and you will always be happy.",
    "source" : "Paramahansa Yogananda",
    "citation" : "(Field, 1974, p. 14)",
    "year" : "1974"
  },
  {
    "quote" : "Your calm mind is the ultimate weapon against your challenges. So relax.",
    "source" : "Bryant McGill",
    "citation" : "( Simple Reminders: Inspiration for Living Your Best Life , 2015, p. 144)",
  },
  {
    "quote" : "Suffering is due to our disconnection with the inner soul. Meditation is establishing that connection.",
    "source" : "Amit Ray",
    "citation" : "(Meditation: Insights and Inspirations, 2010, p. 243)",
    "year" : "2010"
  },
  {
    "quote" : "Paradise is not a place, it’s a state of consciousness.",
    "source" : "Sri Chinmoy",
    "citation" : "(Living the good life, 1974, p. 199)",
    "year" : "1986"
  },
  {
    "quote" : "All of man’s difficulties are caused by his inability to sit, quietly, in a room by himself.",
    "source" : "Blaise Pascal",
  }
];

var quotesLength = quotes.length;


function getRandomQuote(){
  var randomNumber = Math.floor(Math.random() * quotesLength);
  return quotes[randomNumber];
}

function printQuote(){
  var randomQuote = getRandomQuote();
  
  var theHTML  = '<p class="quote">' + randomQuote.quote + '</p>';
  theHTML     += '<p class="source">' + randomQuote.source;
  if (randomQuote.citation) {
    theHTML += '<span class="citation">' + randomQuote.citation + '</span>';
  }
  if (randomQuote.year) {
    theHTML += '<span class="year">' + randomQuote.year + '</span>';
  }
  theHTML += '</p>';

  document.getElementById('quote-box').innerHTML = theHTML;
}

printQuote();


document.getElementById('loadQuote').addEventListener("click", printQuote, false);
