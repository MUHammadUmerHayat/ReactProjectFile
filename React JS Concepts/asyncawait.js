async function getData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await response.json();
    console.log(data);
    console.log("started");
  } catch (error) {
    console.log(error);
    console.log("ended");
  }finally{
      console.log("finally executed")
  }
}
async function get() {
  await getData();
}
get();
