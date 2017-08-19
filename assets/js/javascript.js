        var diamondNumber = 0;
        var rubyNumber = 0;
        var sapphireNumber = 0;
        var jadeNumber = 0;
        var targetNumber = 0;
        var matchWins = 0;
        var matchLosses = 0;
        var audio = new Audio("assets/sounds/computer-beep.mp3")
        var audio1 = new Audio("assets/sounds/crystal-music.m4a")

        var currentTotal = 0;

function bgMusic() {
audio1.play();
audio1.loop = true;

};

bgMusic();

function createTargetNumber() {

        // Random target number for game
        targetNumber = Math.floor(Math.random() *
                (50 - 30) + 30);
        $("#target-number").html("Target Number: " + targetNumber);
        $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "</h2");
        $("#matches-won").html("Wins : " +  matchWins);
        $("#matches-lost").html("Lost : " + matchLosses);
      
    }

    createTargetNumber();

    function createJewelNumbers() {


        //Random number for Diamond
        diamondNumber = (Math.floor(Math.random() *(20 - 15) + 15));

        //Randon number for Ruby
        rubyNumber = (Math.floor(Math.random() *(15 - 10) + 10));

        //Random number for Emerald
        jadeNumber = (Math.floor(Math.random() * (10 - 5) + 5));

        //Random Number for Sapphire
        sapphireNumber = (Math.floor(Math.random() * (5 - 0) + 1));

    }

    createJewelNumbers();
        

        
        function diamond() {

                audio.play();

                currentTotal = currentTotal + diamondNumber;

                $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "</h2");

                testWinCondition();
        };

        function ruby() {

                audio.play();


                currentTotal = currentTotal + rubyNumber;


                $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "</h2");

                testWinCondition();
        };

        function sapphire() {

                audio.play();

                currentTotal = currentTotal + sapphireNumber;


                $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "</h2");

                testWinCondition();
        };

        function jade() {

                audio.play();

                currentTotal = currentTotal + jadeNumber;


                $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "</h2");

                testWinCondition();
        };


        // *** Listeners ***
        $("#diamond-btn").on("click",diamond);
        $("#ruby-btn").on("click", ruby);
        $("#saph-btn").on("click", sapphire);
        $("#jade-btn").on("click", jade);

function testWinCondition() {


                if (currentTotal ==  targetNumber) {

                        matchWins++;
                        $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "  You Won!!</h2");
                        $("#matches-won").html("Wins : " + matchWins );
                        $("#matches-lost").html("Lost : " +  matchLosses );

                        //alert("You WIN");
                        
                        setTimeout(newGame, 1500);

                }
                if (currentTotal > targetNumber) {

                        matchLosses++;
                        
                        $("#matches-won").html("Wins : " +  matchWins );
                        $("#matches-lost").html("Lost : " + matchLosses );
                        $("#currentTotal").html("<h2>Current Total : </h2>" + "<h2>" + currentTotal + "  You Lost!!</h2");
                       // alert("You LOSE!");
                        setTimeout(newGame, 1500);
                       
                       

                } 
        };

function newGame() {

        
        
        currentTotal = 0;
        createTargetNumber();
        createJewelNumbers();


};


