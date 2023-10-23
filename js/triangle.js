function CalculateTrianglearea(){
    // console.log('amit er baccha'); button er jonno id="CalculateTrianglearea()" funtion call krlam 
  
  //  1st input field id nibo
    const baseInputField =document.getElementById('triangle-base');
    // input field er value dhorbo
    const baseValue=baseInputField.value;
    // jahuto value string e ace parseFloat nia number e convert korlam
    const base=parseFloat(baseValue);
    // trpor string thake number er man ta pabo
    console.log(base);


    const heightInputField=document.getElementById('triangle-height');
    const heightvalue=heightInputField.value;
    const height=parseFloat(heightvalue);
    console.log(height);

const Area=0.5*base*height;

console.log(Area);

const triangleResult=document.getElementById('triangle-man');
triangleResult.innerText=Area; 

    

}