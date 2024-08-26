import {logJSONData} from './api.mjs';
let jsonData1
let s1;
let s2;
let cur1,cur2

let amt1 = document.getElementById('amtbox1');
let amt2 = document.getElementById('amtbox2');

   
//This method in one file i used fetch
// fetch('https://api.frankfurter.app/currencies')
// .then(res=>res.json())
// .then(res=> loaddropdown(res))

document.addEventListener('DOMContentLoaded', async () => {
     jsonData1 = await logJSONData();
     console.log('Data fetched and returned:', jsonData1);
     loaddropdown(jsonData1)


});

function loaddropdown(res)
{
    try{

    let currency = Object.entries(res); // convert it to the array
     s1 = document.getElementById("sbox1");
     s2 = document.getElementById("sbox2");

    for(let i =0; i <currency.length;i++)
    {
        const option = document.createElement('option');
        option.textContent = currency[i][0];
        option.value= currency[i][0];
      
        const option1 = document.createElement('option');
        option1.textContent = currency[i][0];
        option1.value= currency[i][0];
        console.log(currency[i][0]);
        s1.appendChild(option);
        s2.appendChild(option1);
    }
    }
    catch(error)
    {
        console.error('Error loading dropdown', error);
    }

}

document.getElementById('but-convert').addEventListener('click',() =>
{
    getdetails()
});

function getdetails()
{
    //const s11 = document.getElementById("sbox1");
    cur1 = s1.value;
    cur2 = s2.value;
    let inputvalue = amt1.value;
    if(cur1===cur2)
    {
        alert("choose different country");
       // document.getElementById('error').innerHTML = "choose different country";

    }
    else
    {
        convert(cur1,cur2,inputvalue)
    }
}
// function convert(cur1,cur2,inputvalue)
// {
//     const host = 'api.frankfurter.app';
//    fetch(`https://${host}/latest?amount=${inputvalue}&from=${cur1}&to=${cur2}`)
//   .then(resp => resp.json())
//   .then((data) => {
//     //alert(`10 GBP = ${data.rates.USD} USD`);
//     console.log(data);
//     //console.log(Object.values(data.rates));
//     const result = Object.values(data.rates);
//    // console.log(result);
//     amt2.value = result;
//     document.getElementById('result').innerHTML = result;
//   });
// }



async function convert(cur1,cur2,inputvalue)
{
    const host = 'api.frankfurter.app';
    try{
    
        const response = await fetch(`https://${host}/latest?amount=${inputvalue}&from=${cur1}&to=${cur2}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();

    
   
   
    console.log(data);
    //console.log(Object.values(data.rates));
    const result = Object.values(data.rates);
   // console.log(result);
    amt2.value = result;
    document.getElementById('result').innerHTML = result;
   }
   catch (error) {
    console.error('There was a problem with the fetch operation:', error);
   }
  
}