import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';

class EditProvider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      provider: []
    };
    
  }

  componentDidMount() {
      const url = "/providers/"+this.props.match.params.id;
      fetch(url)
        .then(response => {

          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ provider: response }))
        .catch(() => this.props.history.push("/"));
  }

  handleSubmit(data) {
  console.log(data);
    return fetch('/providers/' + data.id, {
        method: 'PUT',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => {
        return res;
    }).catch(err => err);

  }

  render() {
    const sectionStyle = { 
      padding: '2px 0'
    }
    const { provider } = this.state;
    return(
      <>
        <section className="jumbotron jumbotron-fluid text-center" style={sectionStyle}>
          <div className="container py-2">
            <h1 className="display-2">Providers</h1>
            <p className="lead text-muted">
              Editing {provider.name} ISP Providers in India 
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-left mb-3">
              <div className="row">
                <Form onSubmit={this.handleSubmit}>
                  <FormGroup>
                    <Label>Name</Label>
                    <Input type="text" name="provider[name]" id="providerName" defaultValue={provider.name} placeholder={provider.name} />
                  </FormGroup>
                  <FormGroup>
                    <Label>Description</Label>
                    <Input type="textarea" name="provider[description]" id="providerDescription" defaultValue={provider.description} placeholder="Enter description" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Price</Label>
                    <Input type="text" name="provider[lowest_price]" id="providerPrice" defaultValue={provider.lowest_price} placeholder="Enter price" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Rating</Label>
                    <Input type="text" name="provider[rating]" id="providerRating" defaultValue={provider.rating} placeholder="Enter rating" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Max Speed</Label>
                    <Input type="number" name="provider[max_speed]" id="providerSpeed" defaultValue={provider.max_speed} placeholder="Enter speed" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Contact Number</Label>
                    <Input type="number" name="provider[contact_no]" id="providerContact" defaultValue={provider.contact_no} placeholder="Enter Cotnact Number" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Email address</Label>
                    <Input type="email" name="provider[email]" id="providerEmail" defaultValue={provider.email} placeholder="Enter email" />
                  </FormGroup>
                  <FormGroup>
                    <Label>Image</Label>
                    <Input type="text" name="provider[image]" id="providerImage" defaultValue={provider.image} placeholder="Enter image" />
                  </FormGroup>
                  <FormGroup>
                    <Label>URL</Label>
                    <Input type="url" name="provider[url]" id="providerUrl" defaultValue={provider.url} placeholder="Enter URL" />
                  </FormGroup>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form>
                  
              </div>
            </div>
          </main>
        </div>
      </>
    );
  }
}


export default EditProvider;