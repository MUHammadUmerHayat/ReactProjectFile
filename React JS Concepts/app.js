function first(callback) {
  setTimeout(function() {
    console.log("first ");
    callback();
  }, 0);
}

function second() {
  console.log("second");
}

first(second);

