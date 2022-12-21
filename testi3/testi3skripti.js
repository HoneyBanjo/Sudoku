//variables:

let head = document.getElementById("head");
let openGame = document.getElementById("openGame");
let GameBoard = document.getElementById("GameBoard");
let startbox = document.getElementById("startbox");
let check = document.getElementsByClassName("check");

let ilmotukset = document.getElementById("ilmotukset");
let ilmobox = document.getElementById("ilmobox");

let Easybox = document.getElementById("Easybox");
let Mediumbox = document.getElementById("Mediumbox");
let Hardbox = document.getElementById("Hardbox");



let easylist = [
    easy1,
    easy2,
    easy3
]

let mediumlist = [
    medium1,
    medium2,
    medium3
]

let hardlist = [
    hard1,
    hard2,
    hard3
]

// jos haluaa käyttää niin tee se näin:
// easylist[1]("nämä sulkeet on pakko olla vaikka tyhjinä");


let testiA = document.getElementById("testiA");
let testiB = document.getElementById("testiB");
let testiC = document.getElementById("testiC");
let testiD = document.getElementById("testiD");
let testiE = document.getElementById("testiE");
let testiF = document.getElementById("testiF");
let testiG = document.getElementById("testiG");
let testiH = document.getElementById("testiH");
let testiI = document.getElementById("testiI");


let testiAA = document.getElementById("testiAA");
let testiBB = document.getElementById("testiBB");
let testiCC = document.getElementById("testiCC");
let testiDD = document.getElementById("testiDD");
let testiEE = document.getElementById("testiEE");
let testiFF = document.getElementById("testiFF");
let testiGG = document.getElementById("testiGG");
let testiHH = document.getElementById("testiHH");
let testiII = document.getElementById("testiII");





//stringiruudukko:------------------------------------------------------


let ax = 0;
let bx = 0;
let cx = 0;
let dx = 0;
let ex = 0;
let fx = 0;
let gx = 0;
let hx = 0;
let ix = 0;

let ay = 0;
let by = 0;
let cy = 0;
let dy = 0;
let ey = 0;
let fy = 0;
let gy = 0;
let hy = 0;
let iy = 0;

let az = 0;
let bz = 0;
let cz = 0;
let dz = 0;
let ez = 0;
let fz = 0;
let gz = 0;
let hz = 0;
let iz = 0;

let ap = 0;
let bp = 0;
let cp = 0;
let dp = 0;
let ep = 0;
let fp = 0;
let gp = 0;
let hp = 0;
let ip = 0;

let ao = 0;
let bo = 0;
let co = 0;
let doo = 0; // huomaa poikkeus
let eo = 0;
let fo = 0;
let go = 0;
let ho = 0;
let io = 0;

let at = 0;
let bt = 0;
let ct = 0;
let dt = 0;
let et = 0;
let ft = 0;
let gt = 0;
let ht = 0;
let it = 0;

let ar = 0;
let br = 0;
let cr = 0;
let dr = 0;
let er = 0;
let fr = 0;
let gr = 0;
let hr = 0;
let ir = 0;


let au = 0;
let bu = 0;
let cu = 0;
let du = 0;
let eu = 0;
let fu = 0;
let gu = 0;
let hu = 0;
let iu = 0;

let al = 0;
let bl = 0;
let cl = 0;
let dl = 0;
let el = 0;
let fl = 0;
let gl = 0;
let hl = 0;
let il = 0;

//integerruudukko:----------------------------------------------------------

let a1x = 0;
let b1x = 0;
let c1x = 0;
let d1x = 0;
let e1x = 0;
let f1x = 0;
let g1x = 0;
let h1x = 0;
let i1x = 0;
let j1x = 0;


let a1y = 0;
let b1y = 0;
let c1y = 0;
let d1y = 0;
let e1y = 0;
let f1y = 0;
let g1y = 0;
let h1y = 0;
let i1y = 0;

let a1z = 0;
let b1z = 0;
let c1z = 0;
let d1z = 0;
let e1z = 0;
let f1z = 0;
let g1z = 0;
let h1z = 0;
let i1z = 0;

let a1p = 0;
let b1p = 0;
let c1p = 0;
let d1p = 0;
let e1p = 0;
let f1p = 0;
let g1p = 0;
let h1p = 0;
let i1p = 0;


let a1o = 0;
let b1o = 0;
let c1o = 0;
let d1oo = 0; // huomaa poikkeus
let e1o = 0;
let f1o = 0;
let g1o = 0;
let h1o = 0;
let i1o = 0;

let a1t = 0;
let b1t = 0;
let c1t = 0;
let d1t = 0;
let e1t = 0;
let f1t = 0;
let g1t = 0;
let h1t = 0;
let i1t = 0;


let a1r = 0;
let b1r = 0;
let c1r = 0;
let d1r = 0;
let e1r = 0;
let f1r = 0;
let g1r = 0;
let h1r = 0;
let i1r = 0;

let a1u = 0;
let b1u = 0;
let c1u = 0;
let d1u = 0;
let e1u = 0;
let f1u = 0;
let g1u = 0;
let h1u = 0;
let i1u = 0;

let a1l = 0;
let b1l = 0;
let c1l = 0;
let d1l = 0;
let e1l = 0;
let f1l = 0;
let g1l = 0;
let h1l = 0;
let i1l = 0;

// SOLID ARVOT -------------------------------------------------------

let SA1 = 0;
let SA2 = 0;
let SA3 = 0;
let SA4 = 0;
let SA5 = 0;
let SA6 = 0;
let SA7 = 0;
let SA8 = 0;
let SA9 = 0;

let SB1 = 0;
let SB2 = 0;
let SB3 = 0;
let SB4 = 0;
let SB5 = 0;
let SB6 = 0;
let SB7 = 0;
let SB8 = 0;
let SB9 = 0;

let SC1 = 0;
let SC2 = 0;
let SC3 = 0;
let SC4 = 0;
let SC5 = 0;
let SC6 = 0;
let SC7 = 0;
let SC8 = 0;
let SC9 = 0;

let SD1 = 0;
let SD2 = 0;
let SD3 = 0;
let SD4 = 0;
let SD5 = 0;
let SD6 = 0;
let SD7 = 0;
let SD8 = 0;
let SD9 = 0;

let SE1 = 0;
let SE2 = 0;
let SE3 = 0;
let SE4 = 0;
let SE5 = 0;
let SE6 = 0;
let SE7 = 0;
let SE8 = 0;
let SE9 = 0;

let SF1 = 0;
let SF2 = 0;
let SF3 = 0;
let SF4 = 0;
let SF5 = 0;
let SF6 = 0;
let SF7 = 0;
let SF8 = 0;
let SF9 = 0;

let SG1 = 0;
let SG2 = 0;
let SG3 = 0;
let SG4 = 0;
let SG5 = 0;
let SG6 = 0;
let SG7 = 0;
let SG8 = 0;
let SG9 = 0;

let SH1 = 0;
let SH2 = 0;
let SH3 = 0;
let SH4 = 0;
let SH5 = 0;
let SH6 = 0;
let SH7 = 0;
let SH8 = 0;
let SH9 = 0;

let SI1 = 0;
let SI2 = 0;
let SI3 = 0;
let SI4 = 0;
let SI5 = 0;
let SI6 = 0;
let SI7 = 0;
let SI8 = 0;
let SI9 = 0;



// -----------------------------------------
let A1 = document.getElementById("A1");
let B1 = document.getElementById("B1");
let C1 = document.getElementById("C1");
let D1 = document.getElementById("D1");
let E1 = document.getElementById("E1");
let F1 = document.getElementById("F1");
let G1 = document.getElementById("G1");
let H1 = document.getElementById("H1");
let I1 = document.getElementById("I1");
let J1 = document.getElementById("J1");

// -----------------------------------------
let A2 = document.getElementById("A2");
let B2 = document.getElementById("B2");
let C2 = document.getElementById("C2");
let D2 = document.getElementById("D2");
let E2 = document.getElementById("E2");
let F2 = document.getElementById("F2");
let G2 = document.getElementById("G2");
let H2 = document.getElementById("H2");
let I2 = document.getElementById("I2");
let J2 = document.getElementById("J2");

// -----------------------------------------
let A3 = document.getElementById("A3");
let B3 = document.getElementById("B3");
let C3 = document.getElementById("C3");
let D3 = document.getElementById("D3");
let E3 = document.getElementById("E3");
let F3 = document.getElementById("F3");
let G3 = document.getElementById("G3");
let H3 = document.getElementById("H3");
let I3 = document.getElementById("I3");
let J3 = document.getElementById("J3");

// -----------------------------------------
let A4 = document.getElementById("A4");
let B4 = document.getElementById("B4");
let C4 = document.getElementById("C4");
let D4 = document.getElementById("D4");
let E4 = document.getElementById("E4");
let F4 = document.getElementById("F4");
let G4 = document.getElementById("G4");
let H4 = document.getElementById("H4");
let I4 = document.getElementById("I4");
let J4 = document.getElementById("J4");
// -----------------------------------------
let A5 = document.getElementById("A5");
let B5 = document.getElementById("B5");
let C5 = document.getElementById("C5");
let D5 = document.getElementById("D5");
let E5 = document.getElementById("E5");
let F5 = document.getElementById("F5");
let G5 = document.getElementById("G5");
let H5 = document.getElementById("H5");
let I5 = document.getElementById("I5");
let J5 = document.getElementById("J5");
// -----------------------------------------
let A6 = document.getElementById("A6");
let B6 = document.getElementById("B6");
let C6 = document.getElementById("C6");
let D6 = document.getElementById("D6");
let E6 = document.getElementById("E6");
let F6 = document.getElementById("F6");
let G6 = document.getElementById("G6");
let H6 = document.getElementById("H6");
let I6 = document.getElementById("I6");
let J6 = document.getElementById("J6");

