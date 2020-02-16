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
  }

  componentDidMount() {
      const url = "/all_providers";
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
    }];

    const defaultSorted = [{
      dataField: 'name',
      order: 'desc'
    }];

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
            <SearchBar  { ...props.searchProps } />
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
