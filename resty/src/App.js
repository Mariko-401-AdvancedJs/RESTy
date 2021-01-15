import React from 'react';
import Header from './header/header';
import Footer from './footer/footer';
import Form from './form/form';
import Results from './results/results';
import History from './history/history';
import './app.scss';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: '',
      resultsArray: [],
      headers: {},
      history: {}
    }
  }

  updateState = (data) => {
    this.setState({ resultsArray: data.results })
    this.setState({ count: data.count })
  }
  updateHeaders = (headers) => {
    console.log('headers?', headers)
    this.setState({ headers })
  }


  render() {
    return (
      <>
        <Header />

        <Form
          update={this.updateState}
          headers={this.updateHeaders}
        />

        <Results
          count={this.state.count}
          results={this.state.resultsArray}
          headers={this.state.headers}
        />
        {/* 
        <History
          history={this.state.history}
        /> */}

        <Footer></Footer>
      </>
    )
  }
}



export default App;
