var input = document.getElementById('input')

input.addEventListener('change', function() {
  readXlsxFile(input.files[0]).then(function(rows) {
   //console.log(rows.length)
    // console.log((JSON.stringify(rows[1])))
    // `rows` is an array of rows
    // each row being an array of cells.
  })
})

function playRandomSong() {
   
    readXlsxFile(input.files[0]).then(function(rows) {
        //console.log(rows);
        const randomIndex = Math.floor(Math.random() * rows.length);
        const audioPlayer = document.getElementById('audioPlayer');
        console.log(input.files);
        console.log(rows[randomIndex]);
        audioPlayer.src = rows[randomIndex];
    
      })
}