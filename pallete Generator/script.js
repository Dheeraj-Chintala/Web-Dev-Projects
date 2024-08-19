function myf() {
    let a="#";
    let b=Math.floor(Math.random()*999999);
    let c=Math.floor(Math.random()*999999);
    let d=Math.floor(Math.random()*999999);
    let e=Math.floor(Math.random()*999999);
    document.getElementById("fcode").innerHTML=a+b;
    document.getElementById("scode").innerHTML=a+c;
    document.getElementById("tcode").innerHTML=a+d;
    document.getElementById("focode").innerHTML=a+e;
    document.getElementById("fcard").style.backgroundColor=a+b;
    document.getElementById("scard").style.backgroundColor=a+c;
    document.getElementById("tcard").style.backgroundColor=a+d;
    document.getElementById("focard").style.backgroundColor=a+e;
    
}