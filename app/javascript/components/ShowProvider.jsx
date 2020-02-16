import React from "react";
import { Link } from "react-router-dom";
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


const sectionStyle = { 
      padding: '2px 0'
    }

export default () => (
  <>
    <section className="jumbotron jumbotron-fluid text-center" style={sectionStyle}>
      <div className="container py-2">
        <h1 className="display-2">Providers</h1>
        <p className="lead text-muted">
          A list of ISP Providers in India
        </p>
      </div>
    </section>
    <div className="py-5">
      <main className="container">
        <div className="text-left mb-3">
          <div className="row">
            <Form action="/providers" method="POST">
              <FormGroup>
                <Label>Name</Label>
                <Input type="text" name="provider[name]" id="providerName" placeholder="Enter name" />
              </FormGroup>
              <FormGroup>
                <Label>Description</Label>
                <Input type="textarea" name="provider[description]" id="providerDescription" placeholder="Enter description" />
              </FormGroup>
              <FormGroup>
                <Label>Price</Label>
                <Input type="text" name="provider[lowest_price]" id="providerPrice" placeholder="Enter price" />
              </FormGroup>
              <FormGroup>
                <Label>Rating</Label>
                <Input type="text" name="provider[rating]" id="providerRating" placeholder="Enter rating" />
              </FormGroup>
              <FormGroup>
                <Label>Max Speed</Label>
                <Input type="number" name="provider[max_speed]" id="providerSpeed" placeholder="Enter speed" />
              </FormGroup>
              <FormGroup>
                <Label>Contact Number</Label>
                <Input type="number" name="provider[contact_no]" id="providerContact" placeholder="Enter Cotnact Number" />
              </FormGroup>
              <FormGroup>
                <Label>Email address</Label>
                <Input type="email" name="provider[email]" id="providerEmail" placeholder="Enter email" />
              </FormGroup>
              <FormGroup>
                <Label>Image</Label>
                <Input type="text" name="provider[image]" id="providerImage" placeholder="Enter image" />
              </FormGroup>
              <FormGroup>
                <Label>URL</Label>
                <Input type="url" name="provider[url]" id="providerUrl" placeholder="Enter URL" />
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