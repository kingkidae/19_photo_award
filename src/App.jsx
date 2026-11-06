import { useState } from "react";

function App() {
  const [photos, setPhotos] = useState([]);

  async function handleClick() {
    const API_KEY = import.meta.env.VITE_API_KEY;
    console.log(API_KEY);
    const url = `http://apis.data.go.kr/B551011/PhokoAwrdService/phokoAwrdSyncList?serviceKey=${API_KEY}&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=TestApp&_type=json`;
    const response = await fetch(url);
    const data = await response.json();
    setPhotos(data?.response.body.items.item);
  }
  console.log(photos);

  return (
    <div>
      <h1>관광공모전 수상작 정보</h1>
      <button onClick={handleClick}>불러오기</button>
      {photos?.map((photo, index) => (
        <div key={index}>
          <div>{photo.koTitle}</div>
          <div>{photo.koFilmst}</div>
          <div>{photo.koKeyWord}</div>
          <div>
            <img src={photo.orgImage} />
          </div>
          <br />
        </div>
      ))}
    </div>
  );
}

export default App;
