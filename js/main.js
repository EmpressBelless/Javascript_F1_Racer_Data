
const getRacing = async function(RacingName){
  let response = await fetch(`https://ergast.com/api/f1/${season}/${round}`)
  let data = await response.json()
  return data
}


const RacingForm = document.getElementById('RacingForm');

RacingForm.addEventListener('submit', async (event) => {
  event.preventDefault();
  let racing = event.target.RacingName.value;
  console.log(racing);
  // let racingfast = await getRacing(racing)

  // let newHeader = document.createElement('h1');
  // newHeader.innerHTML = racingfast.name
  // let subHeader = document.createElement('h5');
  // subHeader.innerHTML = `Height: ${racingfast.Driver} Weight: ${racingfast.weight}`

  document.body.append(newHeader);
  document.body.append(subHeader);
})