// -----------------------------------------
let A7 = document.getElementById("A7");
let B7 = document.getElementById("B7");
let C7 = document.getElementById("C7");
let D7 = document.getElementById("D7");
let E7 = document.getElementById("E7");
let F7 = document.getElementById("F7");
let G7 = document.getElementById("G7");
let H7 = document.getElementById("H7");
let I7 = document.getElementById("I7");
let J7 = document.getElementById("J7");

// -----------------------------------------
let A8 = document.getElementById("A8");
let B8 = document.getElementById("B8");
let C8 = document.getElementById("C8");
let D8 = document.getElementById("D8");
let E8 = document.getElementById("E8");
let F8 = document.getElementById("F8");
let G8 = document.getElementById("G8");
let H8 = document.getElementById("H8");
let I8 = document.getElementById("I8");
let J8 = document.getElementById("J8");

// -----------------------------------------
let A9 = document.getElementById("A9");
let B9 = document.getElementById("B9");
let C9 = document.getElementById("C9");
let D9 = document.getElementById("D9");
let E9 = document.getElementById("E9");
let F9 = document.getElementById("F9");
let G9 = document.getElementById("G9");
let H9 = document.getElementById("H9");
let I9 = document.getElementById("I9");
let J9 = document.getElementById("J9");


//----------------------------------------------
let A0 = document.getElementById("A0");
let B0 = document.getElementById("B0");
let C0 = document.getElementById("C0");
let D0 = document.getElementById("D0");
let E0 = document.getElementById("E0");
let F0 = document.getElementById("F0");
let G0 = document.getElementById("G0");
let H0 = document.getElementById("H0");
let I0 = document.getElementById("I0");
let J0 = document.getElementById("J0");



// EVENTLISTENERS


// Eka jono----------------------------------
A1.addEventListener("click",function(){
    if (SA1 == 0){ // jos ruutu on tyhjä (metanumero on 0)
        ax = prompt("Anna numero"); // voidaan ottaa input
        if ( ax == ""){ //jos input canceloidaan
            ax = 0; // ruudun muuttujan arvo on nolla
        }
    }

    a1x = ax; // Tehdään kopiomuuttuja, joka on riippuvainen alkuperäisestä muuttujasta
    a1x = parseInt(a1x); // kopiomuuttujan tyyppi muutetaan numeeriseksi

    for (let i = 0; i < 10; i++){ // Käy lävitse 0-9 numerot
        if ( a1x === i){ // jos muuttuja on 0-9 numero
            ilmotukset.innerHTML = " " // Ilmoitustaulu on tyhjä
            A1.innerHTML = ax; // ruudun tekstiarvo on sama kuin muuttuja
            console.log("muokattu A1"); // konsoliin leima
            console.log(a1x);  // konsoliin leima
            riviCheckA(); // katsoo onko jono 45
            riviCheckAA(); // katsoo onko rivi 45
            break
            }
        else { // muuten käyttäjä on antanut arvoja väärin
        ilmotukset.innerHTML = " Annappa numero 0-9 "; // ilmoitustaululle error
        A1.innerHTML = "0"; // ruudun tekstiarvo on 0
        }
    }
    


})



B1.addEventListener("click",function(){
    if (SB1 == 0){
        bx = prompt("Anna numero");
        if(bx == ""){
            bx = 0;
        }

    }

    b1x = bx;
    b1x = parseInt(b1x);

    for (let i = 0; i < 10; i++){
        if ( b1x === i){
            ilmotukset.innerHTML = " "
            B1.innerHTML = bx;
            console.log("muokattu B1");
            console.log(b1x);
            riviCheckA();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B1.innerHTML = "0";
        }
    }
})

C1.addEventListener("click",function(){
    if (SC1 == 0){
        cx = prompt("Anna numero");
        if(cx == ""){
            cx = 0;
        }

    }
    c1x = cx;
    c1x = parseInt(c1x);

    for (let i = 0; i < 10; i++){
        if ( c1x === i){
            ilmotukset.innerHTML = " "
            C1.innerHTML = cx;
            console.log("muokattu C1");
            console.log(c1x);
            riviCheckA();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C1.innerHTML = "0";
        }
    }

})

D1.addEventListener("click",function(){
    if (SD1 == 0){
        dx = prompt("Anna numero");
        if(dx == ""){
            dx = 0;
        }

    }
    d1x = dx;
    d1x = parseInt(d1x);


    for (let i = 0; i < 10; i++){
        if ( d1x === i){
            ilmotukset.innerHTML = " "
            D1.innerHTML = dx;
            console.log("muokattu D1");
            console.log(dx);
            riviCheckA();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D1.innerHTML = "0";
        }
    }

})

E1.addEventListener("click",function(){
    if (SE1 == 0){
        ex = prompt("Anna numero");
        if(ex == ""){
            ex = 0;
        }

    }
    e1x = ex;
    e1x = parseInt(e1x);

    for (let i = 0; i < 10; i++){
        if ( e1x === i){
            ilmotukset.innerHTML = " "
            E1.innerHTML = ex;
            console.log("muokattu E1");
            console.log(ex);
            riviCheckA();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E1.innerHTML = "0";
        }
    }

})

F1.addEventListener("click",function(){
    if (SF1 == 0){
        fx = prompt("Anna numero");
        if(fx == ""){
            fx = 0;
        }

    }
    f1x = fx;
    f1x = parseInt(f1x);

    for (let i = 0; i < 10; i++){
        if ( f1x === i){
            ilmotukset.innerHTML = " "
            F1.innerHTML = fx;
            console.log("muokattu F1");
            console.log(fx);
            riviCheckA();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F1.innerHTML = "0";
        }
    }

})

G1.addEventListener("click",function(){
    if (SG1 == 0){
        gx = prompt("Anna numero");
        if(gx == ""){
            gx = 0;
        }

    }
    g1x = gx;
    g1x = parseInt(g1x);

    for (let i = 0; i < 10; i++){
        if ( g1x === i){
            ilmotukset.innerHTML = " "
            G1.innerHTML = gx;
            console.log("muokattu G1");
            console.log(gx);
            riviCheckA();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G1.innerHTML = "0";
        }
    }

})

H1.addEventListener("click",function(){
    if (SH1 == 0){
        hx = prompt("Anna numero");
        if(hx == ""){
            hx = 0;
        }

    }
    h1x = hx;
    h1x = parseInt(h1x);

    for (let i = 0; i < 10; i++){
        if ( h1x === i){
            ilmotukset.innerHTML = " "
            H1.innerHTML = hx;
            console.log("muokattu H1");
            console.log(hx);
            riviCheckA();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H1.innerHTML = "0";
        }
    }

})

I1.addEventListener("click",function(){
    if (SI1 == 0){
        ix = prompt("Anna numero");
        if(ix == ""){
            ix = 0;
        }

    }
    i1x = ix;
    i1x = parseInt(i1x);

    for (let i = 0; i < 10; i++){
        if ( i1x === i){
            ilmotukset.innerHTML = " "
            I1.innerHTML = ix;
            console.log("muokattu I1");
            console.log(ix);
            riviCheckA();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I1.innerHTML = "0";
        }
    }

})

// Toka jono -------------------------------------


A2.addEventListener("click",function(){
    if ( SA2 == 0){
        ay = prompt("Anna numero");
        if(ay == ""){
            ay = 0;
        }
    }

    a1y = ay;
    a1y = parseInt(a1y);

    for (let i = 0; i < 10; i++){
        if ( a1y === i){
            ilmotukset.innerHTML = " "
            A2.innerHTML = ay;
            console.log("muokattu A1");
            console.log(a1y);
            riviCheckB();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A2.innerHTML = "0";
        }
    }

})

B2.addEventListener("click",function(){
    if (SB2 == 0){
        by = prompt("Anna numero");
        if(by == ""){
            by = 0;
        }

    }
    b1y = by;
    b1y = parseInt(b1y);

    for (let i = 0; i < 10; i++){
        if ( b1y === i){
            ilmotukset.innerHTML = " "
            B2.innerHTML = by;
            console.log("muokattu B1");
            console.log(b1y);
            riviCheckB();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B2.innerHTML = "0";
        }
    }

})

C2.addEventListener("click",function(){
    if (SC2 == 0){
        cy = prompt("Anna numero");
        if(cy == ""){
            cy = 0;
        }

    }
    c1y = cy;
    c1y = parseInt(c1y);

    for (let i = 0; i < 10; i++){
        if ( c1y === i){
            ilmotukset.innerHTML = " "
            C2.innerHTML = cy;
            console.log("muokattu C1");
            console.log(c1y);
            riviCheckB();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C2.innerHTML = "0";
        }
    }

})

D2.addEventListener("click",function(){
    if (SD2 == 0){
        dy = prompt("Anna numero");
        if(dy == ""){
            dy = 0;
        }

    }
    d1y = dy;
    d1y = parseInt(d1y);

    for (let i = 0; i < 10; i++){
        if ( d1y === i){
            ilmotukset.innerHTML = " "
            D2.innerHTML = dy;
            console.log("muokattu D1");
            console.log(dy);
            riviCheckB();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D2.innerHTML = "0";
        }
    }

})

E2.addEventListener("click",function(){
    if (SE2 == 0){
        ey = prompt("Anna numero");
        if(ey == ""){
            ey = 0;
        }

    }
    e1y = ey;
    e1y = parseInt(e1y);

    for (let i = 0; i < 10; i++){
        if ( e1y === i){
            ilmotukset.innerHTML = " "
            E2.innerHTML = ey;
            console.log("muokattu E1");
            console.log(ey);
            riviCheckB();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E2.innerHTML = "0";
        }
    }

})

