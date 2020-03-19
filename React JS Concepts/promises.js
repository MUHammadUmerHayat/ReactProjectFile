console.log("started");

const myPromise = new Promise(function(resolve, reject) {
  if (20 > 10) {
    resolve([
      {
        id: 1,
        name: "Manoj"
      },
      {
        id: 2,
        name: "Manu"
      },
      {
        id: 3,
        name: "Janu"
      }
    ]);
  } else {
    reject("20 is not greater than 10");
  }
});

myPromise
  .then(function(data) {
    console.log("data ", data);
    const filteredData = data.filter(value => {
      return value.id > 1;
    });
    console.log("filtered Data ", filteredData);
     return filteredData;
  })
  .then(function(fData) {
    console.log("fdata ", fData);
    const d =  fData.filter(value => {
      return value.id > 2;
    });
    return d
  })
  .then(function(thirdThenData) {
    console.log("third then ", thirdThenData);
    try{

    }catch(error){

    }
  })
  .catch(function(error) {
    console.log("error", error);
  });

console.log("ended");
