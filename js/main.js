const getRacing = async function(season, round) {
  let response = await fetch(`https://ergast.com/api/f1/${season}/${round}/drivingStandings.json`)
  let data = await response.json()
  return data
}

const RacingSeason = document.getElementById('season');
const RacingRound = document.getElementById('round');

RacingSeason.addEventListener('submit', async (event) => {
  event.preventDefault();
  let racing = event.target.season.value;
  console.log(racing);
})

let
RacingRound.addEventListener('submit', async (event) => {
  event.preventDefault();
  let racingr = event.target.round.value;
  console.log(racingr);
} )



  let newHeader = document.createElement('h1');
  newHeader.innerHTML = racingfast.StandingsTable
  let subHeader = document.createElement('h5');
  subHeader.innerHTML = racingfast.StandingsLists

  document.body.append(data);

