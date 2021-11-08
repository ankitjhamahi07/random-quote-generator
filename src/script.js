
function getQuote() {
            let quote="";
            return fetch("https://api.quotable.io/random")
              .then(function(response) {
                return response.json();
              })
              .then(function(data) {
              let quoteContainer=document.getElementById("quote-container");
              let guideText=document.getElementById("guide-text");
              
              let quoteText=document.getElementById("quote-text");
              let quoteAuthor=document.getElementById("author-name");
              //let quoteAuthorJob=document.getElementById("author-job");
              quoteText.innerHTML=data.content;
              quoteAuthor.innerHTML=data.author;
              // quoteAuthorJob.innerHTML=data.tags[0];
              quoteContainer.style.display="block";
              guideText.style.display="none";
            }
            );
}

function copyQuote() {
  
          var range = document.createRange();
                            range.selectNode(document.getElementById("quote-text"));
                            window.getSelection().removeAllRanges();  window.getSelection().addRange(range); // to select text
        document.execCommand("copy");
        window.getSelection().removeAllRanges();
        window.alert("Copied to Clipboard")
}