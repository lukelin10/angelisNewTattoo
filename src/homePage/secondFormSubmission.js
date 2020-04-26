import React from 'react';
import axios from 'axios';

export default class SubmissionForm extends React.Component {
  state = {
    name: '',
    tattooName: '',
    imageUrl: '',
    tattooDescription: '',
  }

  handleChange = event => {
    this.setState({ 
        name: event.target.value , 
        tatooName: event.target.value, 
        imageUrl: event.target.value, 
        tatooDescription: event.target.value  });
    // this.setState({ tatooName: event.target.value });
    // this.setState({ imageUrl: event.target.value });
    // this.setState({ tatooDescription: event.target.value });
  }

  handleSubmit = event => {
    event.preventDefault();

    const submission = {
      name: this.state.name,
      tattooName: this.state.tatooName,
      imageUrl: this.state.imageUrl,
      tattooDescription: this.state.tattooDescription
    };

    axios.post(`https://jsonplaceholder.typicode.com/users`, { submission })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }

  render() {
    let imgPreview;
    if (this.state.imageUrl) {
        imgPreview = <img src={this.state.imageUrl} alt='' />;
    }
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
        <h1>Make a submission</h1>
        <p>Enter your name:</p>
      <input
        type='text'
        name='name'
        onChange={this.handleChange}
      />
      <p>Tattoo Name:</p>
      <input
        type='text'
        name='tatooName'
        onChange={this.handleChange}
      />
      <p>Tattoo Image Url:</p>
      <input
        type='url'
        name='imageUrl'
        onChange={this.handleChange}
      />
      {imgPreview}

<p>Tattoo Description:</p>
      <textarea
        type='text'
        name='tatooDescription'
        onChange={this.handleChange}
      />
          
          <button type="submit">Add</button>
        </form>
      </div>
    )
  }
}