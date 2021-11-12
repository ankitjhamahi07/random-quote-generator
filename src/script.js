
function getQuote() {
            let displayLoader=document.getElementById("loading-text");
            displayLoader.style.display="block";

            setTimeout(
            
            function() {

            let quote="";

            return fetch("https://quotable.io/quotes?tags=inspirational|success")

              .then(function(response) {
                return response.json();
              })

              .then(function(data) {
              console.log(data);
              const rndInt = randomIntFromInterval(1, data.count)
              let quoteContainer=document.getElementById("quote-container");
              let guideText=document.getElementById("guide-text");
              
              let quoteText=document.getElementById("quote-text");
              let quoteAuthor=document.getElementById("author-name");
              quoteText.innerHTML=data.results[rndInt].content;
              quoteAuthor.innerHTML=data.results[rndInt].author;
              quoteContainer.style.display="block";
              guideText.style.display="none";
              displayLoader.style.display="none";
            }

            );
          
          }, 2000);
}

function copyQuote() {
  
          var range = document.createRange();
                            range.selectNode(document.getElementById("quote-text"));
                            window.getSelection().removeAllRanges();  window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        window.alert("Copied to Clipboard")
}

function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}
