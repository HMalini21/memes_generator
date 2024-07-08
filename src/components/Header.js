import logo from '../assets/Troll Face.png';

function Header() {
  return (
    <div className="flex navbar pri">
      <div className="flex">
        <img src={logo} alt="troll face" className="header-img" />
        <h2>Meme Generator</h2>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}

export default Header;
