export const drawPopUp = (data) => {
  return (
    <ul>
      {data.map((el) => {
        return <li key={el}>{el}</li>;
      })}
    </ul>
  );
};
