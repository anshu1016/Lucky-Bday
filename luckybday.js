const dobday = document.querySelector("#dob");
const luckynum = document.querySelector("#l-num");
const checkBtn = document.querySelector("#check-btn");
const resultP = document.querySelector("#result")
checkBtn.addEventListener("click",validateDob)

function validateDob(){
    const dob = dobday.value;
    const sum = Amount(dob);
    if(sum&&dob){
        comparevalues(sum,luckynum.value);
    }   
    else{
        resultP.innerText = "please enter both details.."
    }
}
function Amount(dob){
    dob = dob.replaceAll("-","");
    let total = 0
    for(let i=0;i<dob.length;i++)
    {
        total = total + Number(dob.charAt(i));
    }
    return total;
}
function comparevalues(sum,luckynum){
    if(sum%luckynum === 0)
    {
        resultP.innerText = "Yay! You are Lucky!!"
    }
    else{
        resultP.innerText = "You are not Lucky..\n try with Another Number.."
    }
}

//checkBtn.addEventListener('click',validateDD);
