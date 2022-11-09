function ShearAngle() {
    var d = document.getElementById("d").value;
    console.log(d);
    Number(d);
    var DC = document.getElementById("DC").value;
    Number(DC);
    console.log(DC);
    var Z = document.getElementById("Z").value;
    Number(Z);
    var FT = document.getElementById("FT").value;
    Number(FT);
    var BC = document.getElementById("BC").value;
    Number(BC);
    var KC = document.getElementById("KC").value;
    Number(KC);
    var NC = document.getElementById("NC").value;
    Number(NC);

    var PHI_S = Math.acos(1-(2*d/DC));
    document.getElementById("PHI_S").innerHTML = PHI_S;
    var PHI = 360/Z;
    document.getElementById("PHI").innerHTML = PHI;
    var n = Math.ceil(PHI_S/PHI);
    document.getElementById("n").innerHTML = n;
    var AC = BC * FT * Math.sin(PHI_S);
    document.getElementById("AC").innerHTML = AC;
    var FC = KC * AC * n;
    document.getElementById("FC").innerHTML = FC;

    var power = (FC * Math.PI * DC * NC )/60000000;

    document.getElementById("result").innerHTML = power;
}