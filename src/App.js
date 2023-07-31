import './App.css';


function App() {
  return (
    <div className="App">
      <img id = 'bigMom' src = 'https://media.tenor.com/YZ3hWLNTqV0AAAAM/one-piece-laugh-big-mom.gif' alt='bigmom'/>
      <h2>Dealer: <span id = 'dealer-sum'></span></h2>

      <div id="dealer-cards">
        <img id = 'hide' src='compenets/Cards/BACK.png' alt="back"/>
      </div>

      <div id="user-cards"></div>

      <br></br>

      <button id = 'hit'>Hit</button>
    <button id="stay">Stay</button>
    <button id="restart">Restart</button>
    <h2>You: <span id="user-sum"></span></h2>
    <h3 id="soul-counter">Rules: each round you'll play for 10 years of your overall lifespan. Good Luck!</h3> 
    <h4 id = 'years'>years left: 150</h4>

    <img id = 'luffy' src = 'https://gifdb.com/images/thumbnail/one-piece-monkey-d-luffy-eyes-jxqajdkjk6qij9n7.gif' alt='strawhat'/>  
    
    <p id="results"></p>
    </div>
  );
}

export default App;
