for (let i = 0; i <= 5; i++) {
    let row = "";



      for (let s = 1; s <= 5 - i; s++) {
    row += "*"; 
      }
   for (let j = 1; j <= (2 * i - 1); j++) {
        row += "*";
    }

    console.log(row);
    
}