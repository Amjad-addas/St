let Day=document.getElementById("day")
let Houre=document.getElementById("houre")
let Min=document.getElementById("min")

let Sec=document.getElementById("sec")


let Dayt=document.getElementById("dayt")
let Houret=document.getElementById("houret")
let Mint=document.getElementById("mint")

let Sect=document.getElementById("sect")

let diffTime=0
let diffDays=0
let diffhoures=0
let min=0
let secound=0

setInterval(function(){
    const min= 60- new Date().getMinutes()
    const secound =60- new Date().getSeconds()
    const date1 = new Date();
    let houres =date1.getHours()
    const date2 = new Date('5/26/2024');
    diffTime = Math.abs(date2 - date1);
    diffDays= Math.ceil(diffTime / ( 1000*60 * 60 * 24)); 
    
    if(8-houres<0){
        diffDays=diffDays-1
        houres=houres-8
        diffhoures=24-houres
    }
    Houre.innerHTML=diffhoures+'  Houres'
    Day.innerHTML=diffDays+'  Days'
    Sec.innerHTML=secound+'  Secounds'
    Min.innerHTML=min+'  Minutes'


    Houret.innerHTML=diffhoures+'  Houres'
    Dayt.innerHTML=(diffDays+1)+'  Days'
    Sect.innerHTML=secound+'  Secounds'
    Mint.innerHTML=min+'  Minutes'

}, 1000);
