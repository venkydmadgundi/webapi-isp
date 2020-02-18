import React from "react";
import { Link } from "react-router-dom";
import BootstrapTable from 'react-bootstrap-table-next';
import ToolkitProvider, { Search } from 'react-bootstrap-table2-toolkit';

const { SearchBar } = Search;

class Providers extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      providers: []
    };
    this.GetActionFormat= this.GetActionFormat.bind(this);
  }

  componentDidMount() {
      this.fetchProvidersList(`/get_providers`);
  }

  fetchProvidersList = (url) => {
    fetch(url)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error("Network response was not ok.");
        })
        .then(response => this.setState({ providers: response }))
  };

  handleDelete = (providerId) => {
    fetch(`/providers/${providerId}`, { method: 'delete' }).
      then((response) => {
        alert('Provider deleted successfully')
        this.fetchProvidersList();
      });
  }

  handleSearchChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
    const url = `/get_providers?search=${event.target.value}`;
    this.fetchProvidersList(url);
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



  render() {
    const { providers } = this.state;

    
    const columns = [{
      dataField: 'id',
      text: 'Provider ID',
      sort: true,
      align: 'center',
      headerAlign: 'center'
    },{
      dataField: 'name',
      text: 'Name',
      sort: true,
      headerAlign: 'center'
    }, {
      dataField: 'lowest_price',
      text: 'Price',
      sort: true,
      align: 'right',
      headerAlign: 'center'
    }, {
      dataField: 'rating',
      text: 'Rating',
      sort: true,
      align: 'right',
      headerAlign: 'center'
    }, {
      text: 'Action',
      align: 'center',
      headerAlign: 'center',
      dataField: "",
      formatter: (cell, row) => {
       return(<div>
       <Link to={`/providers/${row.id}/edit`}>Edit</Link>
       <button type="button" className="btn btn-outline-danger btn-sm ml-2 ts-buttom" size="sm" onClick={() => this.handleDelete(row.id) }>
       Delete
       </button>
       </div>);
      }
    }];

    const defaultSorted = [{
      dataField: 'name',
      order: 'desc'
    }];

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

    

    const allProviders = (<ToolkitProvider
      keyField="id"
      data={ providers }
      columns={ columns }
      defaultSorted={ defaultSorted }
      search
    >
      {
        props => (
          <div>
            <h3>Search field:</h3>
            <input type="text" onChange={this.handleSearchChange} className="input" placeholder="Search..." />
            
            <hr />
            <BootstrapTable striped={true} hover={true} 
              { ...props.baseProps }
            />
          </div>
        )
      }
    </ToolkitProvider>)


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
              {providers.length > 0 ? allProviders : noProvider}
            </div>
          </main>
        </div>
      </>

    );
  }

}
export default Providers;