F2.addEventListener("click",function(){
    if (SF2 == 0){
        fy = prompt("Anna numero");
        if(fy == ""){
            fy = 0;
        }

    }
    f1y = fy;
    f1y = parseInt(f1y);

    for (let i = 0; i < 10; i++){
        if ( f1y === i){
            ilmotukset.innerHTML = " "
            F2.innerHTML = fy;
            console.log("muokattu F1");
            console.log(fy);
            riviCheckB();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F2.innerHTML = "0";
        }
    }

})

G2.addEventListener("click",function(){
    if (SG2 == 0){
        gy = prompt("Anna numero");
        if(gy == ""){
            gy = 0;
        }

    }
    g1y = gy;
    g1y = parseInt(g1y);

    for (let i = 0; i < 10; i++){
        if ( g1y === i){
            ilmotukset.innerHTML = " "
            G2.innerHTML = gy;
            console.log("muokattu G1");
            console.log(gy);
            riviCheckB();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G2.innerHTML = "0";
        }
    }

})

H2.addEventListener("click",function(){
    if (SH2 == 0){
        hy = prompt("Anna numero");
        if(hy == ""){
            hy = 0;
        }

    }
    h1y = hy;
    h1y = parseInt(h1y);

    for (let i = 0; i < 10; i++){
        if ( h1y === i){
            ilmotukset.innerHTML = " "
            H2.innerHTML = hy;
            console.log("muokattu H1");
            console.log(hy);
            riviCheckB();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H2.innerHTML = "0";
        }
    }

})

I2.addEventListener("click",function(){
    if (SI2 == 0){
        iy = prompt("Anna numero");
        if(iy == ""){
            iy = 0;
        }

    }
    i1y = iy;
    i1y = parseInt(i1y);

    for (let i = 0; i < 10; i++){
        if ( i1y === i){
            ilmotukset.innerHTML = " "
            I2.innerHTML = iy;
            console.log("muokattu I1");
            console.log(iy);
            riviCheckB();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I2.innerHTML = "0";
        }
    }

})

// KOLMAS JONO------------------------------------

A3.addEventListener("click",function(){
    if (SA3 == 0){
        az = prompt("Anna numero");
        if ( az == ""){
            az = 0;
        }
    }
    a1z = az;
    a1z = parseInt(a1z);

    for (let i = 0; i < 10; i++){
        if ( a1z === i){
            ilmotukset.innerHTML = " "
            A3.innerHTML = az;
            console.log("muokattu A1");
            console.log(a1z);
            riviCheckC();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A3.innerHTML = "0";
        }
    }

})

B3.addEventListener("click",function(){
    if (SB3 == 0){
        bz = prompt("Anna numero");
        if ( bz == ""){
            bz = 0;
        }
    }
    b1z = bz;
    b1z = parseInt(b1z);

    for (let i = 0; i < 10; i++){
        if ( b1z === i){
            ilmotukset.innerHTML = " "
            B3.innerHTML = bz;
            console.log("muokattu B1");
            console.log(b1z);
            riviCheckC();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B3.innerHTML = "0";
        }
    }

})

C3.addEventListener("click",function(){
    if (SC3 == 0){
        cz = prompt("Anna numero");
        if ( cz == ""){
            cz = 0;
        }
    }
    c1z = cz;
    c1z = parseInt(c1z);

    for (let i = 0; i < 10; i++){
        if ( c1z === i){
            ilmotukset.innerHTML = " "
            C3.innerHTML = cz;
            console.log("muokattu C1");
            console.log(c1z);
            riviCheckC();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C3.innerHTML = "0";
        }
    }

})

D3.addEventListener("click",function(){
    if (SD3 == 0){
        dz = prompt("Anna numero");
        if ( dz == ""){
            dz = 0;
        }
    }
    d1z = dz;
    d1z = parseInt(d1z);

    for (let i = 0; i < 10; i++){
        if ( d1z === i){
            ilmotukset.innerHTML = " "
            D3.innerHTML = dz;
            console.log("muokattu D1");
            console.log(dz);
            riviCheckC();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D3.innerHTML = "0";
        }
    }

})

E3.addEventListener("click",function(){
    if (SE3 == 0){
        ez = prompt("Anna numero");
        if ( ez == ""){
            ez = 0;
        }
    }
    e1z = ez;
    e1z = parseInt(e1z);

    for (let i = 0; i < 10; i++){
        if ( e1z === i){
            ilmotukset.innerHTML = " "
            E3.innerHTML = ez;
            console.log("muokattu E1");
            console.log(ez);
            riviCheckC();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E3.innerHTML = "0";
        }
    }

})

F3.addEventListener("click",function(){
    if (SF3 == 0){
        fz = prompt("Anna numero");
        if ( fz == ""){
            fz = 0;
        }
    }
    f1z = fz;
    f1z = parseInt(f1z);
    for (let i = 0; i < 10; i++){
        if ( f1z === i){
            ilmotukset.innerHTML = " "
            F3.innerHTML = fz;
            console.log("muokattu F1");
            console.log(fz);
            riviCheckC();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F3.innerHTML = "0";
        }
    }

})

G3.addEventListener("click",function(){
    if (SG3 == 0){
        gz = prompt("Anna numero");
        if ( gz == ""){
            gz = 0;
        }
    }
    g1z = gz;
    g1z = parseInt(g1z);

    for (let i = 0; i < 10; i++){
        if ( g1z === i){
            ilmotukset.innerHTML = " "
            G3.innerHTML = gz;
            console.log("muokattu G1");
            console.log(gz);
            riviCheckC();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G3.innerHTML = "0";
        }
    }

})

H3.addEventListener("click",function(){
    if (SH3 == 0){
        hz = prompt("Anna numero");
        if ( hz == ""){
            hz = 0;
        }
    }
    h1z = hz;
    h1z = parseInt(h1z);

    for (let i = 0; i < 10; i++){
        if ( h1z === i){
            ilmotukset.innerHTML = " "
            H3.innerHTML = hz;
            console.log("muokattu H1");
            console.log(hz);
            riviCheckC();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H3.innerHTML = "0";
        }
    }

})

I3.addEventListener("click",function(){
    if (SI3 == 0){
        iz = prompt("Anna numero");
        if ( iz == ""){
            iz = 0;
        }
    }
    i1z = iz;
    i1z = parseInt(i1z);

    for (let i = 0; i < 10; i++){
        if ( i1z === i){
            ilmotukset.innerHTML = " "
            I3.innerHTML = iz;
            console.log("muokattu I1");
            console.log(iz);
            riviCheckC();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I3.innerHTML = "0";
        }
    }

})

//neljäs jono -------------------------


A4.addEventListener("click",function(){
    if (SA4 == 0){
        ap = prompt("Anna numero");
        if ( ap == ""){
            ap = 0;
        }
    }
    a1p = ap;
    a1p = parseInt(a1p);

    for (let i = 0; i < 10; i++){
        if ( a1p === i){
            ilmotukset.innerHTML = " "
            A4.innerHTML = ap;
            console.log("muokattu A1");
            console.log(a1p);
            riviCheckD();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A4.innerHTML = "0";
        }
    }

})

B4.addEventListener("click",function(){
    if (SB4 == 0){
        bp = prompt("Anna numero");
        if ( bp == ""){
            bp = 0;
        }
    }
    b1p = bp;
    b1p = parseInt(b1p);

    for (let i = 0; i < 10; i++){
        if ( b1p === i){
            ilmotukset.innerHTML = " "
            B4.innerHTML = bp;
            console.log("muokattu B1");
            console.log(b1p);
            riviCheckD();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B4.innerHTML = "0";
        }
    }

})

C4.addEventListener("click",function(){
    if (SC4 == 0){
        cp = prompt("Anna numero");
        if ( cp == ""){
            cp = 0;
        }
    }
    c1p = cp;
    c1p = parseInt(c1p);

    for (let i = 0; i < 10; i++){
        if ( c1p === i){
            ilmotukset.innerHTML = " "
            C4.innerHTML = cp;
            console.log("muokattu C1");
            console.log(c1p);
            riviCheckD();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C4.innerHTML = "0";
        }
    }

})

D4.addEventListener("click",function(){
    if (SD4 == 0){
        dp = prompt("Anna numero");
        if ( dp == ""){
            dp = 0;
        }
    }
    d1p = dp;
    d1p = parseInt(d1p);

    for (let i = 0; i < 10; i++){
        if ( d1p === i){
            ilmotukset.innerHTML = " "
            D4.innerHTML = dp;
            console.log("muokattu D1");
            console.log(dp);
            riviCheckD();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D4.innerHTML = "0";
        }
    }

})

E4.addEventListener("click",function(){
    if (SE4 == 0){
        ep = prompt("Anna numero");
        if ( ep == ""){
            ep = 0;
        }
    }
    e1p = ep;
    e1p = parseInt(e1p);

    for (let i = 0; i < 10; i++){
        if ( e1p === i){
            ilmotukset.innerHTML = " "
            E4.innerHTML = ep;
            console.log("muokattu E1");
            console.log(ep);
            riviCheckD();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E4.innerHTML = "0";
        }
    }

})

F4.addEventListener("click",function(){
    if (SF4 == 0){
        fp = prompt("Anna numero");
        if ( fp == ""){
            fp = 0;
        }
    }
    f1p = fp;
    f1p = parseInt(f1p);

    for (let i = 0; i < 10; i++){
        if ( f1p === i){
            ilmotukset.innerHTML = " "
            F4.innerHTML = fp;
            console.log("muokattu F1");
            console.log(fp);
            riviCheckD();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F4.innerHTML = "0";
        }
    }

})

G4.addEventListener("click",function(){
    if (SG4 == 0){
        gp = prompt("Anna numero");
        if ( gp == ""){
            gp = 0;
        }
    }
    g1p = gp;
    g1p = parseInt(g1p);

    for (let i = 0; i < 10; i++){
        if ( g1p === i){
            ilmotukset.innerHTML = " "
            G4.innerHTML = gp;
            console.log("muokattu G1");
            console.log(gp);
            riviCheckD();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G4.innerHTML = "0";
        }
    }

})

