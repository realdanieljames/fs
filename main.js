// Create directory called fs-try

// - Using fs module:
const fs = require('fs');
// - create a directory called content using fs method and it should log 'content folder created'
fs.mkdir('content', (err) => {
    if (err) return console.log(err);
    console.log('Content folder created')
    
    // - create a file using fs method called randomText.txt that lives outside the content directory
    // - randomText.txt should be created using fs method and given just a short string of any data you want to put in it, using fs method
    fs.writeFile('randomText.txt', 'well here is introducing another file created with the FS method writeFleSync', (err)=>{
        if(err) return console.log(err)

        // - when you create the randomText.txt file you should also log 'randomtext.txt created' in the terminal.
        console.log('randomText.txt created')

        // variable to hold file text to then past into different file.
        const randomTextFile = fs.readFileSync('randomText.txt', 'utf-8')
    
        
        // - write the randomText.txt data to a new file called verbage.txt
        // inside the content folder and log 'verbage.txt created'
        fs.writeFileSync('verbage.txt',randomTextFile )
        
        
        // - Now create a separate setTimeout function that after 7 seconds
        // deletes the content directory
            setTimeout(()=>fs.rmdir('content',(err)=>{
                if(err) throw err;
                console.log('Content Directory removed')
            }), 7000)
        });
    })


