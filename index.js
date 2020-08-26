
document.getElementById('sendMessage').addEventListener("click", (event) => {
    
    var whatsappphonenumber = document.getElementById('whatsappNumber').value;
    var urlencodedtext = document.getElementById('whatsappMessage').value;

    window.open("https://api.whatsapp.com/send?phone="+ whatsappphonenumber + "&text="+urlencodedtext, "_blank"); 
});


