// info to reach out to aws lambda

const theUrl = '';

// selecting page elements

const inputString = document.querySelector('#input');
const submit = document.querySelector('#submit');
const responseField = document.querySelector('#responseField');

// AJAX function

const getSyllableCount = () => {

}

// display result to webpage

const displaySuggestions = (event) => {
    // event.preventDefault();     <- not sure what this does yet...
    while(responseField.firstChild){
      responseField.removeChild(responseField.firstChild);
    };
    addResponseToResponseField();
  };

const addResponseToResponseField = (res) => {
    // Handles if res is falsey
    if(!res){
      console.log(res.status);
    }
    // In case res comes back as a blank array
    if(!res.length){
      responseField.innerHTML = "<p>Try again...</p><p>It seems like you didn't type anything into the box...</p>";
      return;
    }

    responseField.innerHTML = `<p>This is what you typed into the box::</p><ol>${inputField}</ol>`;
    return;
  };

// calling the function

submit.addEventListener('click', displaySuggestions)