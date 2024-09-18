const countdisplay = document.getElementById('count'); // grab html number
const counterButtonOne = document.getElementById('btnUpOne'); // grab html btn
const counterButtonTen = document.getElementById('btnUpTen'); // grab html btn
const counterClear = document.getElementById('btnClear'); // grab html btn

let count = 0;

// Add a click event listener to the button to add 1
counterButtonOne.addEventListener('click', () =>{ // this '() => {}' is a function
    count++; // ++ means add 1. Short hand count += 1.
            // This also changes the HTML ID with count

    countdisplay.textContent = count;
    console.log(count);
});

// Add a click event listener to the button
counterButtonTen.addEventListener('click', () =>{
    count += 10; // += means add 10.

    countdisplay.textContent = count;
    console.log(count);
});

// Add a click event listener to the button
counterClear.addEventListener('click', () =>{
    count *= 0;

    countdisplay.textContent = count;
    console.log(count); 
});