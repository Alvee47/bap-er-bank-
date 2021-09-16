// handle deposit button

document.getElementById('deposit-button').addEventListener('click',function(){
    //get the amount deposited 

    const depositInput =  document.getElementById('deposit-input') ;
    const newDepositAmountText = depositInput.value ;
    const newDepositAmount = parseFloat(newDepositAmountText) ;

    // console.log(depositAmount);

    // update deposit Total 

    const depositTotal = document.getElementById('deposit-total');

    const previousDepositText = depositTotal.innerText ;
    const previousDepositAmount = parseFloat(previousDepositText)

    const newDepositTotal = previousDepositAmount + newDepositAmount ; 

    depositTotal.innerText = newDepositTotal ;

    //update account balance

    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText
     
    const previousBalanceTotal = parseFloat(balanceTotalText) 

    const newBalanceTotal = previousBalanceTotal + newDepositAmount ;

    balanceTotal.innerText = newBalanceTotal ;  

   
   
    
    

    //clear the deposit input field

    depositInput.value = " " ;
})

    //handle withdraw event handler


document.getElementById('withdraw-button').addEventListener('click',function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const  newWithdrawAmountText = withdrawInput.value 
    const newWithdrawAmount = parseFloat(newWithdrawAmountText)

    const withdrawTotal = document.getElementById('withdraw-total')

    const previousWithdrawText = withdrawTotal.innerText
    const previousWithdrawAmount = parseFloat(previousWithdrawText)
    
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount 

    withdrawTotal.innerText = newWithdrawTotal 

    //clear the withdrawInput field 

    withdrawInput.value= " ";

    //update balance 

    const balanceTotal = document.getElementById('balance-total');

    const previousbalanceText = balanceTotal.innertext ;

    const previousBalanceAmount = parseFloat(previousbalanceText)

    const newBalanceAmount = previousBalanceAmount - newWithdrawAmount

   


     balanceTotal.innerText = newBalanceAmount ;


    


 })