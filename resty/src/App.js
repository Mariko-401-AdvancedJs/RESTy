import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './form/form';
import Results from './results/results';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      resultsArray: [],
      headers: {}
    }
  }

  updateState = (info) => {
    console.log('results in update state:', info.headers);
    this.setState({ resultsArray: info.results })
    this.setState({ count: info.count })
    console.log('RESULTS AFTER', this.state.resultsArray, 'COUNT AFTER', this.state.count);
  }

  render() {
    return (
      <>
        <Header />

        <Form
          update={this.updateState}
        />

        <Results
          count={this.state.count}
          results={this.state.resultsArray}
        />

        <Footer></Footer>
      </>
    )
  }
}



export default App;
