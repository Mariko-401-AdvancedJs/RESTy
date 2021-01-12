import React from 'react';
import './form.scss';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      choice: '',
      url: '',
    }
  }

  handleChoice = e => {
    let newChoice = e.target.value;
    this.setState({ choice: newChoice });
  }

  handleURL = e => {
    console.log(e.target.value)
    let newURL = e.target.value;
    this.setState({ url: newURL });
  }

  render() {
    return (


      <div class="outer">

        <form>
          <div class="urlInput">
            <label>
              URL:
            <input onChange={this.handleURL}></input>
            </label>
          </div>

          <div class="inner">
            <fieldset>
              <input type="radio" value="get" name="method" onChange={this.handleChoice} />GET
              <input type="radio" value="post" name="method" onChange={this.handleChoice} />POST
              <input type="radio" value="put" name="method" onChange={this.handleChoice} />PUT
              <input type="radio" value="delete" name="method" onChange={this.handleChoice} />DELETE
           </fieldset>
          </div>

        </form >



        <div>
          <p>{this.state.url}</p>
          <p>{this.state.choice}</p>
        </div>
      </div>
    )
  }
}
export default Form;