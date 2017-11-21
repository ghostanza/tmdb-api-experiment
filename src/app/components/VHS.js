import React from 'react';
require('../assets/styles/VHS.scss');

export default class VHS extends React.Component {
  spinBox(e){
    let target = e.currentTarget;
    target.classList.toggle('spin');
  }
  render() {
      let {backdrop_path, poster_path, title, release_date, tagline, overview, runtime} = this.props.movie,
          imagePath = this.props.imagePath,
          maxDescLength = 400,
          posterImg = poster_path ? `${imagePath}w500${poster_path}` : '';
      return(
        <div className="vhs-wrap">
          <div className="vhs-box" onClick={this.spinBox.bind(this)}>
            <div className="front" style={{backgroundImage: `url(${posterImg})`}}>
              {!poster_path ? title : ''}
            </div>
            <div className="back">
              <img className='background' src={posterImg} alt={`${title} back of box`}/>
              {backdrop_path ? (<img className="hero" src={`${imagePath}w780${backdrop_path}`} alt={`${title} hero image`}/>) : ''}
              {tagline ? (<div className="tagline"><p>{tagline}</p></div>) : '' }
              <div className="description"><p>{overview.length <= maxDescLength ? overview : `${overview.substr(0,maxDescLength)}...`}</p></div>
              { runtime ? (<div className="runtime"><p>{release_date ? `${release_date.substr(0,4)} / ` : 'Runtime: '}{runtime}min</p></div>) : ''}
            </div>
            <div className="side left" style={{backgroundImage: `url(${posterImg})`}}></div>
            <div className="side right" style={{backgroundImage: `url(${posterImg})`}}></div>
          </div>
        </div>
      )
  }
}
