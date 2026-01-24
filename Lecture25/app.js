async function fetchUserData() {
  console.log("fetching user data");
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1",
    );
    // console.log(response);
    
    const user = await response.json();
    console.log("user loaded:", user.title);
  } catch (error) {
    console.log("fetching error", error);
  } finally {
    console.log("request complete");
  }
}
fetchUserData();
