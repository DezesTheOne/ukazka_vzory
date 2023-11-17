import { useEffect, useState } from 'react';
import { Detail } from '../Detail';

export const Main = () => {
  const [opened, setOpened] = useState(false);

  const toggleOpened = () => {
    setOpened(!opened);
  };

  return (
    <>
      <div
        className="panel"
        onClick={toggleOpened}
      >
        Chřest
      </div>
      <Detail opened={opened} />
    </>
  );
};
