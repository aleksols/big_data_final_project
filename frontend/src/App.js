import { useState } from 'react';

function App() {
  const [pressed, setPressed] = useState(false)
  const fileUpload = event => {
    if (event.target.files && event.target.files[0]) {
      let img = event.target.files[0];
      // sendImage(img)
    }
  }

  const [image, setImage] = useState()
  const handleLoadLocalFile = (event) => {
    event.preventDefault();
    const { files } = event.target;
    const localImageUrl =  window.URL.createObjectURL(files[0]);
    setImage(localImageUrl)
    // this.props.onFileLoaded(localImageUrl);
  }

  let url= "http://localhost:5000/process_image"
  const Image = (prop) => {
    return <img src={prop.url}/>
  }
  // if (pressed) {
  //   return <div><Image url={image} /></div>
  // }
  return (
    <div className="App">
      <input type="file" onChange={handleLoadLocalFile}/>
      <button onClick={() => setPressed(true)}>Show blurred image</button>
      {pressed && <Image url={image} />}
    </div>
  );
}

export default App;
