lowerlim = [0,11,51,101];
upperlim=[10,50,100,200];
cats = {1 : [5,1.2,1.3,0.4],
2:[7,1.5,1.4,0.6],
3:[14,6,5,4]
}

function calculateCharges(d,cat) {
    rd = d;
    p=0;
    for (var i=0; i < upperlim.length; i++) {
        r= upperlim[i]-lowerlim[i];
        if (rd < r) {
            c = rd
        } else {
            c = r
        }
        p = p + c * cats[cat][i];
        if (rd < r)
            break;
        rd = rd - c
    }
    return Math.round(p);
}

console.log(calculateCharges(12, 1))