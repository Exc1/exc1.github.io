const datesInfo=document.getElementById("for-select"),select=document.getElementById("select"),dota=document.getElementById("dota"),cs=document.getElementById("cs");function fakeChange(){var e=0;if("csgo"==select.value){e=0;cs.style.display.opacity=0,dota.style.display="none",cs.style.display="block",cs.style.opacity=0,setTimeout(function t(){e>1||(cs.style.opacity=e,e+=.1,setTimeout(t,30))},60)}if("dota2"==select.value){e=0;cs.style.display.opacity=0,cs.style.display="none",dota.style.display="block",dota.style.opacity=0,setTimeout(function t(){e>1||(dota.style.opacity=e,e+=.1,setTimeout(t,30))},60)}}function changeDota(){document.getElementById("welcome").style.backgroundImage="url('img/dota.jpg')",document.getElementById("btn-dota").style.display="none",document.getElementById("btn-csgo").style.display="flex"}function changeCs(){document.getElementById("welcome").style.backgroundImage="url('img/csgo.jpg')",document.getElementById("btn-dota").style.display="flex",document.getElementById("btn-csgo").style.display="none"}function openNav(){document.getElementById("sideNavigation").style.width="300px"}function closeNav(){document.getElementById("sideNavigation").style.width="0",document.getElementById("main").style.marginLeft="0"}select.addEventListener("input",fakeChange),document.addEventListener("DOMContentLoaded",function(){if(el_autohide=document.querySelector(".autohide"),el_autohide){var e=0;window.addEventListener("scroll",function(){let t=window.scrollY;t<e?(el_autohide.classList.remove("scrolled-down"),el_autohide.classList.add("scrolled-up")):(el_autohide.classList.remove("scrolled-up"),el_autohide.classList.add("scrolled-down")),e=t})}});var node=document.getElementsByClassName("watched");node.onclick=function(){closeNav()};
//# sourceMappingURL=main-min.js.map
