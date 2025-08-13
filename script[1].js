const card=document.getElementById('card');
const message=document.getElementById('message');
const closeBtn=document.getElementById('close');
const musicBtn=document.getElementById('musicBtn');
let playerReady=false,musicStarted=false,YT_SONG="ILjSWXu8elg";
let tag=document.createElement('script');
tag.src="https://www.youtube.com/iframe_api";
document.body.appendChild(tag);
let player;
function onYouTubeIframeAPIReady(){player=new YT.Player('player',{height:'0',width:'0',videoId:YT_SONG,events:{'onReady':()=>{playerReady=true;tryPlayMusic();}},playerVars:{autoplay:1,controls:0,modestbranding:1}});}
function tryPlayMusic(){if(playerReady&&!musicStarted){const promise=player.playVideo();if(promise!==undefined){promise.catch(()=>{musicBtn.style.display="inline-block";})}musicStarted=true;}}
musicBtn.addEventListener("click",()=>{if(playerReady){player.playVideo();musicBtn.style.display="none";}});
function openCard(){card.classList.add('open');tryPlayMusic();}
function closeMessage(e){e?.stopPropagation();card.classList.remove('open');if(playerReady)player.pauseVideo();}
card.addEventListener('click',()=>{if(!card.classList.contains('open'))openCard();});
closeBtn.addEventListener('click',closeMessage);