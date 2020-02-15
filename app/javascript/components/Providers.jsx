import React from "react";
import { Link } from "react-router-dom";
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

class Providers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: []
    };
  }

  componentDidMount() {
      const url = "/providers";
      fetch(url)
        .then(response => {

          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ providers: response }))
        .catch(() => this.props.history.push("/"));
  }

  priceFormatter(cell, row){
  return '<i class="fa fa-rupee"></i> ' + cell;
}



  render() {
    const { providers } = this.state;
    


    const allProviders = (<BootstrapTable data={providers} striped={true} hover={true}>
      <TableHeaderColumn dataField="id" isKey={true} dataAlign="center" dataSort={true}>Providers ID</TableHeaderColumn>
      <TableHeaderColumn dataField="name" dataSort={true}> Name</TableHeaderColumn>
      <TableHeaderColumn dataField="lowest_price" dataSort={true} dataFormat={this.priceFormatter} dataAlign='right'>Provider Price</TableHeaderColumn>
      <TableHeaderColumn dataField="rating" dataSort={true} dataAlign='right'>Provider Price</TableHeaderColumn>
  		</BootstrapTable>);




    const noProvider = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No providers yet. Why not <Link to="/new_provider">create one</Link>
        </h4>
      </div>
    );

    return (
      <>
        <section className="jumbotron jumbotron-fluid text-center">
          <div className="container py-5">
            <h1 className="display-4">Providers</h1>
            <p className="lead text-muted">
              We’ve pulled together our most popular providers.
            </p>
          </div>
        </section>
        <div className="py-5">
          <main className="container">
            <div className="text-right mb-3">
              <Link to="/provider" className="btn custom-button">
                Create New Provider
              </Link>
            </div>
            <div className="row">
              {providers.length > 0 ? allProviders : noProvider}
            </div>
            <Link to="/" className="btn btn-link">
              Home
            </Link>
          </main>
        </div>
      </>
    );
  }

}
export default Providers;