H4.addEventListener("click",function(){
    if (SH4 == 0){
        hp = prompt("Anna numero");
        if ( hp == ""){
            hp = 0;
        }
    }
    h1p = hp;
    h1p = parseInt(h1p);

    for (let i = 0; i < 10; i++){
        if ( h1p === i){
            ilmotukset.innerHTML = " "
            H4.innerHTML = hp;
            console.log("muokattu H1");
            console.log(hp);
            riviCheckD();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H4.innerHTML = "0";
        }
    }

})

I4.addEventListener("click",function(){
    if (SI4 == 0){
        ip = prompt("Anna numero");
        if ( ip == ""){
            ip = 0;
        }
    }
    i1p = ip;
    i1p = parseInt(i1p);    

    for (let i = 0; i < 10; i++){
        if ( i1p === i){
            ilmotukset.innerHTML = " "
            I4.innerHTML = ip;
            console.log("muokattu I1");
            console.log(ip);
            riviCheckD();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I4.innerHTML = "0";
        }
    }

})

// Viides jono-------------------

A5.addEventListener("click",function(){
    if (SA5 == 0){
        ao = prompt("Anna numero");
        if ( ao == ""){
            ao = 0;
        }
    }
    a1o = ao;
    a1o = parseInt(a1o);

    for (let i = 0; i < 10; i++){
        if ( a1o === i){
            ilmotukset.innerHTML = " "
            A5.innerHTML = ao;
            console.log("muokattu A1");
            console.log(a1o);
            riviCheckE();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A5.innerHTML = "0";
        }
    }

})

B5.addEventListener("click",function(){
    if (SB5 == 0){
        bo = prompt("Anna numero");
        if ( bo == ""){
            bo = 0;
        }
    }
    b1o = bo;
    b1o = parseInt(b1o);

    for (let i = 0; i < 10; i++){
        if ( b1o === i){
            ilmotukset.innerHTML = " "
            B5.innerHTML = bo;
            console.log("muokattu B1");
            console.log(b1o);
            riviCheckE();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B5.innerHTML = "0";
        }
    }

})

C5.addEventListener("click",function(){
    if (SC5 == 0){
        co = prompt("Anna numero");
        if ( co == ""){
            co = 0;
        }
    }
    c1o = co;
    c1o = parseInt(c1o);

    for (let i = 0; i < 10; i++){
        if ( c1o === i){
            ilmotukset.innerHTML = " "
            C5.innerHTML = co;
            console.log("muokattu C1");
            console.log(c1o);
            riviCheckE();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C5.innerHTML = "0";
        }
    }

})

D5.addEventListener("click",function(){
    if (SD5 == 0){
        doo = prompt("Anna numero");
        if ( doo == ""){
            doo = 0;
        }
    }
    d1oo = doo;
    d1oo = parseInt(d1oo);

    for (let i = 0; i < 10; i++){
        if ( d1oo === i){
            ilmotukset.innerHTML = " "
            D5.innerHTML = doo;
            console.log("muokattu D1");
            console.log(doo);
            riviCheckE();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D5.innerHTML = "0";
        }
    }

})

E5.addEventListener("click",function(){
    if (SE5 == 0){
        eo = prompt("Anna numero");
        if ( eo == ""){
            eo = 0;
        }
    }
    e1o = eo;
    e1o = parseInt(e1o);

    for (let i = 0; i < 10; i++){
        if ( e1o === i){
            ilmotukset.innerHTML = " "
            E5.innerHTML = eo;
            console.log("muokattu E1");
            console.log(eo);
            riviCheckE();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E5.innerHTML = "0";
        }
    }

})

F5.addEventListener("click",function(){
    if (SF5 == 0){
        fo = prompt("Anna numero");
        if ( fo == ""){
            fo = 0;
        }
    }
    f1o = fo;
    f1o = parseInt(f1o);

    for (let i = 0; i < 10; i++){
        if ( f1o === i){
            ilmotukset.innerHTML = " "
            F5.innerHTML = fo;
            console.log("muokattu F1");
            console.log(fo);
            riviCheckE();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F5.innerHTML = "0";
        }
    }

})

G5.addEventListener("click",function(){
    if (SG5 == 0){
        go = prompt("Anna numero");
        if ( go == ""){
            go = 0;
        }
    }
    g1o = go;
    g1o = parseInt(g1o);

    for (let i = 0; i < 10; i++){
        if ( g1o === i){
            ilmotukset.innerHTML = " "
            G5.innerHTML = go;
            console.log("muokattu G1");
            console.log(go);
            riviCheckE();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G5.innerHTML = "0";
        }
    }

})

H5.addEventListener("click",function(){
    if (SH5 == 0){
        ho = prompt("Anna numero");
        if ( ho == ""){
            ho = 0;
        }
    }
    h1o = ho;
    h1o = parseInt(h1o);

    for (let i = 0; i < 10; i++){
        if ( h1o === i){
            ilmotukset.innerHTML = " "
            H5.innerHTML = ho;
            console.log("muokattu H1");
            console.log(ho);
            riviCheckE();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H5.innerHTML = "0";
        }
    }

})

I5.addEventListener("click",function(){
    if (SI5 == 0){
        io = prompt("Anna numero");
        if ( io == ""){
            io = 0;
        }
    }
    i1o = io;
    i1o = parseInt(i1o);

    for (let i = 0; i < 10; i++){
        if ( i1o === i){
            ilmotukset.innerHTML = " "
            I5.innerHTML = io;
            console.log("muokattu I1");
            console.log(io);
            riviCheckE();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I5.innerHTML = "0";
        }
    }

})


// kuudes jono ---------

A6.addEventListener("click",function(){
    if (SA6 == 0){
        at = prompt("Anna numero");
        if ( at == ""){
            at = 0;
        }
    }
    a1t = at;
    a1t = parseInt(a1t);

    for (let i = 0; i < 10; i++){
        if ( a1t === i){
            ilmotukset.innerHTML = " "
            A6.innerHTML = at;
            console.log("muokattu A1");
            console.log(a1t);
            riviCheckF();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A6.innerHTML = "0";
        }
    }

})

B6.addEventListener("click",function(){
    if (SB6 == 0){
        bt = prompt("Anna numero");
        if ( bt == ""){
            bt = 0;
        }
    }
    b1t = bt;
    b1t = parseInt(b1t);

    for (let i = 0; i < 10; i++){
        if ( b1t === i){
            ilmotukset.innerHTML = " "
            B6.innerHTML = bt;
            console.log("muokattu B1");
            console.log(b1t);
            riviCheckF();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B6.innerHTML = "0";
        }
    }

})

C6.addEventListener("click",function(){
    if (SC6 == 0){
        ct = prompt("Anna numero");
        if ( ct == ""){
            ct = 0;
        }
    }
    c1t = ct;
    c1t = parseInt(c1t);

    for (let i = 0; i < 10; i++){
        if ( c1t === i){
            ilmotukset.innerHTML = " "
            C6.innerHTML = ct;
            console.log("muokattu C1");
            console.log(c1t);
            riviCheckF();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C6.innerHTML = "0";
        }
    }

})

D6.addEventListener("click",function(){
    if (SD6 == 0){
        dt = prompt("Anna numero");
        if ( dt == ""){
            dt = 0;
        }
    }
    d1t = dt;
    d1t = parseInt(d1t);

    for (let i = 0; i < 10; i++){
        if ( d1t === i){
            ilmotukset.innerHTML = " "
            D6.innerHTML = dt;
            console.log("muokattu D1");
            console.log(dt);
            riviCheckF();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D6.innerHTML = "0";
        }
    }

})

E6.addEventListener("click",function(){
    if (SE6 == 0){
        et = prompt("Anna numero");
        if ( et == ""){
            et = 0;
        }
    }
    e1t = et;
    e1t = parseInt(e1t);

    for (let i = 0; i < 10; i++){
        if ( e1t === i){
            ilmotukset.innerHTML = " "
            E6.innerHTML = et;
            console.log("muokattu E1");
            console.log(et);
            riviCheckF();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E6.innerHTML = "0";
        }
    }

})

F6.addEventListener("click",function(){
    if (SF6 == 0){
        ft = prompt("Anna numero");
        if ( ft == ""){
            ft = 0;
        }
    }
    f1t = ft;
    f1t = parseInt(f1t);

    for (let i = 0; i < 10; i++){
        if ( f1t === i){
            ilmotukset.innerHTML = " "
            F6.innerHTML = ft;
            console.log("muokattu F1");
            console.log(ft);
            riviCheckF();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F6.innerHTML = "0";
        }
    }

})

G6.addEventListener("click",function(){
    if (SG6 == 0){
        gt = prompt("Anna numero");
        if ( gt == ""){
            gt = 0;
        }
    }
    g1t = gt;
    g1t = parseInt(g1t);

    for (let i = 0; i < 10; i++){
        if ( g1t === i){
            ilmotukset.innerHTML = " "
            G6.innerHTML = gt;
            console.log("muokattu G1");
            console.log(gt);
            riviCheckF();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G6.innerHTML = "0";
        }
    }

})

H6.addEventListener("click",function(){
    if (SH6 == 0){
        ht = prompt("Anna numero");
        if ( ht == ""){
            ht = 0;
        }
    }
    h1t = ht;
    h1t = parseInt(h1t);

    for (let i = 0; i < 10; i++){
        if ( h1t === i){
            ilmotukset.innerHTML = " "
            H6.innerHTML = ht;
            console.log("muokattu H1");
            console.log(ht);
            riviCheckF();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H6.innerHTML = "0";
        }
    }

})

