const generate = document.getElementById("generator");
const ip = document.getElementById("ip");
generate.addEventListener("click",()=>{
    let randomInt = "0123456789"
    let randomLetterCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomLetterSmall = "abcdefghijklmnopqrstuvwxyz";
    let randomSymbol = "!@#$%^&*()";
    let length = 12;
    // for(let i=0;i<length;i++){
    //  password+=randomLetterCaps[Math.floor(Math.random()*randomLetterCaps.length)]
    //  console.log(password)
        
    // }
    function createPassword(){
        let password = "";
        password+=randomLetterCaps[Math.floor(Math.random()*randomLetterCaps.length)]
        password+=randomLetterSmall[Math.floor(Math.random()*randomLetterSmall.length)]
        password+=randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
        password+=randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
        password+=randomInt[Math.floor(Math.random()*randomInt.length)];        
        password+=randomInt[Math.floor(Math.random()*randomInt.length)];        
        //
        ip.value=password;
        return password;        
    }
    console.log(createPassword());
    
})

const generateStrong = document.getElementById("generatorstrong");
generateStrong.addEventListener("click",()=>{
    let randomInt = "0123456789"
    let randomLetterCaps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let randomLetterSmall = "abcdefghijklmnopqrstuvwxyz";
    let randomSymbol = "!@#$%^&*()";
    
    let password="";
    password+=randomLetterCaps[Math.floor(Math.random()*randomLetterCaps.length)]
    password+=randomLetterSmall[Math.floor(Math.random()*randomLetterSmall.length)]
    password+=randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
    password+=randomInt[Math.floor(Math.random()*randomInt.length)];        
    password+=randomLetterCaps[Math.floor(Math.random()*randomLetterCaps.length)]
    password+=randomLetterSmall[Math.floor(Math.random()*randomLetterSmall.length)]
    password+=randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
    password+=randomInt[Math.floor(Math.random()*randomInt.length)];        
    password+=randomLetterCaps[Math.floor(Math.random()*randomLetterCaps.length)]
    password+=randomLetterSmall[Math.floor(Math.random()*randomLetterSmall.length)]
    password+=randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
    password+=randomInt[Math.floor(Math.random()*randomInt.length)];        
    password+=randomSymbol[Math.floor(Math.random()*randomSymbol.length)];
    //
    ip.value=password;
        
    console.log(password)
    return password;        

})