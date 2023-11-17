import { useState, useEffect } from 'react';

export const Detail = ({ opened }) => {
  const [item, setItem] = useState(null);
  
  useEffect(() => {
    const fetchItem = async () => {
      const response = await fetch('http://localhost:4000/api/items/0');
      const data = await response.json();
      setItem(data.result);
    }
  
    if (opened) {
      fetchItem();
    }
  }, [opened]);

  if (!opened || item === null) {
    return null;
  }
  
  return (
    <div className="box">
      {item.description}
    </div>
  );
};
