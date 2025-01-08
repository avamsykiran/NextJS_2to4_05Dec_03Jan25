
export const goodMorning = unm => `Good Morning ${unm}`;
export const goodNoon = unm => `Good Noon ${unm}`;
export const goodEvening = unm => `Good Evening ${unm}`;

const greetUser = unm => {

    var h = new Date().getHours();

    if(h>=3 && h<=11) return goodMorning(unm);
    else if(h>11 && h<=14) return goodNoon(unm);
    else return goodEvening(unm);
}

export default greetUser;