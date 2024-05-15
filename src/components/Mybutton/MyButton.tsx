function AllertButton({ massage, children }) {
  return <button onClick={() => alert(massage)}>{children}</button>;
}
export default function MyButton() {
  return (
    <>
      <AllertButton massage="кнопка нажата">Кнопка</AllertButton>
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
