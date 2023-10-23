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
  // triangle are calculation 

function CalculateRectanglearea(){
    //console.log('amit hasan')
    //  first rectangle input field
     const inputField= document.getElementById('rectangle-width');
     const rectangleValue=inputField.value;
     const width=parseFloat(rectangleValue);
     console.log(width);
    
     //second rectangle input field
       const secondInputField= document.getElementById('rectangle-length');
       const rectangleValue2= secondInputField.value;
       const length = parseFloat(rectangleValue2);
       console.log(length);
   
     const  area= width*length;
       console.log(area);

       const rectanglecalculationtotal=document.getElementById('rectangle-mann');
       rectanglecalculationtotal.innerText=area;
       

}