function MyButton({ massage, children }) {
  return <button onClick={() => alert(massage)}>{children}</button>;
}
export default function MyButton() {
  return (
    <>
      <MyButton massage="кнопка нажата">Кнопка</MyButton>
    </>
  );
}

/* const MyButton = () => {
  const handleClick = () => {
    alert("Кнопка нажата");
  };
  return <button onClick={handleClick}>Кнопка</button>;
};

export default MyButton; */
