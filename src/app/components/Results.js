import React from 'react';
import VHS from './VHS';
import { getMovies } from '../helpers/api';

export default class Results extends React.Component {
  constructor(p){
    super(p);
    this.state = {
      movies : []
    }
  }
  componentWillReceiveProps(nextProps){
    if(this.props.results !== nextProps.results){
        this.fetchMovieData(nextProps.results);
    }
  }
  componentWillMount(){
    this.fetchMovieData(this.props.results);
  }
  fetchMovieData(r){
    if(r.length){
      let ids = r.map((m) => { return m.id });
      getMovies(ids).then((res) => {
        this.setState((prev) => ({...prev, movies: res.map((i) => { return i.data })}))
      });
    }
  }
  render() {
    return(
      <div className={`results ${this.state.movies.length ? '' : 'no-results'}`}>
        {this.state.movies.length ?
          (
            <ul className="results-list">
              {this.state.movies.map((m) => {
                return( <VHS movie={m} key={m.id} imagePath={this.props.imagePath}/> )
              })}
            </ul>
          ) : "NO RESULTS"
        }
      </div>
    )
  }
}
