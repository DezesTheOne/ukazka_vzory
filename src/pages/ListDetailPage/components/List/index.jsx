import { useEffect, useState } from 'react';
import { ListItem } from '../ListItem';
import { Detail } from '../Detail';

export const List = () => {
  const [items, setItems] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  
  useEffect(() => {
    const fetchItems = async () => {
      const response = await fetch('http://localhost:4000/api/items');
      const data = await response.json();
      setItems(data.result);
    };

    fetchItems();
  }, []);

  if (items === null) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <div className="inline-list">
        {items.map((item) => (
          <ListItem
            key={item.id}
            item={item}
            selected={item.id === selectedId}
            onSelect={setSelectedId}
          />
        ))}
      </div>
      <Detail itemId={selectedId} />
    </>
  );
};
