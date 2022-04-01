import './App.css';
import './style.css';
import imageInSrc from "./imageInSrc.jpg";
import video from "./myVideo.mp4";
function App() {
  return (
    <div className="App">
      <div className=".main">

      <h1 className="title red">Marwen Ben Aissia</h1>

      <br></br>

        <img className ="img" src={imageInSrc} alt=""></img>
        <br></br>


        <img className ="img" src="/imageInPublic.jpg" alt="" ></img>

        </div>

        <video width="320" height="240" controls>

        <source src={video} type="video/mp4" ></source>

        </video>
    </div>
  );
}

export default App;
