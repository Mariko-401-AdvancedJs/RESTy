import React from 'react';
import './form.scss';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      method: '',
      url: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let url = e.target.url.value;
    this.setState({ url }); //shorthand if key and value have the same name!
    if (this.state.method) { this.setState({ display: true }) };
    this.apiResults(url);
  }

  handleChoice = e => {
    let method = e.target.value;
    this.setState({ method });
    if (this.state.url) { this.setState({ display: true }) };
  }

  apiResults = async (url) => {
    // console.log('URL FROM HANDLE SUBMIT:', url);
    const data = await fetch(url, { method: 'GET', mode: 'cors' })
      .then(res => {
        if (res.status !== 200) return;
        return res.json();
      });
    // console.log('data from api:', data);
    this.props.update(data);
  }

  render() {
    return (

      <div class="formDiv">

        <form onSubmit={this.handleSubmit}>

          <div class="urlInput">
            <label>
              URL:
            <input placeholder="URL" name="url"></input>
              <button type="submit">Submit</button>
            </label>
          </div>

          <div class="buttonDiv">
            <fieldset>
              <input type="radio" value="get" name="method" onChange={this.handleChoice} />GET
              <input type="radio" value="post" name="method" onChange={this.handleChoice} />POST
              <input type="radio" value="put" name="method" onChange={this.handleChoice} />PUT
              <input type="radio" value="delete" name="method" onChange={this.handleChoice} />DELETE
           </fieldset>
          </div>

        </form >


        {!this.state.display ? "" :
          <div>
            <p>{this.state.url}</p>
            <p>{this.state.method}</p>
          </div>
        }
      </div>

    )
  }
}
export default Form;