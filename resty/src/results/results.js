import React from 'react';
import ReactJson from 'react-json-view';
//--force react json install to use react 17??? maybe/

class Results extends React.Component {
  render() {
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
