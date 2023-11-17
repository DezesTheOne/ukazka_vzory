import { useState, useEffect } from 'react';

export const Detail = ({ itemId }) => {
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch(`http://localhost:4000/api/items/${itemId}`);
      const data = await response.json();
      setItem(data.result);
    }
  
    if (itemId !== null) {
      fetchItem();
    }
  }, [itemId]);

  if (itemId === null || item === null) {
    return null;
  }
  
  return (
    <div className="box">
      {item.description}
    </div>
  );
};
