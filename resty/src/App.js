import React from 'react';
import { BrowserRouter, MemoryRouter, HashRouter, Link } from 'react-router-dom';
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
    }
  }

  updateState = (data) => {
    // console.log('get from fake api??', data);
    this.setState({ resultsArray: data })
    this.setState({ count: data.count })
  }
  updateHeaders = (headers) => {
    this.setState({ headers })
  }
  updateQueries = (queries) => {
    // console.log('res???', storage)
    this.setState({ queries })
  }

  render() {
    return (
      <>
        <Header />

        <BrowserRouter>
          <Form
            update={this.updateState}
            headers={this.updateHeaders}
            query={this.updateQueries}
          />

          <Results
            count={this.state.count}
            results={this.state.resultsArray}
            headers={this.state.headers}
          />

          <History
            queryHistory={this.state.queries}
          />

          <Footer></Footer>

        </BrowserRouter>
      </>
    )
  }
}



export default App;
