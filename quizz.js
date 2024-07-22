function correct(){
    let option=document.getElementsByTagName("span");
    let ans=document.getElementsByTagName("button");
    option[3].style.backgroundColor="green";
    ans[3].style.backgroundColor="green";
}
function wrong1(){
    let option1=document.getElementsByTagName("span");
    let answer=document.getElementsByTagName("button");
    option1[0].style.backgroundColor="red";
    answer[0].style.backgroundColor="red";
}
function wrong2(){
    let option2=document.getElementsByTagName("span");
    let answer2=document.getElementsByTagName("button");
    option2[1].style.backgroundColor="red";
    answer2[1].style.backgroundColor="red";
}
function wrong3(){
    let option3=document.getElementsByTagName("span");
    let answer3=document.getElementsByTagName("button");
    option3[2].style.backgroundColor="red";
    answer3[2].style.backgroundColor="red";
}