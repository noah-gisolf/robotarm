<!DOCTYPE html>
<html>
<head>
    <title>Robot Arm Testing</title>
</head>
<body style="padding: 0; margin: 0;">
    <canvas id="canvas" width="800" height="600"></canvas>
    <script src="../robot-arm.js"></script>
    <script type="text/javascript">
        var canvas = document.getElementById("canvas");
        robotArm.initialize(canvas);
        // Set the speed somewhat higher
        robotArm.speed = 200;
        // Load the level: exercise 1
        robotArm.loadLevel("exercise 1");
        // Create a keyvalue pair for each color mapped to a column
        var colorMap = {
            red: 9,
            blue: 8,
            white: 7,
            green: 6
        };
        // For 5 columns do
        for (var i = 0; i < 5; i++) {
            // As long as we scan a color
            while (true) {
                // Grab try grabbing the block beneath
                robotArm.grab();
                // Get the color of the block
                var color = robotArm.scan();
                // If there is no color, in other words no block grabbed, move on.
                if (color == null) {
                    break;
                }
                // Get the distance to the mapped column for the color, and decrease it by where the arm is at now
                var distance = colorMap[color] - i;
                // Move to that position
                for (var x = 0; x < distance; x++) robotArm.moveRight();
                // Drop the block there
                robotArm.drop();
                // Move back to where we came from
                for (var x = 0; x < distance; x++) robotArm.moveLeft();
            }
            // No blocks were found, moveright.
            robotArm.moveRight();
        }
    </script>
</body>
</html>