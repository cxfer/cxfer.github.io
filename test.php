<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Processing Script</title>
    <style>
        body {
            font-family: Arial, sans-serif;
        }

        .vid {
            width: 300px;
            margin: 50px auto;
            padding: 20px;
            background-color: #f0f0f0;
            border: 1px solid #ccc;
            text-align: center;
            display: none; /* Hidden by default */
        }

        .process-item {
            margin: 10px 0;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }

        .status {
            color: red;
            font-weight: bold;
        }

        .status.tick {
            color: green;
        }
    </style>
</head>
<body>

<div class="vid" id="processContainer">
    <div class="process-item">
        <span>Checking answers...</span>
        <span class="status" id="checkAnswers">Processing</span>
    </div>
    <div class="process-item">
        <span>Verifying IP address...</span>
        <span class="status" id="verifyIP">Processing</span>
    </div>
    <div class="process-item">
        <span>Checking eligibility...</span>
        <span class="status" id="checkEligibility">Processing</span>
    </div>
</div>

<button onclick="startProcessing()">Start Processing</button>

<script>
    function startProcessing() {
        // Make the vid class visible
        document.getElementById("processContainer").style.display = "block";

        // Simulate the processing steps
        setTimeout(() => {
            document.getElementById("checkAnswers").textContent = "✔";
            document.getElementById("checkAnswers").classList.add("tick");
        }, 2000);

        setTimeout(() => {
            document.getElementById("verifyIP").textContent = "✔";
            document.getElementById("verifyIP").classList.add("tick");
        }, 4000);

        setTimeout(() => {
            document.getElementById("checkEligibility").textContent = "✔";
            document.getElementById("checkEligibility").classList.add("tick");
        }, 6000);
    }
</script>

</body>
</html>