I6.addEventListener("click",function(){
    if (SI6 == 0){
        it = prompt("Anna numero");
        if ( it == ""){
            it = 0;
        }
    }
    i1t = it;
    i1t = parseInt(i1t);

    for (let i = 0; i < 10; i++){
        if ( i1t === i){
            ilmotukset.innerHTML = " "
            I6.innerHTML = it;
            console.log("muokattu I1");
            console.log(it);
            riviCheckF();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I6.innerHTML = "0";
        }
    }

})

// Seitsemäs jono --------

A7.addEventListener("click",function(){
    if (SA7 == 0){
        ar = prompt("Anna numero");
        if ( ar == ""){
            ar = 0;
        }
    }
    a1r = ar;
    a1r = parseInt(a1r);

    for (let i = 0; i < 10; i++){
        if ( a1r === i){
            ilmotukset.innerHTML = " "
            A7.innerHTML = ar;
            console.log("muokattu A1");
            console.log(a1r);
            riviCheckG();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A7.innerHTML = "0";
        }
    }

})

B7.addEventListener("click",function(){
    if (SB7 == 0){
        br = prompt("Anna numero");
        if ( br == ""){
            br = 0;
        }
    }
    b1r = br;
    b1r = parseInt(b1r);

    for (let i = 0; i < 10; i++){
        if ( b1r === i){
            ilmotukset.innerHTML = " "
            B7.innerHTML = br;
            console.log("muokattu B1");
            console.log(b1r);
            riviCheckG();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B7.innerHTML = "0";
        }
    }

})

C7.addEventListener("click",function(){
    if (SC7 == 0){
        cr = prompt("Anna numero");
        if ( cr == ""){
            cr = 0;
        }
    }
    c1r = cr;
    c1r = parseInt(c1r);

    for (let i = 0; i < 10; i++){
        if ( c1r === i){
            ilmotukset.innerHTML = " "
            C7.innerHTML = cr;
            console.log("muokattu C1");
            console.log(c1r);
            riviCheckG();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C7.innerHTML = "0";
        }
    }

})

D7.addEventListener("click",function(){
    if (SD7 == 0){
        dr = prompt("Anna numero");
        if ( dr == ""){
            dr = 0;
        }
    }
    d1r = dr;
    d1r = parseInt(d1r);

    for (let i = 0; i < 10; i++){
        if ( d1r === i){
            ilmotukset.innerHTML = " "
            D7.innerHTML = dr;
            console.log("muokattu D1");
            console.log(dr);
            riviCheckG();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D7.innerHTML = "0";
        }
    }

})

E7.addEventListener("click",function(){
    if (SE7 == 0){
        er = prompt("Anna numero");
        if ( er == ""){
            er = 0;
        }
    }
    e1r = er;
    e1r = parseInt(e1r);

    for (let i = 0; i < 10; i++){
        if ( e1r === i){
            ilmotukset.innerHTML = " "
            E7.innerHTML = er;
            console.log("muokattu E1");
            console.log(er);
            riviCheckG();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E7.innerHTML = "0";
        }
    }

})

F7.addEventListener("click",function(){
    if (SF7 == 0){
        fr = prompt("Anna numero");
        if ( fr == ""){
            fr = 0;
        }
    }
    f1r = fr;
    f1r = parseInt(f1r);

    for (let i = 0; i < 10; i++){
        if ( f1r === i){
            ilmotukset.innerHTML = " "
            F7.innerHTML = fr;
            console.log("muokattu F1");
            console.log(fr);
            riviCheckG();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F7.innerHTML = "0";
        }
    }

})

G7.addEventListener("click",function(){
    if (SG7 == 0){
        gr = prompt("Anna numero");
        if ( gr == ""){
            gr = 0;
        }
    }
    g1r = gr;
    g1r = parseInt(g1r);

    for (let i = 0; i < 10; i++){
        if ( g1r === i){
            ilmotukset.innerHTML = " "
            G7.innerHTML = gr;
            console.log("muokattu G1");
            console.log(gr);
            riviCheckG();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G7.innerHTML = "0";
        }
    }

})

H7.addEventListener("click",function(){
    if (SH7 == 0){
        hr = prompt("Anna numero");
        if ( hr == ""){
            hr = 0;
        }
    }
    h1r = hr;
    h1r = parseInt(h1r);

    for (let i = 0; i < 10; i++){
        if ( h1r === i){
            ilmotukset.innerHTML = " "
            H7.innerHTML = hr;
            console.log("muokattu H1");
            console.log(hr);
            riviCheckG();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H7.innerHTML = "0";
        }
    }

})

I7.addEventListener("click",function(){
    if (SI7 == 0){
        ir = prompt("Anna numero");
        if ( ir == ""){
            ir = 0;
        }
    }
    i1r = ir;
    i1r = parseInt(i1r);

    for (let i = 0; i < 10; i++){
        if ( i1r === i){
            ilmotukset.innerHTML = " "
            I7.innerHTML = ir;
            console.log("muokattu I1");
            console.log(ir);
            riviCheckG();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I7.innerHTML = "0";
        }
    }

})


// Kahdeksas jono --------------

A8.addEventListener("click",function(){
    if (SA8 == 0){
        au = prompt("Anna numero");
        if ( au == ""){
            au = 0;
        }
    }
    a1u = au;
    a1u = parseInt(a1u);
    for (let i = 0; i < 10; i++){
        if ( a1u === i){
            ilmotukset.innerHTML = " "
            A8.innerHTML = au;
            console.log("muokattu A1");
            console.log(a1u);
            riviCheckH();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A8.innerHTML = "0";
        }
    }

})

B8.addEventListener("click",function(){
    if (SB7 == 0){
        bu = prompt("Anna numero");
        if ( bu == ""){
            bu = 0;
        }
    }
    b1u = bu;
    b1u = parseInt(b1u);

    for (let i = 0; i < 10; i++){
        if ( b1u === i){
            ilmotukset.innerHTML = " "
            B8.innerHTML = bu;
            console.log("muokattu B1");
            console.log(b1u);
            riviCheckH();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B8.innerHTML = "0";
        }
    }

})

C8.addEventListener("click",function(){
    if (SC8 == 0){
        cu = prompt("Anna numero");
        if ( cu == ""){
            cu = 0;
        }
    }
    c1u = cu;
    c1u = parseInt(c1u);

    for (let i = 0; i < 10; i++){
        if ( c1u === i){
            ilmotukset.innerHTML = " "
            C8.innerHTML = cu;
            console.log("muokattu C1");
            console.log(c1u);
            riviCheckH();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C8.innerHTML = "0";
        }
    }

})

D8.addEventListener("click",function(){
    if (SD8 == 0){
        du = prompt("Anna numero");
        if ( du == ""){
            du = 0;
        }
    }
    d1u = du;
    d1u = parseInt(d1u);

    for (let i = 0; i < 10; i++){
        if ( d1u === i){
            ilmotukset.innerHTML = " "
            D8.innerHTML = du;
            console.log("muokattu D1");
            console.log(du);
            riviCheckH();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D8.innerHTML = "0";
        }
    }

})

E8.addEventListener("click",function(){
    if (SE8 == 0){
        eu = prompt("Anna numero");
        if ( eu == ""){
            eu = 0;
        }
    }
    e1u = eu;
    e1u = parseInt(e1u);

    for (let i = 0; i < 10; i++){
        if ( e1u === i){
            ilmotukset.innerHTML = " "
            E8.innerHTML = eu;
            console.log("muokattu E1");
            console.log(eu);
            riviCheckH();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E8.innerHTML = "0";
        }
    }

})

F8.addEventListener("click",function(){
    if (SF8 == 0){
        fu = prompt("Anna numero");
        if ( fu == ""){
            fu = 0;
        }
    }
    f1u = fu;
    f1u = parseInt(f1u);

    for (let i = 0; i < 10; i++){
        if ( f1u === i){
            ilmotukset.innerHTML = " "
            F8.innerHTML = fu;
            console.log("muokattu F1");
            console.log(fu);
            riviCheckH();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F8.innerHTML = "0";
        }
    }

})

G8.addEventListener("click",function(){
    if (SG8 == 0){
        gu = prompt("Anna numero");
        if ( gu == ""){
            gu = 0;
        }
    }
    g1u = gu;
    g1u = parseInt(g1u);

    for (let i = 0; i < 10; i++){
        if ( g1u === i){
            ilmotukset.innerHTML = " "
            G8.innerHTML = gu;
            console.log("muokattu G1");
            console.log(gu);
            riviCheckH();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G8.innerHTML = "0";
        }
    }

})

H8.addEventListener("click",function(){
    if (SH8 == 0){
        hu = prompt("Anna numero");
        if ( hu == ""){
            hu = 0;
        }
    }
    h1u = hu;
    h1u = parseInt(h1u);

    for (let i = 0; i < 10; i++){
        if ( h1u === i){
            ilmotukset.innerHTML = " "
            H8.innerHTML = hu;
            console.log("muokattu H1");
            console.log(hu);
            riviCheckH();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H8.innerHTML = "0";
        }
    }

})

I8.addEventListener("click",function(){
    if (SI8 == 0){
        iu = prompt("Anna numero");
        if ( iu == ""){
            iu = 0;
        }
    }
    i1u = iu;
    i1u = parseInt(i1u);

    for (let i = 0; i < 10; i++){
        if ( i1u === i){
            ilmotukset.innerHTML = " "
            I8.innerHTML = iu;
            console.log("muokattu I1");
            console.log(iu);
            riviCheckH();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I8.innerHTML = "0";
        }
    }

})


// yhdeksäs jono --------------


A9.addEventListener("click",function(){
    if (SA9 == 0){
        al = prompt("Anna numero");
        if ( al == ""){
            al = 0;
        }
    }
    a1l = al;
    a1l = parseInt(a1l);

    for (let i = 0; i < 10; i++){
        if ( a1l === i){
            ilmotukset.innerHTML = " "
            A9.innerHTML = al;
            console.log("muokattu A1");
            console.log(a1l);
            riviCheckI();
            riviCheckAA();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        A9.innerHTML = "0";
        }
    }

})

