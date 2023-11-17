import { useState } from 'react';

export const ListItem = ({ item }) => {
  const [selected, setSelected] = useState(false);
  
  const toggleSelected = () => {
    setSelected(!selected);
  };

  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={toggleSelected}
    >
      {item.name}
    </div>
  );
};
