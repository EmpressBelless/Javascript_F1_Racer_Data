promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve();
  }, 3000);
});

promise
  .then(() => console.log('finally finished!'))
  .then(() => console.log('I also ran!!!'))
  .catch(() => console.log('uh oh!!'));

  url = "https://jsonplaceholder.typicode123.com/posts123456/";
  fetch(url)
    .then(response => console.log(response))
    .catch(error => console.log('BAD', error));
    
    //to get access to the data we have to call a m ethod on it
    //this response takes readable json data. we have to call json. 