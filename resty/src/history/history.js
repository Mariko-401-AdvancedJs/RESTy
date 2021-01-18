import React from 'react';
import ReactJson from 'react-json-view';

class History extends React.Component {
  render() {
    return (
      <div>
        <ReactJson src={this.props.queryHistory} />
      </div>
    )
  }
}
export default History;