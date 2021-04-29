function reverseThisString(string){
    var newString="";
    for(let i=string.length-1;i>=0;i--)
    {
        newString+=string[i];
    }
    return newString;
}

console.log(reverseThisString('hello'));

function swapCase(string) {
    var str=""
    for(var i=0;i < string.length ;i++)
    {
      if(string[i]===string[i].toUpperCase())
      {
        str+=string[i].toLowerCase();
      }
      else
      {
        str+=string[i].toUpperCase();
      }
    }
    return str;
  }
  
   console.log(swapCase('hELlo'))


   function toCelcius(array){
    const arr=array.map(array=>(array-32)*5/9)
    return arr
    }
    
    const c=[23,32,41]
    
    const f=toCelcius(c)
    
    console.log(f)

    function passOrFail(array){
        const arr=array.map(array=>array>=75 ? 'true':'false')
        return arr
    }
const grade=[23,32,80]

const pOrF=passOrFail(grade)

console.log(pOrF)

function germanNumbers(){
    const cNum = [2,3,4,5,6];
    const gNum = ['zwei', 'drei', 'vier', 'fünf', 'sechs'];
    var cgNum=[]
    for(let i=0; i<cNum.length || i<germanNumbers.length;i++)
    {
      var str=cNum[i]+' is '+gNum[i]
      cgNum.push(str)
    }
    return cgNum
  }
  
  console.log(germanNumbers())


  function returnPrimeNumbers(){
    const numbers = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
    const pNum=numbers.filter(function(numbers){
      if(numbers<=1)
      {
        return false;
      }
      for(let i=2;i<numbers;i++)
      {
        if(numbers%i==0)
        {return false;}
      }
      return true;
    })
    return pNum;
  }
  
  console.log(returnPrimeNumbers())

  for(var i=1;i<=100;i++)
{
  if(i%3===0 && i%5===0)
  {
    console.log('CSC225 RULES I LOVE JAVASCRIPT')
  }
  else
  {
    if(i%3===0)
    {
      console.log('CSC225 RULES')
    }
    else if(i%5===0)
    {
      console.log('I LOVE JAVASCRIPT')
    }
    else{
      console.log(i)
    }
  }


}