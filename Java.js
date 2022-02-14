function validateInput(){
    let R = document.getElementById("rValue").value;
    let G = document.getElementById("gValue").value;
    let B = document.getElementById("bValue").value;

    if(isNaN(R) || isNaN(G) || isNaN(B)){
        alert("Must enter Numeric value in correct format.");
    } else{

        
        let div = document.getElementById("square");
        div.style.backgroundColor = "rgb(" + R + ", " + G + ", " + B + ")";

        R = parseInt(R);
        G = parseInt(G);
        B = parseInt(B);

        let total = R + G + B;

        let newR = (R/total).toFixed(2);
        let newG = (G/total).toFixed(2);
        let newB = (B/total).toFixed(2);

        let finalColor = document.getElementById("finalColor");

        let lum = Math.max(R, B, G);

        lum = lum / 1000;

        

        finalColor.innerHTML = "New value is: " + newR + "," + newG + "," + newB + "," + lum;

    }
}