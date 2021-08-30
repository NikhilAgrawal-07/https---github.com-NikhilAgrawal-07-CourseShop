function verify(){
    let a = confirm("Are you sure you want to logout?");
    if(a){
        document.getElementById("logout1").href="Logout.html";
    }
    else
    {
        document.getElementById("logout1").href="HomePage.html";
    }
}
