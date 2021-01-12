import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './form/form';
import './app.scss';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Form />
        <Footer></Footer>
      </>
    )
  }
}



export default App;
