
const value=1000;

function convertToUSD (){
 const result = value * 1.4;
 return result

}

console.log(convertToUSD(1000));

function convertToBRL(){
    const result = (value*5.7) * .99;
    return result

}
console.log(convertToBRL(1000));

function convertToAll(currency, value){
    if(currency==='USD'){
        return convertToUSD(value);
     
    }
    else if(currency==='BRL'){
        return convertToBRL(value)
      
    }
else{
  return 'enter current currency'
}
}
console.log(convertToAll('USD',1000));

