const emoji = [
    { description: 'smile', emoji: '🙂' },
    { description: 'smile blush', emoji: '😊' },
    { description: 'smile blush', emoji: '😎' },    
]


function getemoji()
{
    emoji.forEach((e) => {
        console.log(e.emoji);
    })
}


