import React from 'react';
import ReactJson from 'react-json-view';

class History extends React.Component {
  render() {
    return (
      <div>
        <h2>History</h2>
        <ReactJson src={this.props.queryHistory} />
      </div>
    )
  }
}
export default History;