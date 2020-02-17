import React from "react";
import { Link } from "react-router-dom";
import { Button, FormGroup, Label, Input } from 'reactstrap';

class EditProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      lowest_price: '',
      rating: '',
      max_speed: '', 
      description: '',
      contact_no: '',
      email: '',
      image: '',
      url: ''
    };
    
  }

  componentDidMount() {
      const { match: { params: { id } } } = this.props;
      fetch(`/providers/${id}`)
        .then(response => {

          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then((provider) => this.setState({ ...provider }));
  }


  updateProvider = (event) => {
    const paramsData = {
      name: this.state.name,
      lowest_price: this.state.lowest_price,
      rating: this.state.rating,
      max_speed: this.state.max_speed,
      description: this.state.description,
      contact_no: this.state.contact_no,
      email: this.state.email,
      image: this.state.image,
      url: this.state.url
    }

    fetch(`/providers/${this.state.id}`, {
      method: 'put',
      body: JSON.stringify(paramsData),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      alert('Provider is updated successfully');
      location.href = '/';
    });
  }

  handleInputChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  }

  render() {
    const sectionStyle = { 
      padding: '2px 0'
    }
    
    const {name,lowest_price,rating,max_speed,description,contact_no,email,image,url} = this.state;
    return(
      <>
        <section className="jumbotron jumbotron-fluid text-center" style={sectionStyle}>
          <div className="container py-2">
            <h1 className="display-2">Providers</h1>
            <p className="lead text-muted">
              Editing ISP Providers in India 
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-left mb-3">
              <div className="row">

                  <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="name" id="providerName" value={name} onChange={this.handleInputChange}/><br/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" name="description" id="providerDescription" value={description}  onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <Input type="text" name="lowest_price" id="providerPrice" value={lowest_price}  onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Rating</Label>
                    <Input type="text" name="rating" id="providerRating" value={rating} onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Max Speed</Label>
                    <Input type="number" name="max_speed" id="providerSpeed" value={max_speed}  onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Contact Number</Label>
                    <Input type="number" name="contact_no" id="providerContact" value={contact_no} onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Email address</Label>
                    <Input type="email" name="email" id="providerEmail" value={email}  onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>Image</Label>
                    <Input type="text" name="image" id="providerImage" value={image} onChange={this.handleInputChange}/>
                  </FormGroup>
                  <FormGroup>
                    <Label>URL</Label>
                    <Input type="url" name="url" id="providerUrl" value={url} onChange={this.handleInputChange}/>
                  </FormGroup>
                  <Button variant="primary" type="submit" onClick={this.updateProvider}>
                    Update
                  </Button>

                  
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}


export default EditProvider;