B9.addEventListener("click",function(){
    if (SB9 == 0){
        bl = prompt("Anna numero");
        if ( bl == ""){
            bl = 0;
        }
    }
    b1l = bl;
    b1l = parseInt(b1l);

    for (let i = 0; i < 10; i++){
        if ( b1l === i){
            ilmotukset.innerHTML = " "
            B9.innerHTML = bl;
            console.log("muokattu B1");
            console.log(b1l);
            riviCheckI();
            riviCheckBB();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        B9.innerHTML = "0";
        }
    }

})

C9.addEventListener("click",function(){
    if (SC9 == 0){
        cl = prompt("Anna numero");
        if ( cl == ""){
            cl = 0;
        }
    }
    c1l = cl;
    c1l = parseInt(c1l);

    for (let i = 0; i < 10; i++){
        if ( c1l === i){
            ilmotukset.innerHTML = " "
            C9.innerHTML = cl;
            console.log("muokattu C1");
            console.log(c1l);
            riviCheckI();
            riviCheckCC();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        C9.innerHTML = "0";
        }
    }

})

D9.addEventListener("click",function(){
    if (SD9 == 0){
        dl = prompt("Anna numero");
        if ( dl == ""){
            dl = 0;
        }
    }
    d1l = dl;
    d1l = parseInt(d1l);

    for (let i = 0; i < 10; i++){
        if ( d1l === i){
            ilmotukset.innerHTML = " "
            D9.innerHTML = dl;
            console.log("muokattu D1");
            console.log(dl);
            riviCheckI();
            riviCheckDD();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        D9.innerHTML = "0";
        }
    }

})

E9.addEventListener("click",function(){
    if (SE9 == 0){
        el = prompt("Anna numero");
        if ( el == ""){
            el = 0;
        }
    }
    e1l = el;
    e1l = parseInt(e1l);

    for (let i = 0; i < 10; i++){
        if ( e1l === i){
            ilmotukset.innerHTML = " "
            E9.innerHTML = el;
            console.log("muokattu E1");
            console.log(el);
            riviCheckI();
            riviCheckEE();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        E9.innerHTML = "0";
        }
    }

})

F9.addEventListener("click",function(){
    if (SF9 == 0){
        fl = prompt("Anna numero");
        if ( fl == ""){
            fl = 0;
        }
    }
    f1l = fl;
    f1l = parseInt(f1l);

    for (let i = 0; i < 10; i++){
        if ( f1l === i){
            ilmotukset.innerHTML = " "
            F9.innerHTML = fl;
            console.log("muokattu F1");
            console.log(fl);
            riviCheckI();
            riviCheckFF();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        F9.innerHTML = "0";
        }
    }

})

G9.addEventListener("click",function(){
    if (SG9 == 0){
        gl = prompt("Anna numero");
        if ( gl == ""){
            gl = 0;
        }
    }
    g1l = gl;
    g1l = parseInt(g1l);

    for (let i = 0; i < 10; i++){
        if ( g1l === i){
            ilmotukset.innerHTML = " "
            G9.innerHTML = gl;
            console.log("muokattu G1");
            console.log(gl);
            riviCheckI();
            riviCheckGG();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        G9.innerHTML = "0";
        }
    }

})

H9.addEventListener("click",function(){
    if (SH9 == 0){
        hl = prompt("Anna numero");
        if ( hl == ""){
            hl = 0;
        }
    }
    h1l = hl;
    h1l = parseInt(h1l);

    for (let i = 0; i < 10; i++){
        if ( h1l === i){
            ilmotukset.innerHTML = " "
            H9.innerHTML = hl;
            console.log("muokattu H1");
            console.log(hl);
            riviCheckI();
            riviCheckHH();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        H9.innerHTML = "0";
        }
    }

})

I9.addEventListener("click",function(){
    if (SI9 == 0){
        il = prompt("Anna numero");
        if ( il == ""){
            il = 0;
        }
    }
    i1l = il;
    i1l = parseInt(i1l);

    for (let i = 0; i < 10; i++){
        if ( i1l === i){
            ilmotukset.innerHTML = " "
            I9.innerHTML = il;
            console.log("muokattu I1");
            console.log(il);
            riviCheckI();
            riviCheckII();
            break
            }
        else {
        ilmotukset.innerHTML = " Annappa numero 0-9 ";
        I9.innerHTML = "0";
        }
    }

})


// ----------------------------------------------------------------------

//startclick
openGame.addEventListener("click", function(){
    startGame(GameBoard, startbox);
})

Easybox.addEventListener("click", function() {
    starteasy(GameBoard, startbox);

})

Mediumbox.addEventListener("click", function(){
    startmedium(GameBoard,startbox);
})

Hardbox.addEventListener("click",function(){
    starthard();
})

//-----------------------AIKA-----------------------------------

var sec = 0;
function pad ( val ) { return val > 9 ? val : "0" + val; }
setInterval( function(){
    document.getElementById("seconds").innerHTML=pad(++sec%60);
    document.getElementById("minutes").innerHTML=pad(parseInt(sec/60,10));
}, 1000);


//--------------------------------------------------------------



//FUNCTIONS

//opens
function startGame(){
    GameBoard.style.display = "flex";
    ilmobox.style.display = "flex"
    startbox.style.display = "none";
    Easybox.style.display = "none";
}

function starteasy() {
    Easybox.style.display = "none";
    Mediumbox.style.display = "none";
    Hardbox.style.display = "none";
    GameBoard.style.display = "flex";
    ilmobox.style.display = "flex"
    startbox.style.display = "none";
    easyrandomaaja();
}

function startmedium() {
    Easybox.style.display = "none";
    Mediumbox.style.display = "none";
    Hardbox.style.display = "none";
    GameBoard.style.display = "flex";
    ilmobox.style.display = "flex"
    startbox.style.display = "none";
    mediumrandomaaja();
}

function starthard() {
    Easybox.style.display = "none";
    Mediumbox.style.display = "none";
    Hardbox.style.display = "none";
    GameBoard.style.display = "flex";
    ilmobox.style.display = "flex"
    startbox.style.display = "none";
    hardrandomaaja();
}




// rivicheck funktiot jokaselle jonolle -------------------------------------------

function riviCheckA(riviSummaA) {
    riviSummaA = a1x + b1x + c1x + d1x + e1x + f1x + g1x + h1x + i1x;
    console.log(riviSummaA);
    if (riviSummaA === 45){
        J1.innerHTML = ("O");
        console.log("Oikein");
        colorchangeA();
    }
    else {
        J1.innerHTML = ("X");
        console.log("Väärin");
        colorchangeAX();
    }
}

function riviCheckB(riviSummaB) {
    riviSummaB = a1y + b1y + c1y + d1y + e1y + f1y + g1y + h1y + i1y;
    console.log(riviSummaB);
    if (riviSummaB === 45){
        J2.innerHTML = ("O");
        console.log("Oikein");
        colorchangeB();
    }
    else {
        J2.innerHTML = ("X");
        console.log("Väärin");
        colorchangeBX();
    }
}

function riviCheckC(riviSummaC) {
    riviSummaC = a1z + b1z + c1z + d1z + e1z + f1z + g1z + h1z + i1z;
    console.log(riviSummaC);
    if (riviSummaC === 45){
        J3.innerHTML = ("O");
        console.log("Oikein");
        colorchangeC();
    }
    else {
        J3.innerHTML = ("X");
        console.log("Väärin");
        colorchangeCX();
    }
}

function riviCheckD(riviSummaD) {
    riviSummaD = a1p + b1p + c1p + d1p + e1p + f1p + g1p + h1p + i1p;
    console.log(riviSummaD);
    if (riviSummaD === 45){
        J4.innerHTML = ("O");
        console.log("Oikein");
        colorchangeD();
    }
    else {
        J4.innerHTML = ("X");
        console.log("Väärin");
        colorchangeDX();
    }
}

function riviCheckE(riviSummaE) {
    riviSummaE = a1o + b1o + c1o + d1oo + e1o + f1o + g1o + h1o + i1o;
    console.log(riviSummaE);
    if (riviSummaE === 45){
        J5.innerHTML = ("O");
        console.log("Oikein");
        colorchangeE();
    }
    else {
        J5.innerHTML = ("X");
        console.log("Väärin");
        colorchangeEX();
    }
}

function riviCheckF(riviSummaF) {
    riviSummaF = a1t + b1t + c1t + d1t + e1t + f1t + g1t + h1t + i1t;
    console.log(riviSummaF);
    if (riviSummaF === 45){
        J6.innerHTML = ("O");
        console.log("Oikein");
        colorchangeF();
    }
    else {
        J6.innerHTML = ("X");
        console.log("Väärin");
        colorchangeFX();
    }
}

function riviCheckG(riviSummaG) {
    riviSummaG = a1r + b1r + c1r + d1r + e1r + f1r + g1r + h1r + i1r;
    console.log(riviSummaG);
    if (riviSummaG === 45){
        J7.innerHTML = ("O");
        console.log("Oikein");
        colorchangeG();
    }
    else {
        J7.innerHTML = ("X");
        console.log("Väärin");
        colorchangeGX();
    }
}

function riviCheckH(riviSummaH) {
    riviSummaH = a1u + b1u + c1u + d1u + e1u + f1u + g1u + h1u + i1u;
    console.log(riviSummaH);
    if (riviSummaH === 45){
        J8.innerHTML = ("O");
        console.log("Oikein");
        colorchangeH();
    }
    else {
        J8.innerHTML = ("X");
        console.log("Väärin");
        colorchangeHX();
    }
}

