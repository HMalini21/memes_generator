import React, { useEffect, useState } from 'react';
// import memeData from '../database/memes';

// function Form() {
//   const [memes, setMemes] = React.useState({
//     topText: '',
//     bottomText: '',
//     randomImage: 'https://i.imgflip.com/1bij.jpg',
//   });

//   // const [allmemeImage, setMemeImage] = React.useState(memeData);

//   function getMemes() {
//     const memesArray = memeData.data.memes;
//     const randomNumber = Math.floor(Math.random() * memesArray.length);
//     const url = memesArray[randomNumber].url;
//     setMemes((prevmeme) => ({
//       ...prevmeme,
//       randomImage: url,
//     }));
//   }

//   return (
//     <>
//       <main>
//         <div className="flex sb">
//           <div className="input-box">
//             <label className="fs-28">Top Text</label>
//             <input type="text" placeholder="shut up" className="text-box fs-28" />
//           </div>
//           <div className="input-box">
//             <label className="fs-28">Bottom Text</label>
//             <input type="text" placeholder="and take my money" className="text-box fs-28" />
//           </div>
//         </div>
//         <button onClick={getMemes} className="form-button fs-28 pri">
//           Get a new meme image 🖼️
//         </button>
//         <div>
//           <img className="randomImg" src={memes.randomImage} alt="memes" />
//         </div>
//       </main>
//     </>
//   );
// }
// export default Form;

export default function Form() {
  let [meme, setMeme] = useState({
    topText: '',
    bottomText: '',
    randomImage: 'https://i.imgflip.com/1bij.jpg',
  });

  let [allMemes, setAllMemes] = useState([]);

  // useEffect(() => {
  //   fetch('https://api.imgflip.com/get_memes')
  //     .then((res) => res.json())
  //     .then((data) => setAllMemes(data.data.memes));
  // }, []);

  useEffect(() => {
    async function getMemes() {
      const res = await fetch('https://api.imgflip.com/get_memes');
      const data = await res.json();
      setAllMemes(data.data.memes);
    }
    getMemes();
  }, []);

  function handleChange(e) {
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        [e.target.name]: e.target.value,
      };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const randomNumber = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[randomNumber].url;
    setMeme((prevMeme) => {
      return {
        ...prevMeme,
        randomImage: url,
      };
    });
  }
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="flex sb">
          <div className="input-box">
            <label className="fs-28">Top Text</label>
            <input
              type="text"
              placeholder="shut up"
              className="text-box fs-28"
              name="topText"
              value={meme.topText}
              onChange={handleChange}
            />
          </div>
          <div className="input-box">
            <label className="fs-28">Bottom Text</label>
            <input
              type="text"
              placeholder="and take my money"
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
              className="text-box fs-28"
            />
          </div>
        </div>
        <button className="form-button fs-28 pri">Get a new meme image 🖼️</button>
      </form>
      <div className="meme">
        <img src={meme.randomImage} alt="meme-image" className="randomImg" />
        <h2 id="top-text">{meme.topText}</h2>
        <h2 id="bottom-text">{meme.bottomText}</h2>
      </div>
    </>
  );
}
