const MyButton = () => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };
  return <button onClick={handleClick}>Кнопка</button>;
};

export default MyButton;
