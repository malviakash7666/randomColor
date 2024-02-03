const getcolor= ()=>{
    const randomNumber =Math.floor (Math.random()*16777215);
    // console.log(randomNumber);
    const randomCode ="#"+ randomNumber.toString(16);
    console.log(randomNumber,randomCode);
    document.body.style.backgroundColor=randomCode;
    document.querySelector("#color-code").innerText=randomCode;
    // navigator.clipboard.writeText(randomCode);
}
document.querySelector("#btn").addEventListener("click",getcolor)
getcolor();
// 