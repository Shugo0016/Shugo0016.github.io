

function addMatchTile(date, match){
    //createing the tile div
    var matchtile = document.createElement('div');
    matchtile.classList.add("match-tile");

    //creating the home match box
    var homeTeam = document.createElement('div');
    homeTeam.classList.add("team");
    //creating the image and the text
    var homeTileTeamName = document.createElement('p');
    homeTileTeamName.innerHTML = match.T1[0].Nm;
    var homeTileTeamLogo = document.createElement('img');
    // homeTileTeamLogo.src= "";
    homeTeam.appendChild(homeTileTeamLogo);
    homeTeam.appendChild(homeTileTeamName);

    var awayTeam = document.createElement('div');
    awayTeam.classList.add("team");
    //creating the image and the text
    var awayTileTeamName = document.createElement('p');
    awayTileTeamName.innerHTML = match.T2[0].Nm;
    var awayTileTeamLogo = document.createElement('img');
    // awayTileTeamLogo.src=match.T2[0].Img;
    awayTeam.appendChild(awayTileTeamLogo);
    awayTeam.appendChild(awayTileTeamName);

    //createing the score
    var score = document.createElement('p');
    score.innerHTML = date;

    //append all the element to the parent
    matchtile.appendChild(homeTeam);
    matchtile.appendChild(score);
    matchtile.appendChild(awayTeam);

    matchTable.appendChild(matchtile);
}

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'fe7d7ad00emshe359edb059fd137p12f1cbjsna3a34fab4054',
		'X-RapidAPI-Host': 'livescore6.p.rapidapi.com'
	}
};

fetch('https://livescore6.p.rapidapi.com/matches/v2/list-by-date?Category=hockey&Date=20221207&Timezone=-7', options)
	.then(response => {
        return response.json()
    })
	.then((data) => {
        var todays_games = data.Stages[0].Events;
        console.log("DATA is: ", todays_games);

        for (var i = 0; i < todays_games.length; i++) {

            // Breaking weird number representing date into pieces
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

            // yyyyMMddHHmmss
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