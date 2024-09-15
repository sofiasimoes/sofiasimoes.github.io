// Set the date we're counting down to
var countDownDate = new Date("Dec 7, 2024 12:00:00").getTime();

// Update the countdown every 1 second
var x = setInterval(function() {
    // Get today's date and time
    var now = new Date().getTime();

    // Find the distance between now and the countdown date
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "EXPIRED";
    }
}, 1000);


function sendMessage() {
    // Get the user input from the form field
    var message = document.getElementById("userMessage").value;
    
    // Encode the message to be URL-safe
    var encodedMessage = encodeURIComponent(message);

    // Set the recipient phone number (in international format)
    var phoneNumber = "351918782022"; // Replace with your phone number

    // Construct the WhatsApp API URL
    var whatsappUrl = "https://wa.me/" + phoneNumber + "?text=" + encodedMessage;

    // Open WhatsApp with the custom message
    window.open(whatsappUrl, '_blank');
  }