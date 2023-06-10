console.log("welcom to Spotify");

// initilize the variable
let songIndex=0;
let audioElement = new Audio('songs/10.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressbar = document.getElementById('myprogressbar');
let mastersongname = document.getElementById('mastersongname');
let gif = document.getElementById('gif');
let songIteam = Array.from(document.getElementsByClassName('songiteam'));



let songs=[
    {songName:"Ram Siya Ram" , filepath:"songs/1.mp3" , coverPath:"img/covers/1.jpg"},
    {songName:"Adhiram Madhuram",filepath:"songs/2.mp3" , coverPath:"img/covers/2.jpg"},
    {songName:"Kaune Disha Me" , filepath:"songs/3.mp3" , coverPath:"img/covers/3.jpg"},
    {songName:"Apna Bna Le" , filepath:"songs/4.mp3" , coverPath:"img/covers/4.jpg"},
    {songName:"Tum Kyu Chle aate ho" , filepath:"songs/5.mp3" , coverPath:"img/covers/5.jpg"},
    {songName:"Phir bhi tuko chahunga" , filepath:"songs/6.mp3" , coverPath:"img/covers/6.jpg"},
    {songName:"Thodi jagah" , filepath:"songs/7.mp3" , coverPath:"img/covers/7.jpg"},
    {songName:"Dil sambhal ja jara" , filepath:"songs/8.mp3" , coverPath:"img/covers/8.jpg"},
    {songName:"Falak Tak" , filepath:"songs/9.mp3" , coverPath:"img/covers/9.jpg"},
    {songName:"Saiyan Ji dilwa mange le" , filepath:"songs/10.mp3" , coverPath:"img/covers/10.jpg"}
]

songIteam.forEach((element,i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songname")[0].innerText = songs[i].songName;
});


//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play')
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause')
        masterPlay.classList.add('fa-circle-play')
        gif.style.opacity=0;
    }
    
})

//listen of Events
audioElement.addEventListener('timeupdate', ()=>{
    //update seekbar
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressbar.value = progress;
})

myProgressbar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressbar.value * audioElement.duration/100;
})

const makeAllplays = ()=>{
    Array.from(document.getElementsByClassName('songiteamplay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songiteamplay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplays();
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');

        songIndex = parseInt(e.target.id);
        audioElement.src = `songs/${songIndex+1}.mp3`;
        mastersongname.innerText = songs[songIndex].songName;
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click' , ()=>{
    if(songIndex>=9){
        songIndex=0;
    }
    else{
        songIndex+=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click' , ()=>{
    if(songIndex<=0){
        songIndex=9;
    }
    else{
        songIndex-=1;
    }

    audioElement.src = `songs/${songIndex+1}.mp3`;
    mastersongname.innerText = songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})