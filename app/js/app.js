window.onload = () => {
  //declarations that enable variables to be accessed by multiple functions
  let diamond = document.getElementById("diamond-container");
  let diamondsize = {};
  result = window.prompt(
    'Enter the size of your diamond as a number. All decimals will be rounded down to the nearest whole number (ie 89.999=89).',
    ""
  );

  //Regex that only allows numbers, ensures all commas are followed by 3 digits, and allows periods for decimal values
  let verified = /^((\d+|\d{1,3}(,\d{3})*)(\.\d+)?|\.\d+)$/;
  let checkedresult = verified.exec(result);

  //Function that handles valid input/rejects invalid input
  let requestDiamond = () => {
    if (!checkedresult || checkedresult < 1) {
      alert('Please restrict input to numerical characters only.');
      window.location.reload();
    } else {
      //rounds user input to ensure whole numbers
      diamondsize = Math.round(parseInt(result));

      buildDiamond();
    }
  };

  //Function that constructs diamond according to user input
  let buildDiamond = () => {
    let OddorEven = diamondsize % 2;
    //if statement that handles both even and odd inputs
    if (OddorEven === 0) {
      diamond.innerHTML += '*';
      diamond.innerHTML += '<br>';

      for (var i = 2; i <= diamondsize; i += 2) {
        diamond.innerHTML += '* '.repeat(i);
        diamond.innerHTML += "<br>";
      }
      buildDiamondReverse();
      diamond.innerHTML += '*'';
    } else {
      for (var i = 1; i <= diamondsize; i += 2) {
        diamond.innerHTML += '* '.repeat(i);
        diamond.innerHTML += '<br>';
      }
      buildDiamondReverse();
    }
  };

  let animateForwards = () => {
    let width = document.body.clientWidth - diamond.clientWidth;
    diamond.style.transition = "transform 3s";
    diamond.style.transform = "translate(" + width + "px)";
    setTimeout(animateBackwards, 3000);
  };

  let animateBackwards = () => {
    let width = diamond.offsetWidth + document.body.clientWidth;
    diamond.style.transition = "transform 3s";
    diamond.style.transform = "translate(0px)";
    setTimeout(animateForwards, 3000);
  };

//constructs bottom half of diamond
  let buildDiamondReverse = () => {
    for (var j = diamondsize - 2; j >= 1; j -= 2) {
      diamond.innerHTML += '*' .repeat(j);
      diamond.innerHTML += '<br>';
    }
    animateDiamond();
  };

  requestDiamond();
};
