const downld = document.getElementsByClassName("downld")[0];
downld.addEventListener('click', function(e) {
    window.print(e);
})

const terms = document.getElementById("terms")
terms.addEventListener('click', function(e) {
    
    const termsConditions = document.getElementById("terms-conditions");
    if (termsConditions.style.display === "block"){
        termsConditions.style.display = "none";
        document.getElementById("iframe").src = document.getElementById("iframe").src;
    } else {
        
        termsConditions.style.display = "block";  
    }
})