
const fillIn = async (count) => {

    if(count<=0){
        throw new "can not generate negative number of values";
    }

    let nums = [];

    for(let i=1;i<=count;i++){        
        nums.push(Math.floor(Math.random() * 10));
    }    

    return nums;
};

let p1 = fillIn(50);
let p2 = fillIn(50);

Promise.all([p1,p2])
    .then((data) => { 
        let nums = [...data[0],...data[1]];
        console.log(nums); 
        console.log(nums.length + " numbers filled");
    })
    .catch((err) => {
        console.error(err);
    });