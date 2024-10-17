// Function to simulate loading and then show the main content
function showMainContent() {
    document.getElementById('loader').style.opacity = '0'; // Fade out loader
    setTimeout(() => {
        document.getElementById('loader').style.display = 'none'; // Hide loader
        document.getElementById('main-content').style.display = 'block'; // Show main content
    }, 500); // Wait for fade-out effect to finish
}

window.onload = function() {
    const welcomeTextElement = document.getElementById('welcomeText');
    welcomeTextElement.style.opacity = '1'; // Show the welcome text
    setTimeout(showMainContent, 2000); // Delay before showing main content
};
        // Function to handle answer selection
function selectAnswer(currentQuestionId, nextQuestionId) {
    document.getElementById(currentQuestionId).classList.remove('active'); // Hide current question
    document.getElementById(nextQuestionId).classList.add('active'); // Show next question
}
// Function to show processing steps
function startProcessing() {
    // Show the process container
    document.getElementById('processContainer').style.display = 'block';

    // Hide the notification popup
    document.getElementById('notification').style.display = 'none';

    // Example of sequential updates
    setTimeout(function() {
        document.getElementById('checkAnswers').innerText = 'Answers Checked!...✔';
    }, 1000);

    setTimeout(function() {
        document.getElementById('verifyIP').innerText = 'IP Verified!...✔';
    }, 2000);

    setTimeout(function() {
        document.getElementById('checkEligibility').innerText = 'Eligibility Confirmed!...✔';
    }, 3000);


    setTimeout(showVerifiedPopup, 4000);
}
// Function to hide processing popup and show verification popup
function showVerifiedPopup() {
    // Hide processContainer
    document.getElementById('processContainer').style.display = 'none';

    // Show verified popup
    document.getElementById('verifiedPopup').style.display = 'block';
}

// Event listener for "See Your Gifts" button
document.getElementById('seeGiftsBtn').addEventListener('click', function() {
    // Show the notification popup and overlay when button is clicked
    document.getElementById('notification').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
});

// Event listener for "Continue" button to trigger startProcessing()
document.getElementById('continueBtn').addEventListener('click', function() {
    // Call startProcessing() when the "Continue" button is clicked
    startProcessing();
});


/*document.querySelectorAll('.gift-box').forEach(box => {
    box.addEventListener('click', function() {
        alert(this.innerText + ' selected!');
    });
});*/


function updateDateTime() {
    const now = new Date();
    const options = { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit', 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric', 
        hour12: false 
    };
    const formattedDateTime = now.toLocaleString('en-US', options);
    document.getElementById('current-date-time').textContent = formattedDateTime;
}

updateDateTime();
setInterval(updateDateTime, 1000);



