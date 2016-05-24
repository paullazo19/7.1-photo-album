import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitial(){
    return {
        isOpen: false
    }
  },
  handlePhotoClick(e){
    console.log(e.target);
    this.setState(
      {
        isOpen: true
      }
    )
  },
  render() {
    return (
    <section>
      <ul className="album__thumbnail--list">
        <h3 className="album__thumbnail--heading">{this.props.album.title}</h3>
        {this.props.album.photos.map(function(photo, i){
          return <li key={i} className="album__thumbnail" onClick={this.handlePhotoClick}><div className="album__thumbnail--image"><img key={i} src={`../assets/${photo.src}`} alt={photo.title} /></div><h5 className="album__thumbnail--title">{photo.title}</h5></li>

        }, this)
        }
      </ul>
      <div className="hidden" isOpen={this.props.isOpen ? "modal" : "hidden"}></div>

    </section>
    )
  }
})
