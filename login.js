document.getElementById('login-submit').addEventListener('click',function(){
    //get user email
    
    const emailfield = document.getElementById(' user-email');
    const useremail = emailfield.value ;
    

    //get user passward

    const passfield = document.getElementById('user-passward');
    const userpass = passfield.value ; 
    

    if(useremail=="sontan@baap.com" && userpass=="secret"){
       window.location.replace("banking.html");
    }
    else 
    {
        console.log('please try again')
    }

})