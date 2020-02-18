import React from "react";
import { Link } from "react-router-dom";
import { Table } from 'reactstrap';


class Providers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: [],
      sort_price: false,
      sort_rating: false,
      search: ''
    };
    this.GetActionFormat= this.GetActionFormat.bind(this);
  }

  componentDidMount() {
      this.fetchProvidersList(`/get_providers`, 'get');
  }


  fetchProvidersList = (url, http_method) => {
    fetch(url, { method: http_method })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ providers: response }))
  };

  fetchDetails(sort_column, sort) {
    if(sort_column == "sort_price") {
      this.setState({sort_price : sort });
    }
    else{
      this.setState({sort_rating : sort });
    }
    const sort_by = sort ? "ASC" : "DESC"
    let url = `/get_providers?${sort_column}=${sort_by}`;
    if(this.state.search){
      url += `&search=${this.state.search}`
    }
    this.fetchProvidersList(url, 'get');
    
  }


  handleDelete = (providerId) => {
    fetch(`/providers/${providerId}`, { method: 'delete' }).
      then((response) => {
        alert('Provider deleted successfully')
        this.fetchProvidersList(`/get_providers`, 'get');
      });
  }

  handleSearchChange = (event) => {
    this.setState({ search : event.target.value });
    const url = `/search_providers?search=${event.target.value}`;
    this.fetchProvidersList(url, 'post');
  }

  GetActionFormat = (cell, row) => {
    return (
       <div>
           <Link to="/providers/new">Edit${cell}</Link>
           <button type="button" className="btn btn-outline-danger btn-sm ml-2 ts-buttom" size="sm">
               Delete
           </button>
       </div>
    );
  }


  renderResultRows(data) {
    return data.map(function(provider) {
        return (
            <tr>
              <td>{provider.id}</td>
              <td>{provider.name}</td>
              <td>{provider.lowest_price}</td>
              <td>{provider.rating}</td>
              <td>{provider.max_speed}</td>
              <td>{provider.description}</td>
              <td>{provider.contact_no}</td>
              <td>{provider.email}</td>
              <td>{provider.image}</td>
              <td>{provider.url}</td>
              <td><div>
       <Link to={`/providers/${provider.id}/edit`}>Edit</Link>
       <button type="button" className="btn btn-outline-danger btn-sm ml-2 ts-buttom" size="sm" onClick={() => this.handleDelete(provider.id) }>
       Delete
       </button>
       </div></td>
            </tr>
        );
    }.bind(this));
}

  render() {
    const { providers } = this.state;

    const sectionStyle = { 
      padding: '2px 0'
    }

    const noProvider = (
      <div className="vw-100 vh-50 d-flex align-items-center justify-content-center">
        <h4>
          No providers yet. Why not <Link to="/providers/new">create one</Link>
        </h4>
      </div>
    );


    return (

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
            <div className="text-right mb-3">
              <Link to="/providers/new" className="btn custom-button">
                Create New Provider
              </Link>
            </div>
            <div className="row">
            <h3>Search field:</h3>
            <input type="text" onChange={this.handleSearchChange} name="search" className="input" placeholder="Search..." />
            <hr/>
              {
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Name</th>
                    <th onClick={() => this.fetchDetails("sort_price", !this.state.sort_price)}>Price</th>
                    <th onClick={() => this.fetchDetails("sort_rating", !this.state.sort_rating)}>Rating</th>
                    <th>Speed</th>
                    <th>Description</th>
                    <th>Contact No</th>
                    <th>Email</th>
                    <th>Image</th>
                    <th>URL</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  { this.renderResultRows(providers)}
                </tbody>
              </Table>
              }
            </div>
          </main>
        </div>
      </>

    );
  }

}
export default Providers;
