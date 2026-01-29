import React from 'react';

function MyQuote() {
  let quote = "";
  const val = Math.random() < 0.5;
  if (val) {
    quote = "Knowledge is power!";
  } else {
    quote = "What is important now is to recover our senses";
  }

  function handleClick() {
    alert('Welcome to wikipedia');
   
  }
    return (
    	<blockquote>
  			<p>
    			{quote}
  			</p>
  			<cite>
    		  <a target="_blank" href="https://en.wikipedia.org/wiki/Susan_Sontag">
      	    Susan Sontag
    		  </a>
          <button onClick ={handleClick}> Click me! </button>
  			</cite>
			</blockquote>
    );
};

export default MyQuote;