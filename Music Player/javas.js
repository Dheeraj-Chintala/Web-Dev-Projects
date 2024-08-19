musics.onloademetadata=()=>inp.max=musics.duration;
inp.onchange=()=>musics.currentTime=inp .value;
musics.ontimeupdate=()=>inp.value=musics.currentTime;
let songs=[" songs/mock"," songs/without.mp3"," songs/unforget.mp3"," songs/somewhere.mp3"," songs/shapeofyou.mp3"," songs/onfloor.mp3"," songs/bone.mp3"," songs/blindings.mp3"," songs/belivers.mp3"," songs/baby.mp3"," songs/animal.mp3"," songs/mock"];
let album=["mock"," pictures/eminem.jpeg"," pictures/unforget.jpg"," pictures/somewhere.jpg"," pictures/shape.png"," pictures/floor.jpeg"," pictures/bone.jpeg"," pictures/blinding.jpeg"," pictures/dragon.jpeg"," pictures/baby.jpeg"," pictures/animal.jpeg","mock"];
let texxt=["mock","Without Me By Eminem.mp3","Unforgettable By Swalle.mp3","Somewhere Only We Know By Rhianna.mp3","Shape Of You By Ed Sheran.mp3","On The Floor By Jennifer Lopez.mp3","Bones By Imagine Dragons.mp3","Blinding By The Lights By Weekend.mp3","Believer By Imagine Dragons.mp3","baby.mp3","animal.mp3","mock"];
let playicon=document.getElementById("plays");
function plause(){

 
    if (playicon.classList.contains("fa-play")){
      playicon.classList.remove("fa-play");
      playicon.classList.add("fa-pause");
      document.getElementById("im").style.animationPlayState="running";
      musics.play();

    }
    else{
      playicon.classList.remove("fa-pause");
      playicon.classList.add("fa-play");
      document.getElementById("im").style.animationPlayState="paused";
      musics.pause();
    }
   
}
let indsong=document.getElementById("musics");
let ima=document.getElementById("im");
let cover=document.getElementById("marq");
let i=1;
indsong.src=songs[i];
ima.src=album[i];
cover.innerHTML=texxt[i];
function forward(){
  indsong.src=songs[++i];
  ima.src=album[i];
  cover.innerHTML=texxt[i];
  musics.play();
  if(songs[i]==songs[10]){
   i=0;
   forward();
  }
  glitch();
}
function backward(){
  indsong.src=songs[--i];
  ima.src=album[i];
  cover.innerHTML=texxt[i];
  musics.play();
  if(songs[i]==songs[0]){
    i=10;
    backward();

  }
  glitch();
  
}
function one(){
  indsong.src=songs[1];
  ima.src=album[1];
  cover.innerHTML=texxt[1];
  musics.play();
  glitch();

}
function two(){
  indsong.src=songs[2];
  ima.src=album[2];cover.innerHTML=texxt[2];
  musics.play();
  glitch();

}
 
function three(){
  indsong.src=songs[3];
  ima.src=album[3];cover.innerHTML=texxt[3];
  musics.play();
  glitch();

}
 
function four(){
  indsong.src=songs[4];
  ima.src=album[4];cover.innerHTML=texxt[4];
  musics.play();
  glitch();

}
 
function five(){
  indsong.src=songs[5];
  ima.src=album[5];cover.innerHTML=texxt[5];
  musics.play();
  glitch();

}
 
function six(){
  indsong.src=songs[6];
  ima.src=album[6];cover.innerHTML=texxt[6];
  musics.play();
  glitch();

}
 
function seven(){
  indsong.src=songs[7];
  ima.src=album[7];cover.innerHTML=texxt[7];
  musics.play();
  glitch();

}
 
function eight(){
  indsong.src=songs[8];
  ima.src=album[8];cover.innerHTML=texxt[8];
  musics.play();
  glitch();

}
function nine(){
  indsong.src=songs[9];
  ima.src=album[9];cover.innerHTML=texxt[9];
  musics.play();
  glitch();

}
function ten(){
  indsong.src=songs[10];
  ima.src=album[10];cover.innerHTML=texxt[10];
  musics.play();
  glitch();

}
 function glitch(){
  if (playicon.classList.contains("fa-play")){
    musics.pause();

  }
 }