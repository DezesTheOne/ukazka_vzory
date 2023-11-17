import { useEffect, useState } from 'react';
import { Detail } from '../Detail';

export const Main = () => {
  const [item, setItem] = useState(null);
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('http://localhost:4000/api/items/0');
      const data = await response.json();
      setItem(data.result);
    }

    fetchItem();
  }, []);
  
  if (item === null) {
    return <p>Loading...</p>;
  }

  const toggleOpened = () => {
    setOpened(!opened);
  }

  return (
    <>
      <div
        className="panel"
        onClick={toggleOpened}
      >
        {item.name}
      </div>
      <Detail opened={opened} description={item.description} />
    </>
  );
};
