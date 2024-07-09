console.log("Welcome to the JavaScript.");

let songIdex=0;
let audioElement=new Audio('songs/1.mp3');
let masterPlay=document.getElementById("masterPlay");
let myProgressBar=document.getElementById("myProgressBar")
let gif=document.getElementById("gif");

let songs=[
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"},
    {songName:"Salame-e-Ishq", filePath:"song/1.mp3",coverPath:"conver/1.jpg"}
]

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
    
})