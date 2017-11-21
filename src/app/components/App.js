import React from 'react';
import { search, getConfig } from '../helpers/api';
import Search from './Search';
import Results from './Results';

export default class App extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      results: [],
      config: {}
    }
  }
  triggerSearch(term, type, page=1){
    search(term, type, page).then((res)=>{
      if(res.data && res.data.results.length){
        this.updateResults(res.data.results);
      }
    })
  }
  updateResults(r){
    let results = r || [];
    this.setState((prev) => ({...prev, results}));
  }
  componentWillMount(){
    getConfig().then((res) => {
      this.setState((prev) => ({...prev, config: res.data}))
    })
  }
  render() {
    return(
      <div className="main">
        <Search triggerSearch={this.triggerSearch.bind(this)}/>
        <Results results={this.state.results} imagePath={this.state.config.images ? this.state.config.images.secure_base_url : ''}/>
      </div>
    )
  }
}
