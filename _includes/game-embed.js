
            function loadMainGame(){
            var html = `<iframe class="game-iframe iframeloader" id="game-area" src="https://webmagz.github.io/{{ include.id }}" width="480" height="800" scrolling="none" frameborder="0" allowfullscreen="" tabindex="0"></iframe>`;
            document.getElementById("loadgame").innerHTML = html;
		     // Show the fullscreen button after loading the game
            document.getElementById("fullscreenButton").style.display = "inline-flex";
		    
            document.getElementById('loadgame').scrollIntoView();
            }
            function open_fullscreen() {
                let game = document.getElementById("game-area");
                if (game.requestFullscreen) {
                    game.requestFullscreen();
                } else if (game.mozRequestFullScreen) { /* Firefox */
                    game.mozRequestFullScreen();
                } else if (game.webkitRequestFullscreen) { /* Chrome, Safari and Opera */
                    game.webkitRequestFullscreen();
                } else if (game.msRequestFullscreen) { /* IE/Edge */
                    game.msRequestFullscreen();
                }
                };