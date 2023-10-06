import { useState } from "react";
import SearchImages from "./api";
import SearchBar from "./components/SearchBar";
import ImageList from "./components/ImageList";
import PreRender from "./components/PreRender";
function App() {
  const [images,setImages] = useState([]);
  const handleSubmit = async(term)=>{
   const result = await SearchImages(term);
  
      setImages(result);

  };
  
  return (
  <>
    <SearchBar onSubmit ={handleSubmit}/>

    {images.length <= 0 ? <PreRender/> :  <ImageList images={images}/>}
  </>
  );
}

export default App;
