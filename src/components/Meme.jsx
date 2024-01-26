import React, { useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3lmzyx.jpg"
  });

  const [allMemeImage, setAllMemeImage] = useState(memesData)

  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage: url
    }));
  }

  return (
    <main>
      <div action="" className="form">
        <div>
          <label className="form--label">Top text</label>
          <input type="text" className="form-input" />
        </div>
        <div>
          <label className="form--label">Bottom text</label>
          <input type="text" className="form-input" />
        </div>

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="image">
        <img src={meme.randomImage} className="meme--image" />
      </div>
    </main>
  );
}

export default Meme;
