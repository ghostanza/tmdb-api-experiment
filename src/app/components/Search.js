import React from 'react';

export default class Search extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      searchTerm: '',
      searchType: 'movie'
    }
  }
  updateSearchTerm(e){
    let val = e.target.value;
    this.setState((prev) => ({...prev, searchTerm: val}));
  }
  handleSubmit(e){
    e.preventDefault();
    this.props.triggerSearch(this.state.searchTerm, this.state.searchType);
  }
  render() {
    return(
      <div className="search">
        <div className="search-bar">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input type='text' onChange={this.updateSearchTerm.bind(this)} placeholder="Search for something"/>
            <button type='submit'>Search</button>
          </form>
        </div>
      </div>
    )
  }
}
