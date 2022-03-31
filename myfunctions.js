
//array for meme sounds
const memes = ['animepower', 'cardi', 'gasgasgas', 'gimmemoney', 
              'hellothere', 'nani', 'nanomachines', 'running', 'ting' ];

//Function for playing sounds on button click
memes.forEach((meme) => {
    const btn = document.createElement('button');
    btn.classList.add('btn');

    btn.innerText = meme;

    btn.addEventListener('click', ()=> {
    stopSounds();
    document.getElementById(meme).play();
    });

    document.getElementById('buttons').appendChild(btn);
});

//Function for pausing sound when new one is clicked
function stopSounds() {
    memes.forEach((meme) => {
     const sound = document.getElementById(meme);

     sound.pause();
     sound.currentTime = 0;
    });
}
