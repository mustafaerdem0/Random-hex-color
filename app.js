
function rndhexkodu(){
    let hexkod = "1234567890ABCDEF";
    let hex1 = "#";
    let hex2 = "#";
    let hex3 = "#";
    let hex4 = "#";
    for (let i = 0; i < 6; i++){
        let rndhex = Math.floor(Math.random() * hexkod.length);
        hex1 += hexkod[rndhex];
        rndhex = Math.floor(Math.random() * hexkod.length);
        hex2 += hexkod[rndhex];
        rndhex = Math.floor(Math.random() * hexkod.length);
        hex3+= hexkod[rndhex];
        rndhex = Math.floor(Math.random() * hexkod.length);
        hex4 += hexkod[rndhex];       
    }
    document.getElementById("box").style.backgroundColor = hex1
    document.getElementById("h1").innerHTML = hex1
    document.getElementById("box2").style.backgroundColor = hex2
    document.getElementById("h2").innerHTML = hex2
    document.getElementById("box3").style.backgroundColor = hex3
    document.getElementById("h3").innerHTML = hex3
    document.getElementById("box4").style.backgroundColor = hex4
    document.getElementById("h4").innerHTML = hex4
    document.getElementById("hexbtn").style.backgroundColor = hex1
}

function rndlnrgrd(){
    let lnrgrd = "1234567890ABCDEF";
    let hexh = "#";
    let hexh2 = "#"
    for(i = 0; i < 6; i++){
        let lnrgrdhex = Math.floor(Math.random() * lnrgrd.length);
        hexh += lnrgrd[lnrgrdhex];
    }
    for(i = 0; i < 6; i++){
        let lnrgrdhex = Math.floor(Math.random() * lnrgrd.length);
        hexh2 += lnrgrd[lnrgrdhex];
    }
    document.getElementById("lnrh1").innerHTML = "background: linear-gradient(" + hexh +   ", "   + hexh2 + ")";
    document.getElementById("lnrgrdbox").style.background="linear-gradient(" + hexh +", " + hexh2 +")";
    document.getElementById("lnrbtn").style.background="linear-gradient(" + hexh +", " + hexh2 +")";
    console.log(hexh, hexh2);

}