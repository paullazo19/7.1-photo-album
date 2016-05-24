import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  getInitialState(){
    return {
        isOpen: false,
        currentPhoto: this.props.album.photos[0]
    }
  },
  handlePhotoClick(e){
    this.setState(
      {
        isOpen: true,
        currentPhoto: this.props.album.photos[e.currentTarget.id]
      }
    )
  },
  closeModal(e){
    this.setState(
      {
        isOpen: false
      }
    )
  },
  render() {
    console.log(this.state.currentPhoto.src);
    return (
    <section className="album__thumbnail--list">
      <ul>
        <h3 className="album__thumbnail--heading">{this.props.album.title}</h3>
        {this.props.album.photos.map(function(photo, i){
          return <li key={i} id={i} className="album__thumbnail" onClick={this.handlePhotoClick}><div className="album__thumbnail--image"><img key={i} src={`../assets/${photo.src}`} alt={photo.title} /></div><h5 className="album__thumbnail--title">{photo.title}</h5></li>

        }, this)
        }
      </ul>
      <div className={this.state.isOpen ? "modal" : "hidden"} photo={this.state.currentPhoto}><button className="modal__backButton" onClick={this.closeModal}><i className="fa fa-chevron-left"></i>Back to {this.props.album.title}</button><h2 className="album__photo--title">{this.state.currentPhoto.title}</h2><img className="album__photo--fullSize" src={`../assets/${this.state.currentPhoto.src}`}/></div>

    </section>
    )
  }
})
