let currentRowId=0;
function newcart(currentId,totalChange)
{
    let curItemName     = document.getElementById("newColumn1"+currentId).value;
    let curItemPrice    = document.getElementById("newColumn2"+currentId).value;
    let curItemQuantity = document.getElementById("newColumn3"+currentId).value ;
    let currentCart=document.getElementById('billCart').value;
     let newtotalPrice=parseInt(curItemPrice)*parseInt(curItemQuantity);
   currentCart=parseInt(currentCart)-parseInt(totalChange);
   currentCart=parseInt(currentCart)+parseInt(newtotalPrice); 
   document.getElementById(currentId).childNodes[3].innerText=newtotalPrice;
    document.getElementById('billCart').value=currentCart;
    document.getElementById(currentId).childNodes[0].textContent=curItemName;
    document.getElementById(currentId).childNodes[1].textContent=curItemPrice;
    document.getElementById(currentId).childNodes[2].textContent=curItemQuantity;
    document.getElementById(currentId).childNodes[5].innerHTML="<button id='edit' onclick= 'editCurrentRow("+currentId+")'>Edit</button>"
}
function editCurrentRow(currentId)
{
    let curItemName     = document.getElementById(currentId).childNodes[0].textContent;
    let curItemPrice    = document.getElementById(currentId).childNodes[1].textContent;
    let curItemQuantity = document.getElementById(currentId).childNodes[2].textContent;  
    let totalChange=parseInt(curItemPrice)*parseInt(curItemQuantity);
      document.getElementById(currentId).childNodes[0].innerHTML="<textarea id=newColumn1"+currentId+" cols="+25+" rows="+1+" required>"+curItemName+"</textarea>";
    document.getElementById(currentId).childNodes[1].innerHTML="<input id= newColumn2"+currentId+" type=number min= 0 oninput= validity.valid||(value=''); required value="+curItemPrice+">";
   document.getElementById(currentId).childNodes[2].innerHTML="<input id= newColumn3"+currentId+" type=number min =0 oninput= validity.valid||(value=''); required value="+curItemQuantity+">";
    document.getElementById(currentId).childNodes[5].innerHTML="<button id= newsavebutton onClick= newcart("+currentId+","+totalChange+")>Save</button>"; 
}
function removeCurrentRow(currentId)
{
    
    let currentCart=document.getElementById('billCart').value;
    let currentPrice=document.getElementById(currentId).childNodes[3].innerText
    currentCart=parseInt(currentCart)-parseInt(currentPrice);
    document.getElementById('billCart').value=currentCart;
    document.getElementById(currentId).remove();
}
function cartAdder()
{
    let curItemName= document.getElementById('itemName').value;
    let curItemPrice= document.getElementById('itemsPrice').value;
    let curItemQuantity=document.getElementById('itemsQuantity').value;
    let totaPrice= parseInt(curItemPrice)*parseInt(curItemQuantity);
    if(curItemName.length==0||curItemPrice.length==0||curItemQuantity.length==0)
    {
        alert("Null Values are not Permitted");
        return;
    }
   if(parseInt(curItemPrice)<0||parseInt(curItemQuantity)<0)
   {
    alert("Negative values are not Permitted");
    return;
   }
    let curTable=document.getElementById('cartTable');
    let curRow =curTable.insertRow();
    curRow.setAttribute('id',currentRowId);
    let cell1=curRow.insertCell();
    let cell2=curRow.insertCell();
    let cell3=curRow.insertCell();
    let cell4=curRow.insertCell();
    let cell5=curRow.insertCell();
    let cell6=curRow.insertCell();
    cell1.innerText=curItemName;
    cell2.innerText=curItemPrice;
    cell3.innerText=curItemQuantity;
    cell4.innerText=totaPrice;

     cell5.innerHTML= "<button id='remove' onclick= 'removeCurrentRow("+currentRowId+")'>Remove</button>"
      cell6.innerHTML= "<button id='edit' onclick= 'editCurrentRow("+currentRowId+")'>Edit</button>"
    document.getElementById('itemName').value="";
    document.getElementById('itemsPrice').value="";
    document.getElementById('itemsQuantity').value="";
    let curCartVal= document.getElementById('billCart').value;
    if(curCartVal.length!=0)
    curCartVal=parseInt(curCartVal)+parseInt(totaPrice);
    else
    curCartVal=totaPrice;
    document.getElementById('billCart').value=curCartVal;
    currentRowId++;
}