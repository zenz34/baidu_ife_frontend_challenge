// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called

class Quote {
    constructor(quote, source, tags, citation, year) {
        this.quote = quote;
        this.source = source;
        this.tags = tags;
        this.citation = citation;
        this.year = year;
    }
}

let quoteMarkT = new Quote('If you tell the truth, you don\'t have to remember anything.', 'by Mark Twain', 
                            ['self-improve'], 'goodreads.com', '1961');
let quoteDrS = new Quote('Don\'t cry because it\'s over, smile because it happened.', 'by Dr. Seuss', 
                            ['self-improve', 'love'], 'goodreads.com', '1986');
let quoteMM = new Quote('I\'m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can\'t handle me at my worst, then you sure as hell don\'t deserve me at my best.', 'Marilyn Monroe',
                            ['self-improve']);
let quoteAE = new Quote('Two things are infinite: the universe and human stupidity; and I\'m not sure about the universe.', 'by Albert Einstein',
                            ['science']);
let quoteFZ = new Quote('So many books, so little time.', 'by Frank Zappa', 
                            ['self-improve', 'book'], 'I love reading');
let quoteBM = new Quote('Be who you are and say what you feel, because those who mind don\'t matter, and those who matter don\'t mind.', 
                            ['phsycology'], 'by Bernard M. Baruch', 'be your self');
let quoteWW = new Quote('You\'ve gotta dance like there\'s nobody watching,Love like you\'ll never be hurt,Sing like there\'s nobody listening,And live like it\'s heaven on earth.', 'by William W. Purkey'
                            ['phsycology', 'philosophy']);
let quoteArray = [quoteMarkT, quoteDrS, quoteMM, quoteAE, quoteFZ, quoteBM, quoteWW];

let colorArray = ["blue", "green", "black", "red", "grey", "Gold", "DarkSeaGreen", "CornflowerBlue"];

function getRandomQuote() {
    console.log(quoteArray[Math.floor(Math.random()*7)]);


    return quoteArray[Math.floor(Math.random()*7)];
}

function randomChangeQuote() {
    let quote = getRandomQuote();
    let content = `<p class="quote">${quote.quote}</p><p class="source">${quote.source}`;

    if (quote.citation) {
        content += `<span class="citation">${quote.citation}</span>`;
    }

    if (quote.year) {
        content += `<span class="year">${quote.year}</span>`;
    }

    content += "</p>";
    document.getElementById('quote-box').innerHTML = content;
}

function getRandomBGColor() {
    return colorArray[Math.floor(Math.random() * colorArray.length)];
}

function randomChangeBGColor() {
    let color = getRandomBGColor();
    document.body.style.backgroundColor = color;
    document.getElementById("loadQuote").style.backgroundColor = color;
}


function printQuote() {
    randomChangeQuote();
    randomChangeBGColor();
}

document.getElementById('loadQuote').addEventListener("click", printQuote, false);

window.setInterval(printQuote, 5000);


