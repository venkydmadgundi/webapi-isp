import React from "react";
import { Link } from "react-router-dom";
import { Button, Input, Table } from 'reactstrap';

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

                  <Table>
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td><Input type="text" name="name" id="providerName" value={name} onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td><Input type="textarea" name="description" id="providerDescription" value={description}  onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td><Input type="text" name="lowest_price" id="providerPrice" value={lowest_price}  onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Rating</td>
                        <td><Input type="text" name="rating" id="providerRating" value={rating} onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Max Speed</td>
                        <td><Input type="number" name="max_speed" id="providerSpeed" value={max_speed}  onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Contact Number</td>
                        <td><Input type="number" name="contact_no" id="providerContact" value={contact_no} onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Email address</td>
                        <td><Input type="email" name="email" id="providerEmail" value={email}  onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>Image</td>
                        <td><Input type="text" name="image" id="providerImage" value={image} onChange={this.handleInputChange}/></td>
                      </tr>
                      <tr>
                        <td>URL</td>
                        <td><Input type="url" name="url" id="providerUrl" value={url} onChange={this.handleInputChange}/></td>
                      </tr>
                    </tbody>
                  </Table>
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