function riviCheckI(riviSummaI) {
    riviSummaI = a1l + b1l + c1l + d1l + e1l + f1l + g1l + h1l + i1l;
    console.log(riviSummaI);
    if (riviSummaI === 45){
        J9.innerHTML = ("O");
        console.log("Oikein");
        colorchangeI();
    }
    else {
        J9.innerHTML = ("X");
        console.log("Väärin");
        colorchangeIX();
    }
}


// Rivichecks-------------------------------------------

function riviCheckAA(riviSummaAA) {
    riviSummaAA =a1x + a1y + a1z + a1p + a1o + a1t + a1r + a1u + a1l;
    console.log(riviSummaAA);
    if (riviSummaAA === 45){
        A0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeAA();
    }
    else {
        A0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeAAX();
    }
}

function riviCheckBB(riviSummaBB) {
    riviSummaBB = b1x + b1y + b1z + b1p + b1o + b1t + b1r + b1u + b1l;
    console.log(riviSummaBB);
    if (riviSummaBB === 45){
        B0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeBB();
    }
    else {
        B0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeBBX();
    }
}

function riviCheckCC(riviSummaCC) {
    riviSummaCC = c1x+c1y+c1z+c1p+c1o+c1t+c1r+c1u+c1l;
    console.log(riviSummaCC);
    if (riviSummaCC === 45){
        C0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeCC();
    }
    else {
        C0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeCCX();
    }
}

function riviCheckDD(riviSummaDD) {
    riviSummaDD = d1x+d1y+d1z+d1p+d1oo+d1t+d1r+d1u+d1l;
    console.log(riviSummaDD);
    if (riviSummaDD=== 45){
        D0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeDD();
    }
    else {
        D0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeDDX();
    }
}

function riviCheckEE(riviSummaEE) {
    riviSummaEE = e1x+e1y+e1z+e1p+e1o+e1t+e1r+e1u+e1l;
    console.log(riviSummaEE);
    if (riviSummaEE === 45){
        E0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeEE();
    }
    else {
        E0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeEEX();
    }
}

function riviCheckFF(riviSummaFF) {
    riviSummaFF = f1x+f1y+f1z+f1p+f1o+f1t+f1r+f1u+f1l;
    console.log(riviSummaFF);
    if (riviSummaFF === 45){
        F0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeFF();
    }
    else {
        F0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeFFX();
    }
}

function riviCheckGG(riviSummaGG) {
    riviSummaGG = g1x+g1y+g1z+g1p+g1o+g1t+g1r+g1u+g1l;
    console.log(riviSummaGG);
    if (riviSummaGG === 45){
        G0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeGG();
    }
    else {
        G0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeGGX();
    }
}

function riviCheckHH(riviSummaHH) {
    riviSummaHH = h1x+h1y+h1z+h1p+h1o+h1t+h1r+h1u+h1l;
    console.log(riviSummaHH);
    if (riviSummaHH === 45){
        H0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeHH();
    }
    else {
        H0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeHHX();
    }
}

function riviCheckII(riviSummaII) {
    riviSummaII = i1x+i1y+i1z+i1p+i1o+i1t+i1r+i1u+i1l;
    console.log(riviSummaII);
    if (riviSummaII === 45){
        I0.innerHTML = ("O");
        console.log("Oikein");
        colorchangeII();
    }
    else {
        I0.innerHTML = ("X");
        console.log("Väärin");
        colorchangeIIX();
    }
}


//------------------------------------------------------------------
function colorchangeA() {
    testiA.style.background = "green";
}

function colorchangeAX() {
    testiA.style.background = "red";
}

function colorchangeB() {
    testiB.style.background = "green";
}

function colorchangeBX() {
    testiB.style.background = "red";
}

function colorchangeC() {
    testiC.style.background = "green";
}

function colorchangeCX() {
    testiC.style.background = "red";
}

function colorchangeD() {
    testiD.style.background = "green";
}

function colorchangeDX() {
    testiD.style.background = "red";
}

function colorchangeE() {
    testiE.style.background = "green";
}

function colorchangeEX() {
    testiE.style.background = "red";
}

function colorchangeF() {
    testiF.style.background = "green";
}

function colorchangeFX() {
    testiF.style.background = "red";
}

function colorchangeG() {
    testiG.style.background = "green";
}

function colorchangeGX() {
    testiG.style.background = "red";
}

function colorchangeH() {
    testiH.style.background = "green";
}

function colorchangeHX() {
    testiH.style.background = "red";
}

function colorchangeI() {
    testiI.style.background = "green";
}

function colorchangeIX() {
    testiI.style.background = "red";
}



// sivu testit --------------------------------------


function colorchangeAA() {
    testiAA.style.background = "green";
}

function colorchangeAAX() {
    testiAA.style.background = "red";
}

function colorchangeBB() {
    testiBB.style.background = "green";
}

function colorchangeBBX() {
    testiBB.style.background = "red";
}

function colorchangeCC() {
    testiCC.style.background = "green";
}

function colorchangeCCX() {
    testiCC.style.background = "red";
}

function colorchangeDD() {
    testiDD.style.background = "green";
}

function colorchangeDDX() {
    testiDD.style.background = "red";
}

function colorchangeEE() {
    testiEE.style.background = "green";
}

function colorchangeEEX() {
    testiEE.style.background = "red";
}

function colorchangeFF() {
    testiFF.style.background = "green";
}

function colorchangeFFX() {
    testiFF.style.background = "red";
}

function colorchangeGG() {
    testiGG.style.background = "green";
}

function colorchangeGGX() {
    testiGG.style.background = "red";
}

function colorchangeHH() {
    testiHH.style.background = "green";
}

function colorchangeHHX() {
    testiHH.style.background = "red";
}

function colorchangeII() {
    testiII.style.background = "green";
}

function colorchangeIIX() {
    testiII.style.background = "red";
}

//--------------------------------------------------------------------
// Voitto check


function voittocheck(){
        
    jl = al + bl + cl + dl + el + fl + gl + hl +il;
    if(jl === 810){
        ilmotukset.innerHTML = "VOITIT!"
    }
}



// ASETELMAT---------------------------------------------------------

// Helppo sudoku


function easy1() {

    console.log("Easy asetelma 1");
    // muuttujien vakiomääritelmä
    az = 6
	a1z = 6
	A3.innerHTML = 6

	ao = 8
	a1o = 8
	A5.innerHTML = 8

	at = 4
	a1t = 4
	A6.innerHTML = 4

	ar = 7
	a1r = 7
	A7.innerHTML = 7

	by = 8
	b1y = 8
	B2.innerHTML = 8

	bp = 1
	b1p = 1
	B4.innerHTML = 1

	bl = 9
	b1l = 9
	B9.innerHTML = 9

	cz = 3
	c1z = 3
	C3.innerHTML = 3

	cl = 8
	c1l = 8
	C9.innerHTML = 8

	dp = 8
	d1p = 8
	D4.innerHTML = 8

	dt = 6
	d1t = 6
	D6.innerHTML = 6

	dr = 5
	d1r = 5
	D7.innerHTML = 5

	ey = 6
	e1y = 6
	E2.innerHTML = 6

	fo = 9
	f1o = 9
	F5.innerHTML = 9

	fr = 1
	f1r = 1
	F7.innerHTML = 1

	fl = 3
	f1l = 3
	F9.innerHTML = 3

	gx = 6
	g1x = 6
	G1.innerHTML = 6

	gy = 7
	g1y = 7
	G2.innerHTML = 7

	gz = 2
	g1z = 2
	G3.innerHTML = 2

	go = 1
	g1o = 1
	G5.innerHTML = 1

	gt = 8
	g1t = 8
	G6.innerHTML = 8

	gr = 3
	g1r = 3
	G7.innerHTML = 3

	hy = 5
	h1y = 5
	H2.innerHTML = 5
	
	hz = 9
	h1z = 9
	H3.innerHTML = 9

	hp = 2
	h1p = 2
	H4.innerHTML = 2

	ht = 3
	h1t = 3
	H6.innerHTML = 3

	hu = 4
	h1u = 4
	H8.innerHTML = 4

	hl = 6
	h1l = 6
	H9.innerHTML = 6

	ix = 8
	i1x = 8
	I1.innerHTML = 8

	iz = 4
	i1z = 4
	I3.innerHTML = 4

	ip = 5
	i1p = 5
	I4.innerHTML = 5

	ir = 2
	i1r = 2
	I7.innerHTML = 2

	il = 1
	i1l = 2
	I9.innerHTML = 1

    //soliditaulukon muuttujien säätö

    SA3 = 1;
    SA5 = 1;
    SA6 = 1;
    SA7 = 1;

    SB2 = 1;
    SB4 = 1;
    SB9 = 1;

    SC3 = 1;
    SC9 = 1;

    SD4 = 1;
    SD6 = 1;
    SD7 = 1;

    SE2 = 1;

    SF5 = 1;
    SF7 = 1;
    SF9 = 1;

    SG1 = 1;
    SG2 = 1;
    SG3 = 1;
    SG5 = 1;
    SG6 = 1;
    SG7 = 1;

    SH2 = 1;
    SH3 = 1;
    SH4 = 1;
    SH6 = 1;
    SH8 = 1;
    SH9 = 1;

    SI1 = 1;
    SI3 = 1;
    SI4 = 1;
    SI7 = 1;
    SI9 = 1;
}

