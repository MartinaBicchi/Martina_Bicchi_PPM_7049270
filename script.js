function navbar_scroll () {
    var fcontainer1 = document.getElementById("header");
    var nav=document.getElementById("navbar");
    var conta=document.getElementById("conta");
    var icona1=document.getElementById("iconcolor1");
    var icona2=document.getElementById("iconcolor2");
    var icona3=document.getElementById("iconcolor3");
    var icona4=document.getElementById("iconcolor4");
    var icona5=document.getElementById("iconcolor5");
    var follow=document.getElementById("followus");
    var navpiccola=document.getElementById("navbarNavDropdown");

    if (this.scrollY > 30) {
        fcontainer1.classList.add("header-color");
        nav.classList.add("eliminanav");
        conta.classList.add("conta");
        icona1.classList.add("iconcolor1-color");
        icona2.classList.add("iconcolor2-color");
        icona3.classList.add("iconcolor3-color");
        icona4.classList.add("iconcolor4-color");
        icona5.classList.add("iconcolor5-color");
        follow.classList.add("aggiungifollowus");
        navpiccola.classList.add("eliminaElenco");
    }
    else {
        fcontainer1.classList.remove("header-color");
        nav.classList.remove("eliminanav");
        conta.classList.remove("conta");
        icona1.classList.remove("iconcolor1-color");
        icona2.classList.remove("iconcolor2-color");
        icona3.classList.remove("iconcolor3-color");
        icona4.classList.remove("iconcolor4-color");
        icona5.classList.remove("iconcolor5-color");
        follow.classList.remove("aggiungifollowus");
        navpiccola.classList.remove("eliminaElenco");
    }

}

window.addEventListener("scroll", navbar_scroll, false)
