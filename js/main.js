const RacingSeason = document.getElementById('season');
const RacingRound = document.getElementById('round');
console.log(RacingSeason.value, RacingRound.value);

const getRacing = async function(RacingSeason, RacingRound) {
  let response = await fetch(`https://ergast.com/api/f1/${RacingSeason}/${RacingRound}/driverStandings.json`)
  let data = await response.json()
  return data;
}


const form = document.querySelector("#RacingForm");
form.addEventListener('submit', async (event) => {
  event.preventDefault();
  console.log(event);
  let racing = event.target.season.value;
  let racingr = event.target.round.value;
  console.log(racing, racingr);

 

  let newHeader = document.createElement('h1');
  newHeader.innerHTML = getRacing.StandingsTable
  let subHeader = document.createElement('h5');
  subHeader.innerHTML = getRacing.StandingsLists
  let racingFaster = await getRacing(racing, racingr);
  console.log(racingFaster);
  document.body.append(newHeader);
  document.body.append(subHeader);
  // console.log(getRacing(RacingSeason, RacingRound)); 
})
