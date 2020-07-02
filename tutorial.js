let username = prompt("お名前を教えてください");
let userresult;
const rand = Math.floor(Math.random()*5); 


if(rand==0){
     userresult = "大吉";
}
if(rand==1){
     userresult = "中吉";
}
if(rand==2){
     userresult = "小吉";
}
if(rand==3){
     userresult = "吉";
}
if(rand==4){
     userresult = "凶";
};

if(username == ""){
    username = "名無し"
};

$(window).on('load', () =>{
    $('#name').text(username)
});

$(window).on('load', () =>{
    $('#result').text(userresult)
});