function easy2() {

    console.log("Easy asetelma 2");
    // Alustusmääritelmät

    A3.innerHTML = 3;
    az = 3;

    A4.innerHTML = 9;
    ap = 9;

    A6.innerHTML = 1;
    at = 1;

    A7.innerHTML = 6;
    ar = 6;
    
    A8.innerHTML = 8;
    au = 8;

    A9.innerHTML = 4;
    al = 4;

    B1.innerHTML = 4;
    bx = 4;

    B5.innerHTML = 6;
    bo = 5;

    B6.innerHTML = 2;
    bt = 2;

    C1.innerHTML = 1;
    cx = 1;

    C3.innerHTML = 8;
    cz = 8;

    C8.innerHTML = 2;
    cu = 8;

    C9.innerHTML = 7;
    cl = 7;

    D1.innerHTML = 9;
    dx = 9;

    D2.innerHTML = 7;
    dy = 7;

    D3.innerHTML = 1;
    dz = 1;

    D8.innerHTML = 3;
    du = 3;

    E1.innerHTML = 2;
    ex = 2;

    E4.innerHTML = 7;
    ep = 7;

    E8.innerHTML = 4;
    eu = 4;

    E9.innerHTML = 8;
    el = 8;
    
    F4.innerHTML = 1;
    fp = 1;

    F5.innerHTML = 3;
    fo = 3;

    F6.innerHTML = 6;
    ft = 6;

    F7.innerHTML = 2;
    fr = 2;

    G4.innerHTML = 6;
    gp = 4;

    G5.innerHTML = 8;
    go = 8;

    H2.innerHTML = 8;
    hy = 8;

    H4.innerHTML = 5;
    hp = 5;

    H7.innerHTML = 7;
    hr = 7;

    H8.innerHTML = 1;
    hu = 1;

    H9.innerHTML = 3;
    hl = 3;

    I2.innerHTML = 5;
    iy = 5;

    I3.innerHTML = 9;
    iz = 9;

    I4.innerHTML = 3;
    ip = 3;

    I6.innerHTML = 4;
    it = 4;

    I7.innerHTML = 8;
    ir = 8;




    // Solidimuuttujat

    SA3 = 1;
    SA4 = 1;
    SA6 = 1;
    SA7 = 1;
    SA8 = 1;
    SA9 = 1;

    SB1 = 1;
    SB5 = 1;
    SB6 = 1;

    SC1 = 1;
    SC3 = 1;
    SC8 = 1;
    SC9 = 1;

    SD1 = 1;
    SD2 = 1;
    SD3 = 1;
    SD8 = 1;

    SE1 = 1;
    SE4 = 1;
    SE8 = 1;
    SE9 = 1;

    SF5 = 1;
    SF6 = 1;
    SF7 = 1;

    SG4 = 1;
    SG5 = 1;

    SH2 = 1;
    SH4 = 1;
    SH7 = 1;
    SH8 = 1;
    SH9 = 1;

    SI2 = 1;
    SI3 = 1;
    SI4 = 1;
    SI6 = 1;
    SI7 = 1;
}

function easy3() {

    console.log("Easy asetelma 3");
        // Alustusmääritelmät


    // Solidimuuttujat
}

function medium1() {

    console.log("Medium asetelma 1");
    // Alustusmääritelmät

    ao = 7
    A5.innerHTML = 7

    at = 9
    A6.innerHTML = 9

    bt = 8
    B6.innerHTML = 8

    br = 2
    B7.innerHTML =2

    bu = 2
    B7.innerHTML = 2

    bl = 1
    B8.innerHTML = 1

    cp = 1
    C4.innerHTML = 1

    co = 6
    C5.innerHTML = 6

    ct = 2
    C6.innerHTML = 2

    cu = 3
    C8.innerHTML = 3

    cl = 4
    C9.innerHTML = 4

    dz = 3
    D3.innerHTML = 3

    dp = 7
    D4.innerHTML = 7

    dt = 6
    D6.innerHTML = 6

    dr = 8
    D7.innerHTML = 8

    ep = 8
    E4.innerHTML = 8

    fx = 6
    F1.innerHTML = 6

    fy = 7
    F2.innerHTML = 7

    fp = 9
    F4.innerHTML = 9

    fo = 1
    F5.innerHTML = 1

    fr = 5
    F7.innerHTML = 5

    hx = 8
    H1.innerHTML = 8

    hy = 3
    H2.innerHTML = 3

    hz = 6
    H3.innerHTML = 6


    // Solidimuuttujat

    SA5 = 1;
    SA6 = 1;
    SB6 = 1;
    SB7 = 1;
    SB8 = 1;
    SC4 = 1;
    SC5 = 1;
    SC6 = 1;
    SC8 = 1;
    SC9 = 1;
    SD3 = 1;
    SD4 = 1;
    SD6 = 1;
    SD7 = 1;
    SE4 = 1;
    SF1 = 1;
    SF2 = 1;
    SF4 = 1;
    SF5 = 1;
    SF7 = 1;
    SH1 = 1;
    SH2 = 1;
    SH3 = 1;



}

function medium2() {

    console.log("Medium asetelma 2");
    // Alustusmääritelmät

    A1.innerHTML = 2
    ax = 2

    A2.innerHTML = 3
    ay = 3

    A3.innerHTML = 8
    az = 8


    B3.innerHTML = 1
    bz = 1

    B4.innerHTML = 4
    bp = 4

    B5.innerHTML = 8
    bo = 8


    C1.innerHTML = 5
    cx = 5

    C4.innerHTML = 6
    cp = 6

    C7.innerHTML = 8
    cr = 8

    C9.innerHTML = 2
    cl = 2


    D2.innerHTML = 7
    dy = 7

    D8.innerHTML = 6
    du = 6


    E3.innerHTML = 4
    ez = 4

    E7.innerHTML = 5
    er = 5
    
    E9.innerHTML = 1
    el = 1


    F1.innerHTML = 1
    fx = 1

    F2.innerHTML = 6
    fy = 6

    F6.innerHTML = 9
    ft = 9

    F8.innerHTML  = 7
    fu = 7


    G2.innerHTML = 8
    gy = 8

    G4.innerHTML = 2
    gp = 2

    G5.innerHTML = 7
    go = 7


    H2.innerHTML = 5
    hy = 5

    H5.innerHTML = 3
    ho = 3

    H6.innerHTML = 8
    ht = 8

    H9.innerHTML = 6
    hl = 6


    I4.innerHTML = 9
    ip = 9

    I5.innerHTML = 4
    io = 4

    I7.innerHTML = 7
    ir = 7

    I9.innerHTML = 8
    il = 8




    // Solidimuuttujat

    SA1 = 1
    SA2 = 1
    SA3 = 1

    SB3 = 1
    SB4 = 1
    SB5 = 1

    SC1 = 1
    SC4 = 1
    SC7 = 1
    SC9 = 1

    SD2 = 1
    SD8 = 1

    SE3 = 1
    SE7 = 1
    SE9 = 1

    SF1 = 1
    SF2 = 1
    SF6 = 1
    SF8 = 1

    SG2 = 1
    SG4 = 1
    SG5 = 1

    SH2 = 1
    SH5 = 1
    SH6 = 1
    SH9 = 1

    SI4 = 1
    SI5 = 1
    SI7 = 1
    SI9 = 1






}

function medium3() {

    console.log("Medium asetelma 3");
        // Alustusmääritelmät


    // Solidimuuttujat

}

function hard1() {

    console.log("Hard asetelma 1");
    
    // Alustusmääritelmät

    A6.innerHTML = 7;
    at = 7;

    A9.innerHTML = 6;
    al = 6;

    B2.innerHTML = 9;
    by = 9;

    B3.innerHTML = 4;
    bz = 4;

    B5.innerHTML = 3;
    bo = 3;
    
    C6.innerHTML = 1;
    ct = 1;
    
    C7.innerHTML = 2;
    cr = 2;
    
    D1.innerHTML = 1;
    dx = 1;

    D5.innerHTML = 8;
    doo = 8;

    E6.innerHTML = 2;
    et = 2;

    E7.innerHTML = 8;
    er = 8;

    E8.innerHTML = 3;
    eu = 3;

    E9.innerHTML = 1;
    el = 1;

    F1.innerHTML = 7;
    fx = 7;

    F5.innerHTML = 1;
    fo = 1;

    F8.innerHTML = 4;
    fu = 4;

    F9.innerHTML = 9;
    fl = 9;

    G9.innerHTML = 5;
    gl = 5;

    H1.innerHTML = 5;
    hx = 5;

    H3.innerHTML = 1;
    hz = 1;

    H4.innerHTML = 9;
    hp = 9;

    H8.innerHTML = 6;
    hu = 6;

    H9.innerHTML = 3;
    hl = 3;


    // Solidimuuttujat

    SA6 = 1;
    SA9 = 1;

    SB2 = 1;
    SB3 = 1;
    SB5 = 1;

    SC6 = 1;
    SC7 = 1;
    
    SD1 = 1;
    SD5 = 1;

    SE6 = 1;
    SE7 = 1;
    SE8 = 1;
    SE9 = 1;

    SF1 = 1;
    SF5 = 1;
    SF8 = 1;
    SF9 = 1;

    SG9 = 1;

    SH1 = 1;
    SH3 = 1;
    SH4 = 1;
    SH8 = 1;
    SH9 = 1;




}

function hard2() {

    console.log("Hard asetelma 2");
        // Alustusmääritelmät


    // Solidimuuttujat

}

function hard3() {

    console.log("Hard asetelma 3");
        // Alustusmääritelmät


    // Solidimuuttujat

}

// Random funktio:
// Alussa on jo lista "easylista", joka sisältää easyastelmat.





function easyrandomaaja(){ 
    var easypick = easylist[Math.floor(Math.random()*easylist.length)]; // Tekee muuttujan , jonka arvo on sattumanvaraisesti joku "easylist", listan sisällä
    //olevista arvoista.
    console.log("Toimiiko1");
    easypick(); //tulostaa kyseisen muuttujan logiin.
}


function mediumrandomaaja(){
    var mediumpick = mediumlist[Math.floor(Math.random()*mediumlist.length)];
    console.log("Toimiiko2?");
    mediumpick(); 
}


function hardrandomaaja(){
    var hardpick = hardlist[Math.floor(Math.random()*hardlist.length)];
    console.log("Toimiiko3?");
    hardpick(); 
}


