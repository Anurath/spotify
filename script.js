console.log("Welcome to the JavaScript.");

let songIdex=0;
let audioElement=new Audio('songs/2.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif");
let songItem=Array.from(document.getElementsByClassName("songItem"));



let songs=[
    {songName:"Ram Shiya Ram..", filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Baby Girl (Guru Randhawa)", filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Nach Meri Rani(Guru Randhawa)", filePath:"songs/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Lagdi Lahor Diya", filePath:"songs/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Tere Te Mar Java", filePath:"songs/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Ye Tune Kya Kiya", filePath:"songs/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Gal Meri Man Ja", filePath:"songs/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Mai Yesa Nasa Chada", filePath:"songs/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"Sajni Re", filePath:"songs/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Pahle Bhi Mai.", filePath:"songs/10.mp3",coverPath:"covers/10.jpg"}
]

songItem.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.add('fa-play-circle');
        masterPlay.classList.remove('fa-pause-circle');
        gif.style.opacity=0;
    }
    
})

audioElement.addEventListener("timeupdate",()=>{
    progress=((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
    
})

const makeAllplay=()=>{
    
    Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
        element.classList.remove("fa-pause-circle");
        element.classList.add("fa-play-circle");
    })
}


Array.from(document.getElementsByClassName("songItemplay")).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllplay();
        e.target.classList.remove("fa-play-circle");
        e.target.classList.add("fa-pause-circle");
        index=parseInt(e.target.id);

        audioElement.src=`songs/${index}.mp3`;
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-play-circle');

    })
})


