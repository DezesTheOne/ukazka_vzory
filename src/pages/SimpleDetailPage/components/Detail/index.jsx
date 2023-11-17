export const Detail = ({ description, opened }) => {
  if (!opened) {
    return null;
  }
  
  return (
    <div className="box">
      {description}
    </div>
  );
};
