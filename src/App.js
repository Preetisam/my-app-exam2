import React from "react";
import "./App.css";
import Alldata from "../src/playlist.json";

function App() {
  console.log(Alldata);

  // Function to chunk the data into rows with 4 cards each
  const chunkArray = (arr, size) => {
    const chunkedArr = [];
    let index = 0;
    while (index < arr.length) {
      chunkedArr.push(arr.slice(index, index + size));
      index += size;
    }
    return chunkedArr;
  };

  // Chunk the data into rows with 4 cards each
  const chunkedData = chunkArray(Alldata, 4);

  return (
    <>
      <div className="App">
        <header className="App-header">
          <h1>Welcome to My Music App</h1>
        </header>
        <div className="container">
          {chunkedData.map((row, rowIndex) => (
            <div className="row" key={rowIndex}>
              {row.map((item) => (
                <div className="card" key={item.id}>
                  <h2>{item.title}</h2>
                  <p>{item.description}</p>
                  <img src={item.artworkUrl} alt="Artwork" />
                  <audio controls>
                    <source src={item.stream_url} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                  <div>
                    <h3>User:</h3>
                    <p>Username: {item.user.username}</p>
                    <p>City: {item.user.city}</p>
                    <p>waveform_url: {item.user.waveform_url}</p>
                    <a href="/">website: {item.user.website}</a>
                    <p>
                      Avatar: <img src={item.user.avatar_url} alt="Avatar" />
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
        <footer className="App-footer">
          <p>&copy; 2023 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </>
  );
}

export default App;
