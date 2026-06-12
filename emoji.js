const emoji = [
    { description: 'smile', emojis: '🙂' },
    { description: 'smile blush', emojis: '😊' },
    { description: 'smile shades', emojis: '😎' },    
]


const emojiel = document.querySelector('#emojis');
const emojiin = document.querySelector('#emoji-value');
const [{ description, emojis }] = emoji;
function getemoji()
{
    document.addEventListener('DOMContentLoaded', () => {
        shuffleEmoji(emoji);

        console.log(emojiel.textContent)
    });
}


function shuffleEmoji(emojiarr)
{
    // collect only the emoji characters
    const emojisOnly = emojiarr.map(e => e.emojis);

    // Fisher-Yates shuffle
    for (let i = emojisOnly.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [emojisOnly[i], emojisOnly[j]] = [emojisOnly[j], emojisOnly[i]];
    }

    // put shuffled emojis back into the original objects preserving descriptions
    for (let k = 0; k < emoji.length; k++) {
        emojiarr[k].emojis = emojisOnly[k];
    }

    for(let i = 0; i<1;i++)
    {
       emojiel.textContent += emojiarr[i].emojis;
    }
}


getemoji()
