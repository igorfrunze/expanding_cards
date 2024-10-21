import { photos } from '../photos';
import { useState } from 'react';

function App() {
  const [selectedID, setSelectedID] = useState(1);

  const handleClick = (id) => {
    setSelectedID(id);
  };

  return (
    <>
      <div className="flex w-[90vw]">
        {photos.map((photo) => {
          const [id, title, url] = Object.values(photo);
          const isActive = selectedID === id;

          return (
            <div
              className={isActive ? 'active' : 'panel'}
              key={id}
              style={{ backgroundImage: `url(${url})` }}
              onClick={() => handleClick(id)}
            >
              <h3 className={isActive ? 'photoTitleActive' : 'photoTitle'}>
                {title}
              </h3>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default App;
