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
let number1, number2,choice;
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
                 break;
            }
        case "substractionChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)-parseInt(number2);
                tempNumber=0;
                 break;

            }
        case "divisionChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)/parseInt(number2);
                tempNumber=0;
                 break;
            }
        case "multiplicationChoice":
            {
                number2=document.getElementById('output').value;
                document.getElementById('output').value=parseInt(number1)*parseInt(number2);
                tempNumber=0;
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


function addition()
{
firstValue();
choice="additionChoice";
}
function substraction()
{
   firstValue();
   choice="substractionChoice";
}

function multiplication()
{
   firstValue();
   choice="multiplicationChoice"
}
function division()
{
    firstValue();
    choice ="divisionChoice";
}