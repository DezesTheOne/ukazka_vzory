export const ListItem = ({ item, selected, onSelect }) => {
  return (
    <div
      className={`panel${selected ? ' panel--selected' : ''}`}
      onClick={() => onSelect(item.id)}
    >
      {item.name}
    </div>
  );
};
