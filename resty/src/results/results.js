import React from 'react';
import ReactJson from 'react-json-view';
import App from '../App';
//--force react json install to use react 17??? maybe/

class Results extends React.Component {
  render() {
    console.log('props in results:', this.props.results);
    return (

      <div id="results" >
        Count: {this.props.count}
        <ReactJson src={this.props.headers} />
        <ReactJson src={this.props.results} />
      </div >

    )
  }
}
export default Results;
