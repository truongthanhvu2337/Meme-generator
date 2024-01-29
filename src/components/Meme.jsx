import React, { useEffect, useState } from "react";
import memesData from "../memesData";

function Meme() {
  const [meme, setMeme] = useState({
    topText: "",
    bottomText: "",
    randomImage: "https://i.imgflip.com/3lmzyx.jpg",
  });

  const [allMemeImage, setAllMemeImage] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
            .then(res => res.json())
            .then(data => setAllMemeImage(data.data.memes))
  }, [])

  function getMemeImage() {
    const randomNumber = Math.floor(Math.random() * allMemeImage.length);
    const url = allMemeImage[randomNumber].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme(prevState => {
      return {
        ...prevState,
        [name]: value
      }
    })
  }

  return (
    <main>
      <div action="" className="form">
        <div>
          <input
            type="text"
            placeholder="Top text"
            className="form-input"
            name="topText"
            value={meme.topText}
            onChange={handleChange}
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="Top text"
            className="form-input"
            name="bottomText"
            value={meme.bottomText}
            onChange={handleChange}
          />
        </div>

        <button className="form-button" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      <div className="meme">
        <img src={meme.randomImage} className="meme--image" />
        <h2 className="meme--text top">{meme.topText}</h2>
        <h2 className="meme--text bottom">{meme.bottomText}</h2>
      </div>
    </main>
  );
}

export default Meme;
