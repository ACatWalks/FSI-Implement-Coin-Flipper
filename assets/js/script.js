// TODO: Declare any global variables we need
let headsTotal = 0;
let tailsTotal = 0;
let total = 0;
let percentHeads = 0;
let percentTails = 0;

document.addEventListener('DOMContentLoaded', function () {
    // This is just a sanity check to make sure your JavaScript script is getting loaded
    // You can remove it once you see it in your browser console in the developer tools

    // TODO: Add event listener and handler for flip and clear buttons
    
    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM
        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell
        document.getElementById('flip').addEventListener('click', () => {
            let result = Math.random();
            if(result < 0.5){
                document.getElementById('penny-img').setAttribute('src', './assets/images/penny-tails.jpg');
                document.getElementById('status-text').textContent = 'You Rolled Tails!';
                tailsTotal ++;
                document.getElementById('tails').innerHTML = `${tailsTotal}`;
                total ++;
                if(total === 0){
                    percentTails = 0;
                } else {
                    percentTails = Math.round((tailsTotal/total)*100);
                    percentHeads = Math.round((headsTotal/total)*100);
                }
                document.getElementById('tails-percent').innerHTML = `${percentTails}`;
                document.getElementById('heads-percent').innerHTML = `${percentHeads}`;
            } else{
                document.getElementById('penny-img').setAttribute('src', './assets/images/penny-heads.jpg')
                document.getElementById('status-text').textContent = 'You Rolled Heads!';
                headsTotal ++;
                document.getElementById('heads').innerHTML = `${headsTotal}`;
                total ++;
                if(total === 0){
                    percentHeads = 0;
                } else{
                    percentTails = Math.round((tailsTotal/total)*100);
                    percentHeads = Math.round((headsTotal/total)*100);
                }
                document.getElementById('tails-percent').innerHTML = `${percentTails}`;
                document.getElementById('heads-percent').innerHTML = `${percentHeads}`;
            }
     
         });
        

        
        
        


    // Clear Button Click Handler
    // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)
    document.getElementById('clear').addEventListener('click', () => {
        headsTotal = 0;
        document.getElementById('heads').innerHTML = `${headsTotal}`;
        tailsTotal = 0;
        document.getElementById('tails').innerHTML = `${tailsTotal}`;
        total = 0;
        percentHeads = 0;
        document.getElementById('heads-percent').innerHTML = `${percentHeads}`;
        percentTails = 0;
        document.getElementById('tails-percent').innerHTML = `${percentTails}`;
    })
        

})