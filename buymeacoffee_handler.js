// If BMC paymnet is complete

function completed() {
    var payment_complete = jQuery('#bmc-payment-modal').hasClass('thank-you-show')
    if (payment_complete == true) {
        // Call notification endpoint
        $.get("https://breadjar.herokuapp.com/notifications?create=true", function(data, status){
            var data = JSON.parse(data);
            
        });
    }
}

completed();
setInterval(completed, 2000);