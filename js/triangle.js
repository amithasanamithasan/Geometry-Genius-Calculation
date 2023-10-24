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
    baseInputField.value='';


    const heightInputField=document.getElementById('triangle-height');
    const heightvalue=heightInputField.value;
    const height=parseFloat(heightvalue);
    console.log(height);

    heightInputField.value='';

const Area1=0.5*base*height;

console.log(Area1);

const triangleResult=document.getElementById('triangle-man');
triangleResult.innerText=Area1; 

   


   

}
  // rectangle are calculation 

function CalculateRectanglearea(){
    //console.log('amit hasan')
    //  first rectangle input field
     const inputField= document.getElementById('rectangle-width');
     const rectangleValue=inputField.value;
     const width=parseFloat(rectangleValue);
     console.log(width);

     inputField.value='';
    
     //second rectangle input field
       const secondInputField= document.getElementById('rectangle-length');
       const rectangleValue2= secondInputField.value;
       const length = parseFloat(rectangleValue2);
       console.log(length);
       secondInputField.value='';
   
     const  area2= width*length;
       console.log(area2);

       const rectanglecalculationtotal=document.getElementById('rectangle-mann');
       rectanglecalculationtotal.innerText=area2;
       



}

function CalculateParallelogram(){
   const  inputFieldfirst = document.getElementById('parallelogram-base');
   const parallelogramaValue=inputFieldfirst.value;

   const parabase =parseFloat(parallelogramaValue);

    console.log(parabase);
    inputFieldfirst.value='';


    const inputFieldsecond=document.getElementById('parallelogram-height');
    const parallelogramaValue2=inputFieldsecond.value;

    const paraheight=parseFloat(parallelogramaValue2);
   
    console.log(paraheight);
   inputFieldsecond.value='';


    const area3 = parabase*paraheight;
    console.log(area3);

    const parallelogramSpean=document.getElementById('parallelogram-mann');
    parallelogramSpean.innerText=area3;
  
    

}