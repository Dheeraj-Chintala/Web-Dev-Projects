let res = [" pictures/captain.jpg", " pictures/hulk.jpeg", " pictures/ironman.jpg", " pictures/spider.jpg", " pictures/thor.png", " pictures/widow.png"," pictures/panther1.jpg"," pictures/deadpool.jpg"];
        let match = [];
        var score=0;
        var stat=0;
        let tilearr = [...res, ...res];
        tilearr.sort(() => Math.random() - 0.5);
        console.log(tilearr);
        const mainBoard = document.querySelector(".main");
        const secBoard = document.querySelector(".sec");

        tilearr.forEach((item, index) => {
            const tile = document.createElement("img");
            tile.className = "tile";
            tile.src = item;
            mainBoard.appendChild(tile);

            const cover = document.createElement("img");
            cover.className = "cover";
            cover.id = `cover-${index}`;
            cover.src = " pictures/black.jpg";
            secBoard.appendChild(cover);

            cover.addEventListener("click", () => tapping(index));
        });

        function tapping(index) {
            if (match.length < 2) {
                match.push(index);
                document.getElementById(`cover-${index}`).style.opacity = "0";
            }

            if (match.length === 2) {
                setTimeout(() => checkMatch(), 800);
            }
        }

        function checkMatch() {
            const [firstIndex, secondIndex] = match;

            if (tilearr[firstIndex] === tilearr[secondIndex]) {
                match = [];
                
               stat=stat+20; 
                score++;
                document.getElementById("status").innerHTML=stat;

            } else {
                document.getElementById(`cover-${firstIndex}`).style.opacity = "1";
                document.getElementById(`cover-${secondIndex}`).style.opacity = "1";
                match = [];
                stat=stat-5; 
                document.getElementById("status").innerHTML=stat;
            }
            if(score==8){
              document.getElementById("final").style.width="600px";
              document.getElementById("won").style.display="block";
              document.getElementById("yscore").style.display="block";
              document.getElementById("score").innerHTML=stat;
              document.getElementById("butt").style.display="block";


            }
        }
