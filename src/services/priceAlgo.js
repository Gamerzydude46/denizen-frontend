export function calculateCharges(d, category, gen) {
    try {
        const lowerlim = [0, 11, 51, 101];
        const upperlim = [10, 50, 100, 200];
        const cats = {
            1: [7, 1.5, 1.4, 0.6],
            2: [14, 6, 5, 4],
            3: [5, 1.2, 1.3, 0.4]
        }
        var cat;
        if (category == 'small') {
            cat = 1
        } else if (category == 'medium') {
            cat = 2
        } else if (category == 'large') {
            cat = 3
        } else {
            //error
        }
        var rd = Math.round(d/1000);
        var  c;
        var p = 0;
        for (var i = 0; i < upperlim.length; i++) {
            var r = upperlim[i] - lowerlim[i];
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
    
        console.log(`Price is ${p}`)
        return Math.round(p);
    } catch (error) {
        console.log(error.message)
    }
    
}