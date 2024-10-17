<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <!-- Bootstrap CSS (for layout and grid system) -->
        <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
        <link rel="stylesheet" href="styles.css">


    <title>Welcome to Savanna Fibre</title>

</head>
<body>
<div id="loader">
    <img src="logo.png" alt="Company Logo" class="rotating-logo"> <!-- Added class for rotation -->
    <div class="welcome-text" id="welcomeText">Anniversary Gift!</div>
</div>


    
    <div class="main-content" id="main-content">
            <!-- Navbar with logo -->
<div class="navbar">
    <div class="gothogo">Savanna Fibre</div>
</div>

<div class="banner">
        <p>Savanna - 2nd Anni</p>
        <div id="current-date-time">Date</div>
    </div>
    </br></br>
<div>
<div class="banner1"></div>
</div>
        <!-- Main landing page content goes here -->
        <div class="congratulations-container" id="zakayo">
    <h4>Congratulations🎉🎉	
</h4>
    <p>Through this questionnaire, you have a chance to win <strong style="color:green">UGX 1.5 million!</strong></p>
</div>

        <div id="quiz-section">
        <div class="question active" id="question1">
            <p><b>Question 1/4:</b> Where are our headquarters located?</p>
            <button onclick="selectAnswer('question1', 'question2')">Nairobi</button>
            <button onclick="selectAnswer('question1', 'question2')">Kampala</button>
            <button onclick="selectAnswer('question1', 'question2')">Arusha</button>
        </div>
        <div class="question" id="question2">
            <p><b>Question 2/4:</b> What services do we provide?</p>
            <button onclick="selectAnswer('question2', 'question3')">Fibre Internet Services</button>
            <button onclick="selectAnswer('question2', 'question3')">Electronics</button>
            <button onclick="selectAnswer('question2', 'question3')">Mobile Services</button>
        </div>
        <div class="question" id="question3">
            <p><b>Question 3/4:</b> What of these statements is true about the Internet Packages we offer</p>
            <button onclick="selectAnswer('question3', 'question4')">Twiga 10MBps@ UGX 72000</button>
            <button onclick="selectAnswer('question3', 'question4')">Chui 20MBps@ UGX 112000</button>
            <button onclick="selectAnswer('question3', 'question4')">Simba 40MBps@ UGX 159000</button>
            <button onclick="selectAnswer('question3', 'question4')">Ndovu 100MBps@ UGX 253000</button>
            <button onclick="selectAnswer('question3', 'question4')">All of the Above</button>
        </div>
        <div class="question" id="question4">
            <p><b>Question 4/4:</b> Is Savanna Fibre the best ISP in Region</p>
            <button onclick="selectAnswer('question4', 'end')">Yes, Of Course</button>
            <button onclick="selectAnswer('question4', 'end')">No</button>
            <button onclick="selectAnswer('question4', 'end')">I'm yet to subscribe</button>
        </div>
        <div class="question" id="end">
            <p>Thank you for completing the quiz!</p>
            <button id="seeGiftsBtn" style="background-color:orange;">See Your Gifts</button>
        </div>
        <div id="notification" class="notification" style="display: none;">
            <p>You have successfully entered the grand prize competition!</p>
            <p><b><span style="color:green;">UGX 1.5 million</span> Awaits You!</b></p>
            <img src="moth.gif" alt="Congratulations GIF" class="notification-gif" />
            <button id="continueBtn" onclick="checkProcessing()">Continue</button>
        </div>
    </div>
    <!-- Process Container Popup (Initially hidden) -->
    <div id="processContainer" class="popup" style="display: none;">
        <h3>We are verifying your answers...please wait!</h3>
        </br>
        <div id="checkAnswers">Checking Answers...</div>
        <div id="verifyIP">Verifying IP...</div>
        <div id="checkEligibility">Checking Eligibility...</div>
    </div>

    
    <!-- Game Popup -->
    <div id="verifiedPopup" class="popup" style="display: none;">
        <p>You have been successfully verified!</p>
        <p>Please choose one of the gift boxes below: <strong>YOU ONLY HAVE 3 CHANCES!</strong></p>
        <div class="gift-boxes">
            <div class="gift-box" id="giftBox1"></div>
            <div class="gift-box" id="giftBox2"></div>
            <div class="gift-box" id="giftBox3"></div>
            <div class="gift-box" id="giftBox4"></div>
            <div class="gift-box" id="giftBox5"></div>
            <div class="gift-box" id="giftBox6"></div>
        </div>
        <p id="attemptsLeft">Attempts Left: 3</p>
    </div>

     <!-- Notification Popup -->
     <div id="notificationPopup" class="notification-popup" style="display: none;">
        <div class="popup-message" id="notificationMessage"></div>
        <button id="notificationButton" class="popup-button">Continue</button>
    </div>

    <!-- Dark overlay for popups -->
    <div id="overlay" class="overlay"></div>

    <div class="comment-section">
        <div style="display:flex; justify-content:space-between;">
            <h4>Comments</h4>
            <p><span><b>12/250</b></span></p>
        </div>
        <div id="comments-container">
            <!-- Comment templates -->
            <!-- This section will be filled with JavaScript -->
        </div>
        
    </div>

    <div class="gifts" id="gifts">
        <h3>Your Gifts</h3>
        <div class="gift">🎁 Gift 1: A 10% discount on your next purchase!</div>
        <div class="gift">🎁 Gift 2: A free e-book on local history!</div>
        <div class="gift">🎁 Gift 3: A surprise gift box delivered to your address!</div>
    </div>
    </div>



<footer></footer>
<script src="script.js"></script>
</body>
</html>
