import MyButton from "./components/Mybutton/MyButton";
import Profile from "./components/Profile/Profile";

function App() {
  const isLogged = true;
  let content;
  if (isLogged) {
    content = <Profile />;
  } else {
    content = null;
  }
  return (
    <>
      {content}
      <MyButton />
    </>
  );
}

export default App;
