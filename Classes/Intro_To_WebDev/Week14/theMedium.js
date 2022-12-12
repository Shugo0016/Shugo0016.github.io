const date = new Date();
console.log(date);
var curr_day = date.getDate();
let curr_month = date.getMonth() + 1;
let curr_year = date.getFullYear();
let curr_sport = "hockey";
matchTable.append("There are 5 sports to choose from... Hockey, Tennis, Basketball, Cricket, Soccer");

curr_day = curr_day.toString();
curr_month = curr_month.toString();
curr_year = curr_year.toString();

input_year = curr_year;
input_month = curr_month;
input_day = curr_day;

if(curr_day.length < 2) {
    curr_day = "0" + curr_day;
}
if(curr_month.length < 2) {
    curr_month = "0" + curr_month;
}



// Creates drop down effect 
function drop_down() {
    document.getElementById("myDropdown").classList.toggle("show");
}
  

  // Close the dropdown if the user clicks outside of it
window.onclick = function(e) {
if (!e.target.matches('.dropbtn')) {
    var myDropdown = document.getElementById("myDropdown");
    if (myDropdown.classList.contains('show')) {
        myDropdown.classList.remove('show');
    }
    }
}



// Adds current playing teams to webpage
function addMatchTile(date, match){
    //createing the tile div

    matchTable.append("Today's " + curr_sport + " Games:");

    var matchtile = document.createElement('div');

    matchtile.classList.add("match-tile");
    

    //creating the home match box
    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    //creating the image and the text
    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = match.T1[0].Nm;
    if (curr_sport != "tennis" && curr_sport != "cricket") {
        var homeTileTeamLogo = document.createElement('img');
        homeTileTeamLogo.src= 'https://lsm-static-prod.livescore.com/medium/' + match.T1[0].Img;
        homeTeam.appendChild(homeTileTeamLogo);
    }
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");
    //creating the image and the text
    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML = match.T2[0].Nm;
    if (curr_sport != "tennis" && curr_sport != "cricket") {
        var awayTileTeamLogo = document.createElement('img');
        awayTileTeamLogo.src='https://lsm-static-prod.livescore.com/medium/' + match.T2[0].Img;
        awayTeam.appendChild(awayTileTeamLogo);
    }
    awayTeam.appendChild(awayTileTeamName);

    //createing the date
    var game_date = document.createElement('p');
    game_date.innerHTML = date;

    var score = document.createElement('p');
    score.innerHTML = "5 - 4";


    //append all the element to the parent
    matchtile.appendChild(homeTeam);
    matchtile.appendChild(game_date);
    matchtile.appendChild(score);
    matchtile.appendChild(awayTeam);
    matchtile.addEventListener('click', function handleClick() {
        console.log("EventClicked");
    });

    matchTable.appendChild(matchtile);

}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe7d7ad00emshe359edb059fd137p12f1cbjsna3a34fab4054',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

// Gets user input and stores it in variables
function othername() {
    var input_year = document.getElementById("userInput1").value;

    var input_month = document.getElementById("userInput2").value;

    var input_day = document.getElementById("userInput3").value;
}

// Switches sport based on selected button in the drop down menu
function switch_sports(sport_name) {
    curr_sport = sport_name;
    while (matchTable.firstChild) {
        matchTable.removeChild(matchTable.firstChild);
    }
    // console.log(curr_sport);

    fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=' + curr_sport +'&Date=' + curr_year + curr_month + curr_day + '&Timezone=-7', options)
	.then(response => {
        return response.json()
    })
	.then((data) => {
        var todays_games = data.Stages[0].Events;
        console.log("DATA is: ", todays_games);

        for (var i = 0; i < todays_games.length; i++) {

            
            var gameTime = todays_games[i].Esd;
            var team1 = todays_games[i].T1[0].Nm;
            var team2 = todays_games[i].T2[0].Nm;
            gameTime = gameTime.toString();

            var year = "";
            var month = "";
            var day = "";
            var hour = "";
            var min = "";
            var gameDay = "";


            // Breaking weird number that represents the date representing date into pieces
            for(var j = 0; j < 12; j++) {
                if (j >= 0 && j < 4) {
                    year += gameTime[j];
                }
                else if(j >= 4 && j < 6) {
                    month += gameTime[j];
                }
                else if(j >= 6 && j < 8) {
                    day += gameTime[j];
                }
                else if(j >= 8 && j < 10) {
                    hour += gameTime[j];
                }
                else if(j >= 10 && j < 12) {
                    min += gameTime[j];
                }
            }

            gameDay = "Date: " + month + "/" + day + "/" + year + " Time: " + hour + ":" + min;

            console.log(team1);
            console.log(team2);
            console.log(gameDay);

            addMatchTile(gameDay,todays_games[i]);
        }
    })
	.catch(err => console.error(err));
}