import React from 'react';
import './form.scss';
class Form extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      display: false,
      method: '',
      url: '',
      body: '',
    }
  }

  handleSubmit = e => {
    e.preventDefault();
    let url = e.target.url.value;
    let body = e.target.body.value;
    this.setState({ url }); //shorthand if key and value have the same name!
    this.setState({ body });
    if (this.state.method && this.state.body) { this.setState({ display: true }) };
    if (this.state.method === 'put') {
      this.putReq(url)
    }
    if (this.state.method === 'post') {
      this.postReq(url)
    }
    if (this.state.method === 'delete') {
      this.deleteReq(url)
    }
    if (this.state.method === 'get') {
      this.apiResults(url);
    }
  }


  handleChoice = e => {
    let method = e.target.value;
    this.setState({ method });
    if (this.state.url) { this.setState({ display: true }) };
  }


  putReq = async (url) => {
    const data = await fetch(url, { method: 'PUT', mode: 'cors' })
      .then(res => {
        console.log('put query???___', res);
        if (res.status !== 200) return;
        return res.json();
      })
    this.props.query(data);

    localStorage.setItem('putRes', data);
  }
  postReq = async (url) => {
    const data = await fetch(url, { method: 'POST', mode: 'cors' })
      .then(res => {
        // console.log('post query???___', res);
        if (res.status !== 200) return;
        return res.json();
      })
    console.log('cmon man...', data);
    this.props.query(data);

    localStorage.setItem('postRes', data);
  }
  deleteReq = async (url) => {
    const data = await fetch(url, { method: 'DELETE', mode: 'cors' })
      .then(res => {
        console.log('delete query???___', res);
        if (res.status !== 200) return;
        return res.json();
      })
    this.props.query(data);
    localStorage.setItem('delRes', data);
  }

  apiResults = async (url) => {
    console.log('getting hit?', url);
    let data = await fetch(url, { method: 'GET', mode: 'cors' })
      .then(res => {

        let headers = {};
        for (let pair of res.headers.entries()) {
          headers[pair[0]] = pair[1]
        }
        this.props.headers(headers);

        if (res.status !== 200) return;
        return res.json();
      })
    this.props.update(data);
  }

  render() {
    return (

      <div class="formDiv" >

        <form onSubmit={this.handleSubmit}>

          <div class="urlInput">
            <label>
              URL:
            <input placeholder="URL" name="url"></input>
              <button type="submit">Submit</button>
            </label>
          </div>

          <div class="urlInput">
            <label>
              Request Body:
            <textarea id="reqBody" name="body"></textarea>
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