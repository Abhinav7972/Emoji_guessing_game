const emoji = [
    { description: 'smile', emojis: '🙂' },
    { description: 'smile blush', emojis: '😊' },
    { description: 'smile shades', emojis: '😎' },    
]




const emojiel = document.querySelector('#emojis');
const emojiin = document.querySelector('#emoji-value');
let currentEmojiIndex = 1;

function getemoji()
{
    document.addEventListener('DOMContentLoaded', displayEmoji);

    function displayEmoji()
    {
     for(let i = 0; i<1;i++)
    {
       shuffleEmoji(emoji);
       currentEmojiIndex = i;
       emojiel.textContent = emoji[i].emojis;
    }

        console.log(emojiel.textContent)
        console.log("Current index:", currentEmojiIndex);
console.log("Current emoji:", emoji[currentEmojiIndex]);
    }
}




function getScore()
{
    emojiin.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
        {
            validate(emoji[currentEmojiIndex])
            emojiin.value = "";
        }
    })


    function validate(emoji)
    {
    
            if(emoji.description.trim().toLowerCase()===emojiin.value.trim().toLowerCase())
            {
                console.log(emoji.description)
                console.log("correct")
                return;
            }
            else
            {
                console.log(emoji.description)
                console.log("incorrect")
                return;
            } 

           
    }
}

getScore()




function shuffleEmoji(emojiarr)
{
    // collect only the emoji characters
    const emojisOnly = emojiarr.map(e => e.emojis);
    const description = emojiarr.map(e => e.description);


    // Fisher-Yates shuffle
    for (let i = emojisOnly.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emojisOnly[i], emojisOnly[j]] = [emojisOnly[j], emojisOnly[i]];
        [description[i], description[j]] = [description[j], description[i]];
    }

    // put shuffled emojis back into the original objects preserving descriptions
    for (let k = 0; k < emoji.length; k++) {
        emojiarr[k].emojis = emojisOnly[k];
        emojiarr[k].description = description[k];
    }

    return emojiarr;

   
}





getemoji()
