
var mic2=new Audio("https://monoame.com/awi_class/ballsound/click14.wav");
$(".i5").click(function(){
  $(".phone").css("width","");
  $(".screen").css("height","");
  $(".phone-name").text($(this).text());
  mic2.play();
});
$(".i5s").click(function(){
  $(".phone").css("width","250px");
  $(".screen").css("height","420px");
  $(".phone-name").text($(this).text());
   mic2.play();
});
$(".i6").click(function(){
  $(".phone").css("width","270px");
  $(".screen").css("height","440px");
  $(".phone-name").text($(this).text());
   mic2.play();
});
$(".i6s").click(function(){
  $(".phone").css("width","300px");
  $(".screen").css("height","480px");
  $(".phone-name").text($(this).text());
   mic2.play();
});
var page=0;
var mic1=new Audio("https://monoame.com/awi_class/ballsound/click18.wav");
$(".screen").click(function(){
  page+=1;
  if (page>2){page=0;}
  $(".pages").css("left","-"+page*100+"%");
  mic1.play();
});
var mic3=new Audio("https://monoame.com/awi_class/ballsound/click23.wav");
$(".home").click(function(){
  page=0;
  $(".pages").css("left","-"+page*100+"%"); 
  mic3.play();
});
// var round=0;
// function reround(){
//   round=round+360;
//   $(".phone").css("transform","rotate(round+"deg")");
  
// }
$(".turn").click(function(){
  
  $(".phone").css("transform","rotate(360deg)");
});
var mic4=new Audio("https://monoame.com/awi_class/ballsound/phonevi.mp3");
$(".wiggle").click(function(){
  time=0;
  mic4.play();
});
  var time=0
  setInterval(function(){
    console.log(time);
    if(time<=30){
    time++;
    if(time%2==0)         
    {$(".phone").css("left","-24px")}
    else{$(".phone").css("left","24px")}
    if(time==31){$(".phone").css("left","")} 
    }},40);
