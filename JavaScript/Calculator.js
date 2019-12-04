let tempNumber=0;
function insert(num)
{
    if(tempNumber!=0)
    {
    document.getElementById('output').value+=num;
    tempNumber+=num;
    }
    else
    {
        document.getElementById('output').value=num;
        tempNumber=num;
    }   
}
let number1, number2,choice="";
function firstValue()
{

    number1=document.getElementById('output').value;
    document.getElementById('output').value=0;
    tempNumber=0;
}
function clearEverything()
{
    tempNumber=0;
    document.getElementById('output').value=0;
}
function solver()
{
    switch(choice)
    {
        case "additionChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)+parseInt(number2);
                tempNumber=0;
                choice="";
                 break;
            }
        case "substractionChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)-parseInt(number2);
                tempNumber=0;
                choice="";
                 break;

            }
        case "divisionChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)/parseInt(number2);
                tempNumber=0;
                choice="";
                 break;
            }
        case "multiplicationChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)*parseInt(number2);
                tempNumber=0;
                choice="";
                 break;
            }
    }
}
function remove()
{       
let string = document.getElementById('output').value;
tempNumber=string.substring(0,string.length-1);
if(tempNumber.length>=1)
document.getElementById('output').value=tempNumber;
else
document.getElementById('output').value=0;
}
function expressionsolve(newChoice)
{
switch(newChoice)
{

    case "additionChoice":
        {
            let newnum1= document.getElementById('output').value;
            if(newnum1==0)
            return;
            number1=parseInt(newnum1)+parseInt(number1);
            break;
        }
        case "substractionChoice":
                {
                    let newnum1= document.getElementById('output').value;
                    if(newnum1==0)
            return;
                    number1=parseInt(number1)-parseInt(newnum1);
                    break;
                }
                case "multiplicationChoice":
                        {
                            let newnum1= document.getElementById('output').value;
                            if(newnum1==0)
            return;
                            number1=parseInt(newnum1)*parseInt(number1);
                            break;
                        }
                        case "divisionChoice":
                                {
                                    let newnum1= document.getElementById('output').value;
                                    if(newnum1==0)
            return;
                                    number1=parseInt(number1)/parseInt(newnum1);
                                    break;
                                }
}
}
function addition()
{
    if(choice.length==0)
    {
firstValue();
    }
    else
    {
        expressionsolve(choice);
        document.getElementById('output').value=0;
        tempNumber=0;
    }
    choice="additionChoice";
}
function substraction()
{
    if(choice.length==0)
   firstValue();
   else
   {
   expressionsolve(choice)
   document.getElementById('output').value=0;
   tempNumber=0;
}
   choice="substractionChoice";
}

function multiplication()
{
    if(choice.length==0)
   firstValue();
   else
   {
   expressionsolve(choice)
   document.getElementById('output').value=0;
   tempNumber=0;
}
   choice="multiplicationChoice"
}
function division()
{
    if(choice.length==0)
    firstValue();
    else
    {
    expressionsolve(choice)
    document.getElementById('output').value=0;    
    tempNumber=0;    
}
    choice ="divisionChoice";
}