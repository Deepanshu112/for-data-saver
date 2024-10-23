import './App.css';


function App() {

  function Submit(e) {
    const formEle = document.querySelector("form");
    const formDatab = new FormData(formEle);
    fetch(
      "your Google sheet Link",
      {
        method: "POST",
        body: formDatab
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return  (
    <div className="App" onSubmit={(e) => Submit(e)}>
      <h1>Registration form</h1>

      <div>
        <form className="form">
          <input placeholder="Your Name" name="Name" type="text" />
          <input placeholder="Your Email" name="Email" type="text" />
          <input placeholder="Your Phone Number" name="Number" type="text" />
          <input name="Name" type="submit" />
        </form>
      </div>
      
    </div>
  );
}

export default App;