let gifts = ['Exclusive Rewards', 'Cash Prize', 'Empty', 'Empty', 'Empty', 'Empty'];
        let clickedBoxes = 0;
        let maxClicks = 3;
        let shuffleInterval;

        // Shuffle the gift array every second
        function shuffleGifts() {
            shuffleInterval = setInterval(() => {
                gifts = gifts.sort(() => Math.random() - 0.5);
            }, 6000); // Shuffle every 1 second
        }

        // Show the verified popup and start the shuffle
        function showVerifiedPopupp() {
            document.getElementById('verifiedPopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
            shuffleGifts(); // Start shuffling the gifts
        }

        // Show notification popup with a message
        function showNotification(message) {
            document.getElementById('notificationMessage').innerText = message;
            document.getElementById('notificationPopup').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        }

        // Hide the notification popup
        function hideNotification() {
            document.getElementById('notificationPopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
        }
        function hideVerifiedPopupp() {
            document.getElementById('verifiedPopup').style.display = 'none';
            document.getElementById('overlay').style.display = 'none';
            

        }
        function hideResultPopup(){
            document.getElementById('end').style.display = 'none';
            document.getElementById('end').style.display = 'none';
        }

        // Handle box clicks
        document.querySelectorAll('.gift-box').forEach((box, index) => {
            box.addEventListener('click', () => {
                if (clickedBoxes < maxClicks) {
                    const chosenGift = gifts[index];

                    // If box is empty
                    if (chosenGift === 'Empty') {
                        showNotification("Sorry, this gift box is empty.");
                    } else {
                        // If user won a prize
                        hideResultPopup();
                        hideVerifiedPopupp();
                        showNotification(`Congratulations! You won: ${chosenGift}!`);
                        clearInterval(shuffleInterval); // Stop the shuffling
                        showCongratulationsPopup()
                        endGame(); // Trigger end game logic since the user has won
                        return;
                    }

                    // Increment the number of clicked boxes
                    clickedBoxes++;

                    // Update attempts left
                    document.getElementById('attemptsLeft').innerText = `Attempts Left: ${maxClicks - clickedBoxes}`;

                    // If max clicks reached, stop shuffling and end the game
                    if (clickedBoxes === maxClicks) {
                        clearInterval(shuffleInterval); // Stop the shuffling
                        showNotification("Game Over! You've used all your attempts.");
                    }
                }
            });
        });

        // End game logic
        function endGame() {
            // Redirect or show final message, for now it just hides the game
            setTimeout(function() {
                document.getElementById('verifiedPopup').style.display = 'none';
                document.getElementById('overlay').style.display = 'none';
            }, 3000);
        }

        // Start the game with the verified popup
        //showVerifiedPopup();

        // Handle the notification button click to hide the popup
        document.getElementById('notificationButton').addEventListener('click', hideNotification);



        let progress = 0;
        let interval;
        
        function startProgress() {
            progress = 0; // Reset progress
            clearInterval(interval); // Clear any existing intervals
        
            interval = setInterval(() => {
                if (progress < 100) {
                    progress++;
                    document.getElementById('progressBar').style.width = progress + '%';
                    document.getElementById('progressText').innerText = progress + '% Complete';
                } else {
                    clearInterval(interval); // Stop when full
                    alert("You have completed your sharing!");
                }
            }, 600000); // 10 minutes in milliseconds
        }

        function showCongratulationsPopup() {
            const popup = document.createElement('div');
            popup.className = 'popup fade-in'; // Add fade-in effect
            popup.innerHTML = `
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">

                <style>
                #whatsappShareBtn {
                    background-color: #4caf50; /* Green background */
                    color: white; /* White text */
                    border: none; /* No border */
                    border-radius: 5px; /* Rounded corners */
                    padding: 10px 20px; /* Some padding */
                    cursor: pointer; /* Pointer cursor on hover */
                    font-size: 16px; /* Larger text */
                    margin-top: 10px; /* Margin at the top */
                }
                
                #whatsappShareBtn:hover {
                    background-color: #45a049; /* Darker green on hover */
                }
                </style>
                <h2>🎉 Congratulations! 🎉</h2>
                <p>Share the link below to claim your prize:</p>
                <button id="whatsappShareBtn" onclick="shareOnWhatsApp()"><i class="fa-brands fa-square-whatsapp"></i> WhatsApp 📲</button>
                <p style="margin-top: 20px;">
                    Share to 5 whatsapp groups To claim you cash of upto UGX 1,500,000! 💰 
                    The more you share, the better your chances!
                </p>
                <button onclick="this.parentElement.remove();" style="margin-top: 20px;">Close</button>
            `;
            document.body.appendChild(popup);
        }
        
        function shareOnWhatsApp() {
            const message = encodeURIComponent(
                "🎉I have won a prize worth 💰💰 UGX 500,000 with Savanna, You can try it too! 🎉\n\n" +
                "Visit this link to try it out!: \n\n https://cxfer.github.io/  \n\n" +
                "Don't miss out on the chance to win the grand prize🌟 of UGX 1,500,000! 🌟 " +
                "Earn Huge amounts of cash Today For Free💰"
            );
        
            const url = `https://wa.me/?text=${message}`;
            
            // Open WhatsApp with the pre-built message
            window.open(url, '_blank');
        }
        
        // Call this function when the user wins
        
        
        

const comments = [
{
    profilePic: "download.jpeg",
    name: "Johny Kainegrubba",
    time: "just now",
    text: "Wow! I just Recieved my Iphone 16! Thankyou Savanna Fibre.Love from Bunamwaya",
    upvotes: 232,
    downvotes: 5
},
{
    profilePic: "1.jpeg",
    name: "Mindy Obuya",
    time: "1 min ago",
    text: "OMG I needed the cash...UGX 500,000 has just been deposited.",
    upvotes: 158,
    downvotes: 1
},
{
profilePic: "2.jpeg",
name: "Samuel Okello",
time: "2 mins ago",
text: "This cash giveaway is unbelievable! I just got UGX 1,000,000! Thank you, Savanna Fibre!",
upvotes: 210,
downvotes: 3
},
{
profilePic: "3.jpeg",
name: "Linda Nansubuga",
time: "10 mins ago",
text: "I can't believe it! UGX 300,000 just hit my account. You guys are the best!",
upvotes: 185,
downvotes: 0
},
{
profilePic: "4.jpeg",
name: "Brian Kiyingi",
time: "30 mins ago",
text: "Just received my cash! Thank you, Savanna Fibre! You've made my day!",
upvotes: 145,
downvotes: 2
},
{
profilePic: "5.jpeg",
name: "Patricia Tumwine",
time: "1 hour ago",
text: "UGX 400,000! I'm so grateful! This is a blessing! Love from Kampala!",
upvotes: 120,
downvotes: 1
},
{
profilePic: "6.jpeg",
name: "David Ssemaganda",
time: "1 hour ago",
text: "Wow! I just got UGX 600,000! This cash giveaway is truly amazing!",
upvotes: 210,
downvotes: 0
},
{
profilePic: "7.jpeg",
name: "Rita Namuyanja",
time: "2 hours ago",
text: "I was shocked when I saw UGX 750,000 in my account! Thank you, Savanna Fibre!",
upvotes: 175,
downvotes: 3
},
{
profilePic: "8.jpeg",
name: "Joseph Kizza",
time: "3 hours ago",
text: "Receiving cash from Savanna Fibre is a dream come true! I just got UGX 500,000!",
upvotes: 150,
downvotes: 2
},
{
profilePic: "9.jpeg",
name: "Esther Nabukalu",
time: "4 hours ago",
text: "UGX 900,000 just arrived! This is the best surprise ever! Thank you!",
upvotes: 200,
downvotes: 1
},
{
profilePic: "10.jpeg",
name: "Margret Owor",
time: "5 hours ago",
text: "Savanna Fibre, you’ve made my day! Just received UGX 850,000!",
upvotes: 180,
downvotes: 4
},
{
profilePic: "11.jpeg",
name: "Dan Atim",
time: "6 hours ago",
text: "UGX 1,000,000?! I’m speechless! Thank you so much, Savanna Fibre!",
upvotes: 250,
downvotes: 2
}

    // Add more comments as needed
];

function renderComments(limit) {
    const commentsContainer = document.getElementById("comments-container");
    commentsContainer.innerHTML = ""; // Clear existing comments
    for (let i = 0; i < limit && i < comments.length; i++) {
        const comment = comments[i];
        commentsContainer.innerHTML += `
            <div class="comment">
                <img src="${comment.profilePic}" alt="${comment.name}" width="50" height="50">
                <div class="comment-content">
                    <strong>${comment.name}</strong> <span class="small" style="color:orange">${comment.time}</span>
                    <p>${comment.text}</p>
                    <div class="comment-actions">
                        <span>👍 ${comment.upvotes} | 👎 ${comment.downvotes}</span>
                    </div>
                </div>
            </div>
        `;
    }
    if (comments.length > limit) {
        document.getElementById("show-more").classList.remove("hidden");
    } else {
        document.getElementById("show-more").classList.add("hidden");
    }
}

let limit = 15; // Start with 2 comments for demonstration
renderComments(limit);

document.getElementById("show-more").addEventListener("click", function() {
    limit += 5; // Increase limit to show more comments
    renderComments(limit);
});


