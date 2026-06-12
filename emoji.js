const emoji = [
    { description: 'smile', emojis: '🙂' },
    { description: 'smile blush', emojis: '😊' },
    { description: 'smile shades', emojis: '😎' },    
]




const emojiel = document.querySelector('#emojis');
const emojiin = document.querySelector('#emoji-value');
const scoreEl = document.querySelector('#score-value');

let currentEmojiIndex = 1;
let answer = true;
let score = 0




 function displayEmoji()
    {
        console.log('displayemoji called')

     for(let i = 0; i<1;i++)
    {
       shuffleEmoji(emoji);
         emojiel.textContent = emoji[i].emojis;
         currentEmojiIndex = i;
        }
        console.log("Current index:", currentEmojiIndex);
        console.log(emojiel.textContent)
        console.log("Current emoji:", emoji[currentEmojiIndex].emojis);
    }

function getemoji()
{
    console.log('getemoji called')

    document.addEventListener('DOMContentLoaded', displayEmoji);
}




function getScore()
{
    emojiin.addEventListener("keydown", (e) => {
        if (e.key === "Enter")
        {
            validate(emoji[currentEmojiIndex])

            if (answer) {
                score += 1;
                scoreEl.textContent = score;
                displayEmoji()

            }
            else if (answer == false && score > 0) {
                score -= 1;
                scoreEl.textContent = score;
                displayEmoji()
            }
            

            emojiin.value = "";
        }
    })


    function validate(emoji)
    {

    
            if(emoji.description.trim().toLowerCase()===emojiin.value.trim().toLowerCase())
            {
                console.log(emoji.description)
                console.log(answer)
                answer = true;
            }
            else
            {
                console.log(emoji.description)
                console.log(answer)
                answer = false;
        } 
        

           
    }
}





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
getScore()
