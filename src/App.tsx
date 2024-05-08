import React from "react";
import MyButton from "./components/Mybutton/MyButton";
import Profile from "./components/Profile/Profile";
import Header from "./components/Header";
import Items from "./components/Items";

class App extends React.Component {
  /* constructor (props) {
    super(props) 
   this.state = {
      items:[
        {
          id: 1,
          name: 'Наручные часы мужские SKMEI 1251',
          imageUrl: 'https://main-cdn.sbermegamarket.ru/big2/hlr-system/214/156/886/511/117/11/600004929632b0.jpeg',
          price: '8165',
          discount: '90',
          rating: '4.7',
          isFavorite: false
          },  
      ]
    } */
  render() {
    return (
      <>
        <Profile />

        <Header />
      </>
    );
  }
}
export default App;
