let stage = 0;

document.addEventListener("click",e=>{
  for(let i=0;i<10;i++){
    const s = document.createElement("div");
    s.className = "sparkle";
    s.style.left = (e.clientX+Math.random()*20)+"px";
    s.style.top = (e.clientY+Math.random()*20)+"px";
    document.body.appendChild(s);
    setTimeout(()=>s.remove(),500);
  }
});

function login(){
  const u=document.getElementById("user").value;
  const p=document.getElementById("pass").value;
  if(u==="Shub@princess" && p==="Fast-text"){
    document.getElementById("loginBox").classList.add("hidden");
    document.getElementById("portal").classList.remove("hidden");
    renderStage();
  } else {
    alert("Wrong login!");
  }
}

function renderStage(){
 const box=document.getElementById("stageBox");

 const stages=[
 "Re:Zero Quiz – Who does Subaru love? ❤️",
 "Do you think you should reply fast? - (Yes / No)",
 "Gym Challenge - How many pull ups you can do? - (25 / 50 / 75 / 100)",
 "Gym Challenge – How many reps is too many? 💪",
 "Hairstyle Question – Will you change your nest? (Yes / Yes 😂)",
 "Yes, you are princess 👑",
 "Zyada uda mat karo janab 😌",
 "Jaldi reply kar diya karo 💌",
 "Whenever you feel low? Just talk to me~🌸",
 "Scratch stage unlocked!"
 ];

 if(stage < stages.length){
  box.innerHTML = stages[stage];
 } 

 if(stage===6){
  document.getElementById("scratchLayer").style.display="block";
 }
}

document.getElementById("scratchLayer").addEventListener("mousemove",()=>{
  document.getElementById("scratchLayer").style.opacity=0;
  document.getElementById("braceletReveal").style.display="block";
});

function nextStage(){
 stage++;
 if(stage===8){
  showCertificate();
 } else {
  renderStage();
 }
}

function showCertificate(){
 document.getElementById("stageBox").innerHTML = `
  <h2>Certificate of Friendship</h2>
  <p>
   You are now officially and forcefully enforced into this friendship forever.  
   There is no exit button, no uninstall option and no escape route available.  
   Your loyalty, presence, jokes, gym reps, anime love and bracelet energy
   are now permanently registered in this portal.  
   Resistance is emotionally impossible.
  </p>
 `;
}
