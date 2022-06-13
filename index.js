// Your code goes here
/*document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });

  document.addEventListener("DOMContentLoaded", function() {
    console.log("The DOM has loaded");
  });
  
  console.log(
    "This console.log() fires when index.js loads - before DOMContentLoaded is triggered"
  );
  console.log("tony") 
  */




document.addEventListener( "DOMContentLoaded", function () {
    LoadedDom()
  } );
  
// using the function kept inside the DOMContentLoaded to replace the text
  function LoadedDom() {
    document.getElementById( "text" )
      .innerHTML = "This is really cool!";
  }