const dobday = document.querySelector("#dob");
const luckynum = document.querySelector("#l-num");
const checkBtn = document.querySelector("#check-btn");
const resultP = document.querySelector("#result")
checkBtn.addEventListener("click",validateEnteries)

function validateEnteries()
{
    if(luckynum.value>0 && dobday.value){
        validateDob();
    }else{
        resultP.innerText = "Please enter the both details correctly.."
    }
}

function validateDob(){
    const dob = dobday.value;
    const sum = Amount(dob);

   comparevalues(sum,luckynum.value);
      
    
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

