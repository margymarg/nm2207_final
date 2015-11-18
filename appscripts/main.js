require(
    [],
    function () {

        //GET ELEMENTS BY ID  - DOM ELEMENTS
        var paper = new Raphael(document.getElementById("mySVGCanvas"));
        var pWidth = paper.canvas.offsetWidth;
        var pHeight = paper.canvas.offsetHeight;
        var nav = new Raphael(document.getElementById("nav"));
        var aside = new Raphael(document.getElementById("aside"));
        console.log("Hello Amazing One");


        //ASIDE STORES GAME STATUS
        var scoreText = aside.text(95,40, 'GAME STATUS\n');
        scoreText.attr({
            fill: "white",
            'font-size': 19,
        });
        
        scoreText.hide();

        //ELEMENTS CREATED TO REFLECT STATE OF AUDIO IN GAME

        //MUTEBOX IS CREATED IN ASIDE BAR
        var muteBox = aside.rect(44, 180, 110 ,35);
        muteBox.attr({
        "fill":"black",
        "fill-opacity":0.5,
        "stroke":"#54E5A8",
        "stroke-width":2,
        });

        muteBox.show(); 

        //MUTE TEXT IS CREATED TO PROMPT USERS TO MUTE SOUND- TO BE SHOWN IN MUTE BOX 
        var muteText = aside.text(98,198, 'Mute sound\n');
        muteText.attr({
            fill: "white",
            'font-size': 14,
        });

        //MUTED TEXT IS CREATED TO REFLECT MUTED SOUND
        var mutedText = aside.text(98,198, 'Muted sound\n');
        mutedText.attr({
            fill: "white",
            'font-size': 14,
        });

        //INITIAL STATE OF MUTE ELEMENTS
        mutedText.hide();
        muteText.show();

        //GLOW ON MUTE BOX WHEN DURING MOUSEOVER
        muteBox.node.addEventListener("mouseover", function(){
             muteBox.attr({
                "stroke":"white"
            })
        });

        muteBox.node.addEventListener("mouseout", function(){
             //ADDITIONAL STEP TAKEN HERE TO ENSURE THAT THE COLOUR REVERTS ACCORDINGLY TO 
             //THE STATE OF THE MUSIC AT THE INSTANCE
             if(audio.muted === true){
                    muteBox.attr({
                    "stroke":"#E577DB"
                    })
                }

            else{
                    muteBox.attr({
                    "stroke":"#54E5A8"
                    })
              }
        });
        //END GLOW EFFECT

        //LISTENS FOR EVENTS ON MUTE BOX AND EXECUTES FUNCTIONS ACCORDINGLY
        var muteCount =0; //INITIALISE MUTE COUNT

        muteBox.node.addEventListener("click", function(){
           muteCount++; //COUNT INCREASES EVERYTIME THE MUTEBOX IS CLICKED

           //IF - ELSE STATEMENT TO ALTER STATE OF MUSIC: MUTED AND MUTED
           //CONDITION ACCOUNTS FOR WHEN THE NUMBER OF CLICKS ON THE MUTED BOX 
           //IS ODD (WHEN USER WANTS MUSIC BE BE MUTED)

           if(muteCount%2 !==0){
            //IF CONDITION IS TRUE, MUTED BOX REACTS BY CHANGING THE COLOUR OF THE MUTED BOX AND THE TEXT INSIDE
            muteBox.attr({
                "stroke":"#E577DB",
                "fill" :"#243538",
            })

            audio.muted=true;  //MUSIC IS MUTED
            muteText.hide(); //CHANGE OF TEXT
            mutedText.show(); 
            }
            else{ //ELSE STATMENT IS EXECUTED FOR WHEN THE COUNT NUMBER 
                  //IS EVEN (WHEN USER WANTS MUSIC BE BE UNMUTED)
                  //MUTE BOX REVERTS BACK TO ITS ORIGINAL COLOUR AND TEXT
                muteBox.attr({
                "stroke":"#54E5A8",
                "fill" :"black",
                 })
                 audio.muted=false;  //MUSIC IS UNMUTED
                 mutedText.hide();
                 muteText.show();   

            }  
        });


         //TEXT FOR NAV - NAV STORES PROFILE NAME AND PROFILE PICTURE
         var navText = nav.text(50, 40, 'Welcome\n');
         navText.attr({
            fill: "white",
            'font-size': 19,
        });

        navText.hide();

        var profileText = nav.text(40, 70, 'Profile :\n');

        profileText.hide();

         profileText.attr({
            fill: "gold",
            'font-size': 16,
        });

         //SETTING UP SPACE FOR PROFILE NAME
         var nameBox = nav.rect(30, 100, 140, 25);
         nameBox.attr({

            'stroke-width': 1,
            'fill': "white"
        });

        //SETTING UP SPACE FOR PROFILE PIC
        var profilePic = nav.rect(50, 140,100, 100);
        profilePic.attr({
            stroke: "black",
            'stroke-width': 5
        });

        profilePic.hide();
        nameBox.hide();

        //INSTRUCTION TEXT FOR GAME 1
        var Instr1Text = paper.text(325, 100, 'Your are finally here! \n \n We need your help in saving the lives of the people in PLANET 210.');
        Instr1Text.attr({
            fill: "white",
            'font-size': 19,
        });

        var Instr11Text = paper.text(325, 200, 'Your task: \n \n Deter the **RED Asteroids from attacking you in the galaxy \nand reach the planet safely to save the people \nMaximum collision into asteriods : 3 ! \n You would require around 15 seconds to complete this task given your abilities');
        Instr11Text.attr({
            fill: "#ffd700",
            'font-size': 15,
        });

        //INSTRUCTIONS BACKGROUND FOR GAME ONE
        var instructions1 = paper.rect(0, 0, pWidth, pHeight);
        instructions1.attr({
            stroke: "black",
            fill: "url('http://cmster.com/media/aMKMBZZc4cn3fdEpVF8piUHla9KFjmnHDSjwYtpExcUwgC1nlpMH9GLFFiuBOU3R.png')",
            'fill-opacity': 0.2
        });

        //CREATE START BUTTON FOR GAME ONE
        var startButton1 = paper.rect(pWidth/2 -90, 270,170, 50);
        startButton1.attr({
            stroke: "grey",
            fill: "black",
            'fill-opacity':0.5
        });

        //CREATE TEXT FOR BUTTON
        var starttext1 = paper.text(320, 295, 'Let the battle begin !');
        starttext1.attr({
            fill: "#FF604E",

            'font-size': 16,
        });

        console.log("Instructions set!");

        //HIDE ALL BUTTONS AND TEXT ON LANDING
        instructions1.hide();
        startButton1.hide();
        starttext1.hide();
        Instr1Text.hide();
        Instr11Text.hide();


        //CHARACTER SELECTION PROCESS
        var charChoose = paper.text(330, 40, 'Choose Your Character');
        charChoose.attr({
            fill: "#54E5A8",
            'font-size': 25,
        });
        charChoose.hide();


        ///////////////CREATE CONTAINER FOR CHARACTERS AND ADDING EVENT LISTENERS///////////////////////

        //CHAR ONE: SUPERMAN
        var charIcon1= paper.rect(100, 85, 200,250);
        charIcon1.attr({
            fill: "url('http://static.pinkisthenewblog.com/uploads/2013/03/09/030913_supermanartfeat-250x250.jpg')",
            opacity: 0.8
        });


        //CREATES A GLOW WHEN INTERACTED WITH
        charIcon1.node.addEventListener("mouseover", function(ev){
         charIcon1.attr({
            'stroke': "#44FFAB",
            'stroke-width': 5,
            'stroke-linejoin': 'round',
            
         });
       });

        charIcon1.node.addEventListener("mouseout", function(ev){
            charIcon1.attr({
               stroke: "#006400",
               'stroke-width': 5,
               'stroke-linejoin': 'round',

           });

        });

        charIcon1.node.addEventListener('click', function(ev){
            charChosen= charIcon1;
            charIcon2.hide();
            charIcon1.hide();
            console.log("Character 1 is chosen");
           
            setup1();  
            //UPDATE PROFILE PICTURE IN NAV ELEMENT BASED ON USER'S CHARACTER CHOICE 
            profilePic.attr({
                fill: "url('http://www.emoticonswallpapers.com/avatar/movies/SuperMan.jpg')"
            })
        });


        //CHARACTER TWO : IRON MAN
        var charIcon2= paper.rect(370, 85, 200,250);
        charIcon2.attr({
            fill: "url('http://3dprintingindustry.com/wp-content/uploads/2014/07/military-hires-Legacy-Effects-to-work-on-Iron-Man-suit.png')",
            opacity: 0.8
        });

        //CREATES A GLOW WHEN INTERACTED WITH
        charIcon2.node.addEventListener("mouseover", function(ev){
         charIcon2.attr({
            'stroke': "#44FFAB",
            'stroke-width': 5,
            'stroke-linejoin': 'round',
            
        });
     });

        charIcon2.node.addEventListener("mouseout", function(ev){
            charIcon2.attr({
               stroke: "#006400",
               'stroke-width': 5,
               'stroke-linejoin': 'round',

           });

        });
        //END GLOW EFFECT

        //FUNCTIONS EXECUTED WHEN CHARACTER 2 IS CHOSEN
        charIcon2.node.addEventListener("click", function(){
            charChosen= charIcon2;
            charIcon2.hide();
            charIcon1.hide();
            console.log("Character 2 is chosen");
            setup1();
           
            //UPDATE PROFILE PICTURE IN NAV ELEMENT BASED ON USER'S CHARACTER CHOICE 
            profilePic.attr({
                fill: "url('http://www.ecouterre.com/wp-content/uploads/2012/05/mark-pearson-cardboard-diy-iron-man-1-100x100.jpg')"
            })
        });

        //START GAME ONE INSTRUCTIONS
            
            var setup1 = function(){
            instructions1.show();
            Instr1Text.show();
            Instr11Text.show();
            startButton1.show();
            starttext1.show();
            charChoose.hide();
            profilePic.show();
            };

        charIcon2.hide();
        charIcon1.hide();
        console.log("Characters set!");
        ///////////////////////////////////END OF CHARACTER SETUP//////////////////////////////////


        //CHARACTER SELECTED
        var charChosen;

        //LANDING PAGE SETUP
        var ready = function(){    
                 
           instructions1.hide();
           Instr1Text.hide();
           Instr11Text.hide();
           navText.hide();
           profileText.hide();
           //Instr2Text.hide();
           //instructions2.hide(); 

           var name = prompt("Welcome Agent \nPlease enter your name"); //TO APPEAR WHEN USER LANDS ON PAGE 
           console.log("Name : " + name);

           if(name !== null){

           var nameAppear = nav.text(95,111, name); //NAME TO BE REFLECTED IN NAV (LEFT PANEL)
           nameAppear.attr({
            'font-size': 13,
            });

           secondLanding();
            }else{
                //DO WHILE LOOP TO ENSURE THAT USER HAS INPUT NAME
                do{
                var name = prompt("Welcome Agent \nPlease enter your name"); //TO APPEAR WHEN USER LANDS ON PAGE 
                console.log("Name : " + name);
                } while(name === null || name === ""); //'OR' OPERATOR USED HERE

                if(name!= null){
                var nameAppear = nav.text(95,111, name); //NAME TO BE REFLECTED IN NAV (LEFT PANEL)
                
                nameAppear.attr({
                'font-size': 13,
                });
                
                secondLanding();
                }
            } 
        } 

       //SET PAGE AFTER PROMPT TO CHOOSE CHARACTER
       var secondLanding = function(){
           paper.innerHTML =("Please choose your character");
           charIcon1.show();      
           charIcon2.show();
           charChoose.show();
           navText.show();
           profileText.show();
           nameBox.show();
           scoreText.show();
       };

      /**
        //INSTRUCTIONS BACKGROUND FOR GAME TWO
        var Instr2Text = paper.text(325, 200, 'Your task: \n \n SAVE THE HUMANS BY CIRCLING AROUND THEM AND AVOID THE RED ENEMIES\n');
        Instr2Text.attr({
            fill: "#ffd700",
            'font-size': 15,
        });

    
        //INSTRUCTIONS BACKGROUND FOR GAME TWO
        var instructions2 = paper.rect(0, 0, pWidth, pHeight);
        instructions2.attr({
            stroke: "black",
            fill: "url('http://www.coyoteblog.com/wp-content/uploads/2012/08/continents.jpg')",
            'fill-opacity': 0.2
        });
        Instr2Text.hide();
        instructions2.hide();
     **/

         /////////////////// ALL BASIC REQS BEFORE GAME ONE SHOULD BE CLEARED ///////////////////////////


        //START BUTTON IS PUSHED FOR GAME ONE
        var endgame1 =false;
        var gameOne=false;
        // var gameTwo =false;
        var starttime; //TO KEEP TRACK OF TIME

        //SETUP TO GET READY FOR GAMEPLAY
        var gameStartSetup1 = function(){
            instructions1.hide();
            Instr1Text.hide();
            Instr11Text.hide();
            starttext1.hide();
            startButton1.hide();
            gameOne =true; 
        };

        var lives1 =3; //SETTING LIVES: 3

       //CREATES A GLOW WHEN INTERACTED WITH
        startButton1.node.addEventListener("mouseover", function(){
            startButton1.attr({
                'stroke': "yellow",
                'stroke-width': 1.5,
                
            });
        });

        startButton1.node.addEventListener("mouseout", function(){
            startButton1.attr({
                'stroke': null,
                'stroke-width': 0,
                
            });
        });

        //END GLOW EFFECT

        //GAME ONE OFFICIALLY STARTS WHEN THIS START BUTTON IS CLICKED
        startButton1.node.addEventListener("click", function(){
            gameStartSetup1();
            game1Start();
         
            console.log("startiming for 15 seconds")
        });


        //CREATE 'LANDING' PLANET 210
        var planet =paper.circle(pWidth + 20, 0, 200);
        planet.attr({
            'fill': "url('http://previews.123rf.com/images/photopiano/photopiano1403/photopiano140300104/26698323-Marble-background-light-pink-and-orange-colors-pattern-textured-wallpaper-expensive-material-for-ext-Stock-Photo.jpg')",
            'fill-opacity': 0.4,
        });

        planet.hide();

    ////////////////////////////////////////GAME ONE ///////////////////////////////////////////////
       
        //FUNCTION TO BE EXECUTED WHEN MISSION IS ACCOMPLISHED
        var endSuccess = function(){
            endGame1=true;
            alert("Time's up!\n You managed to land on Planet 210 safely");
            gameOne =false;
            successText(); 

        }


       ///////////////////////////////////SUCCESS TEXT/////////////////////////////
        var successText = function(){

             //UPDATE STATUS WHEN GAME IS COMPLETED SUCCESSFULLY
                var Game1SatusBox = aside.rect(20, 85, 160, 35);
                Game1SatusBox.attr({            
                    fill: "red",
                    'fill-opacity': 0.8
                });

                var Game1Satus = aside.text(100, 102, 'GAME ONE CLEARED');
                Game1Satus.attr({
                    fill: "white",
                    'font-size': 14,
                });

                console.log("Time is up! Game one ends");

                //CLEARS THE MAIN GAME CANVAS WHEN GAME ENDS SUCCESSFULLY
                paper.clear();

                //DETAILS OF MESSAGE TO APPEAR ON MAIN GAME CANVAS WHEN GAME ENDS SUCCESFULLY
                //CHANGE BACKGROUND OF MAIN CANVAS
                var endbg =paper.rect(0,0 ,pWidth, pHeight)
                endbg.attr({
                    "fill": "url('http://mikeduffy.typepad.com/.a/6a00d8341e5ea453ef0133ec937798970b-800wi')"
                });                  
               

                //CREATE RECTANGLE FOR MESSAGE IN MAIN CANVAS WHEN GAME ENDS SUCCESFULLY
                var mesBox = paper.rect(pWidth/2- 123, 150, 250, 50);
                mesBox.attr({
                    fill: "grey",
                    "fill-opacity": 0.5,
                    "stroke": "black",

                });
                //CREATE MESSAGE IN MAIN CANVAS WHEN GAME ENDS SUCCESFULLY
               var starttext2 = paper.text(pWidth/2 -1, 172, 'MISSION ACCOMPLISHED');
                starttext2.attr({
                    fill: "white",
                    'font-size': 13,
                });

                //CREATE MESSAGE IN MAIN CANVAS WHEN GAME ENDS SUCCESFULLY 
                //TO PROMPT USER TO REPLAY
                var replayBox = paper.rect(pWidth/2- 123,230, 250, 50);
                replayBox.attr({
                    fill: "black",
                });

                replayBox.node.addEventListener("click", function(){
                document.location.reload(true);
                })

                //CREATE MESSAGE IN MAIN CANVAS WHEN GAME ENDS SUCCESFULLY
                //TO PROMPT USER TO REPLAY
                var replaytext1 = paper.text(pWidth/2 -1, 251, 'Replay');
                replaytext1.attr({
                    fill: "red",
                    'font-size': 14,
                });
                
        }

        ////////////////////////////////GAME FUNCTION ///////////////////////////////

        var game1Start =function(){
            gameOne= true;
            gameTwo =false;

            //CREATE GALAXY BACKGROUND ON GAME CANVAS
            var background1 = paper.rect(0, 0, pWidth, pHeight)
            background1.attr({
              fill: "url('http://www.hdwallpapersnew.net/wp-content/uploads/2015/01/nebula-blue-wide-new-wallpapers-for-desktop-free-downlaod.jpg')",
              'fill-opacity': 0.5,
            });
            
            //FUNCTION CALLS PLANET TO APPEAR AFTER 11 SECONDS INTO GAME PLAY
            var planetAppear = setTimeout(function(ev){ 
                planet.show();
            },11000);
            


              //TIMER FOR THE ENTIRE DURATION OF THE GAME 
            //INCLUDES OTHER FUNCTIONS TO BE EXECUTED  
             var timer = setTimeout(function(ev){ 
                 endSuccess();
             }, 15000); //TO SET THE MAIN GAME RUNNING FOR A TOTAL TIME OF 15SECONDS INCLUSIVE OF THE
                       //PLANET'S APPEARANCE

            starttime = Date.now(); //SET START TIME

            console.log("timer start");

            console.log("Game one working");

            var numDots=80; //INITIALISING NUMDOTS TO BE USED LATER IN FOR LOOP

            //SETTING UP DOTS AKA AESTERIODS IN THE GAME
            var dot = []; //CREATING ARRAY OF DOTS

            //FOR LOOP TO CREATE DOTS AND ASSIGN ATTRIBUTES INDIVDUALLY
            for(i=0; i<numDots; i++){
                dot[i]=paper.circle(pWidth/2, pHeight/2, 5);
                dot[i].attr({"fill": "red" , 
                    'fill-opacity' : 0.8, 
                    'stroke': "gold", 
                    'stroke-width': 1, 
                    'stroke-opacity': 0.8});

                //ADD PROPERTIES TO DOT TO KEEP TRACK OF ITS STATE
                dot[i].xpos=pWidth-200;
                dot[i].ypos=pHeight-pHeight+1;
                //UPDATE RATE OF THE MOVING DOTS
                //MAPPING OF RANGES ([0,1] -> [-5,5])
                dot[i].xrate= -5+10*Math.random();
                dot[i].yrate= -7+14*Math.random();
                //CREATING EVENT LISTERNERS TO 'LISTEN' IN THE EVENT THAT THE MOUSE
                //"COLLIDES" WITH THE AESTERIODS
                dot[i].node.addEventListener('mouseover', function(){

                    lives1--; //ONE LIFE WILL BE LOST: RECALL THERE ARE ONLY 3 LIVES
                    console.log("Life(s) lost");
                    if(lives1 < 1){ //IN THE EVENT THAT THE 'LIVES' LEFT IS 0, ONEEND FUNCTION IS CALL AND 
                      clearTimeout(timer);   //GAME ENDS
                      oneend();             
                  }
              });

            }

        //DRAW ROUTINE SETUP
        var draw = function(){
            i=0;
            //WHILE LOOP TO LOOP THROUGH ALL DOTS
            while(i<numDots){
                //UPDATE POSITION OF THE DOTS
                dot[i].xpos += dot[i].xrate;
                dot[i].ypos += dot[i].yrate;

                //ACTUALLY SHIFTING THE DOTS USING STATE VARIABLES ASSIGNED EARLIER
                dot[i].attr({'cx': dot[i].xpos, 'cy': dot[i].ypos});
                i++;
            }
        }

        //TO CALL DRAW PERIODICALLY
        setInterval(draw, 20);


        //SETUP OF FOUR DIFFERENT DOT EMITTERS AS AESTERIODS 'SOURCES'
        //EMMITERS EMIT AT DIFFERENT RATES

           //EMITTER LOCATED AT THE TOP RIGHT HAND CORNER
           var nextToEmit=0;

           setInterval(function(){
                dot[nextToEmit].xpos=pWidth - 150;
                dot[nextToEmit].ypos= -5;
                 //CHANGING RATE OF DOTS
                //MAPPING OF RANGES ([0,1] -> [-5,5])
                dot[nextToEmit].xrate= -5+10*Math.random(); //ASSIGN RANDOM RATES
                dot[nextToEmit].yrate= -7+14*Math.random(); //ASSIGN RANDOM RATES

                nextToEmit=(nextToEmit+1) % numDots;

            },19);

           //EMITTER LOCATED AT THE TOP LEFT HAND CORNER
           var nextToEmit1=0;

           setInterval(function(){
                dot[nextToEmit1].xpos=pWidth-500;
                dot[nextToEmit1].ypos=-5;
                //CHANGING RATE 
                dot[nextToEmit1].xrate= -5+10*Math.random();
                dot[nextToEmit1].yrate= -7+14*Math.random();

                nextToEmit1=(nextToEmit1+1) % numDots;

            },80);

            //EMITTER LOCATED AT THE BOTTOM LEFT HAND CORNER
            var nextToEmit2=0;

            setInterval(function(){
                dot[nextToEmit2].xpos=pWidth-500;
                dot[nextToEmit2].ypos=pHeight+5;
                 //CHANGING RATE OF DOTS
                dot[nextToEmit2].xrate= -5+10*Math.random();
                dot[nextToEmit2].yrate= -7+14*Math.random();

                nextToEmit2=(nextToEmit2+1) % numDots;

            },50);

        //EMITTER LOCATED AT THE BOTTOM RIGHT HAND CORNER
            var nextToEmit3=0;

            setInterval(function(){
                dot[nextToEmit3].xpos=pWidth-100;
                dot[nextToEmit3].ypos=pHeight+6;
                //CHANGING RATE OF DOTS
                dot[nextToEmit3].xrate= -5+10*Math.random();
                dot[nextToEmit3].yrate= -7+14*Math.random();

                nextToEmit3=(nextToEmit3+1) % numDots;

            },100);

        };

        //SETUP ONEEND FUNCTION TO BE EXECUTED WHEN ALL LIVES ARE LOST DURING GAMEPLAY
        var oneend=function(timer){
            gameOne1 =false;
            gameTwo =true;

            console.log("No more lives for game one");

            //ALERT SENT OUT TO USER
            alert("You lost all 3 lives");

            //RESET THE MAIN GAME CANVAS
            paper.clear();

            //STOP THE TIMER MEANT TO TIME THE ENTIRE GAME
            clearTimeout(timer);
            lostText();
        };

                    

            //TO APPEAR WHEN GAME ONE IS LOST
            var lostText =function(){
                 //CHANGE BACKGROUND OF MESSAGE RECTANGLE IN THE MAIN GAME CANVAS WHEN ALL LIVES ARE LOST
                var endbg =paper.rect(0,0 ,pWidth, pHeight)
                endbg.attr({
                "fill": "url('http://pcwallart.com/images/universe-wallpaper-2.jpg')",
                "fill-opacity": 0.8

                 });

                //CREATE RECTANGLE FOR MESSAGE IN MAIN CANVAS WHEN GAME ENDS WHEN THERE ARE NO MORE LIVES
                var mesBox = paper.rect(pWidth/2- 150, 150, 300, 50);
                    mesBox.attr({
                    fill: "grey",
                    "fill-opacity": 0.5,
                    "stroke": "black",

                    });

                 mesBox.node.addEventListener("click", function(){
                    mesBox.hide();
                    starttext2.hide();
                    Game1SatusBox.hide();
                    Game1SatusFail.hide();
                    document.location.reload(true);
                    setup1();

                    });

                    //MESSAGE PRINTED IN THE RECTANGLE IN THE MAIN GAME CANVAS WHEN ALL LIVES ARE LOST
                    var starttext2 = paper.text(pWidth/2 -5, 176, 'Try again ! ');
                    starttext2.attr({
                        fill: "white",
                        'font-size': 18,
                    });

                    //UPDATE GAME STATUS IN ASIDE ELEMENT ON THE RIGHT

                    //BOX CREATED IN ASIDE
                    var Game1SatusBox = aside.rect(20, 85, 160, 35);
                    Game1SatusBox.attr({            
                     fill: "red",
                     'fill-opacity': 0.8
                 });

                    //TEXT CREATED IN ASIDE
                    var Game1SatusFail = aside.text(100, 102, 'GAME ONE FAILED');
                    Game1SatusFail.attr({
                     fill: "white",
                     'font-size': 14,
                 });
                }

         //MUSIC DURING GAMEPLAY
         var audio = new Audio("resources/start.mp3");
            audio.play();
            audio.loop=true; //LOOP WHEN MUSIC ENDS  

             
                ready();

               
 });

//song credits: https://www.youtube.com/watch?v=8VGJGXMUhmc
//END OF CODE
//Done by Margaret 2015