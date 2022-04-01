import "./App.css";
import { useState } from "react";
import { Container } from "react-bootstrap";
import { Title } from "./components/title/Title";
import { SearchForm } from "./components/form/SearchForm";
import { FavList } from "./components/lists/FavList";

function App() {
  const [favList, setFavList] = useState([]);

  const addToFavList = (name) => {
    setFavList([...favList, name]);
  };

  const removeFromFavList = (name) => {
    const tempList = favList.filter((movie) => movie !== name);
    setFavList(tempList);
  };
  return (
    <div className="wrapper">
      <Container>
        <Title />
        <SearchForm addToFavList={addToFavList} />
        <hr />
        <FavList favList={favList} removeFromFavList={removeFromFavList} />
      </Container>
    </div>
  );
}

export default App;
