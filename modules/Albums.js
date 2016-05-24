import React from 'react'
import { Link } from 'react-router'
import Album from './Album'

export default React.createClass({
  getDefaultProps(){
    return {
      albums: [
        {
          title: "Album 1",
          photos: [
            {
              title: "baboon",
              src: "baboon.jpg"
            },
            {
              title: "bears",
              src: "bears.jpg"
            },
            {
              title: "deer",
              src: "deer.jpg"
            }
          ]
        },
        {
          title: "Album 2",
          photos: [
            {
              title: "dog",
              src: "dog.jpg"
            },
            {
              title: "elk",
              src: "elk.jpg"
            },
            {
              title: "fox",
              src: "fox.jpg"
            }
          ]
        },
        {
          title: "Album 3",
          photos: [
            {
              title: "goat",
              src: "goat.jpg"
            },
            {
              title: "grizzly",
              src: "grizzly.jpg"
            },
            {
              title: "horses",
              src: "horses.jpg"
            }
          ]
        },
        {
          title: "Album 4",
          photos: [
            {
              title: "husky",
              src: "husky.jpg"
            },
            {
              title: "jellyfish",
              src: "jellyfish.jpg"
            },
            {
              title: "lion",
              src: "lion.jpg"
            }
          ]
        },
        {
          title: "Album 5",
          photos: [
            {
              title: "moose",
              src: "moose.jpg"
            },
            {
              title: "seagulls",
              src: "seagulls.jpg"
            },
            {
              title: "tiger",
              src: "tiger.jpg"
            }
          ]
        },
        {
          title: "Album 6",
          photos: [
            {
              title: "vulture",
              src: "vulture.jpg"
            },
            {
              title: "walrus",
              src: "walrus.jpg"
            },
            {
              title: "wolf",
              src: "wolf.jpg"
            }
          ]
        }
      ]
    }
  },
  componentWillMount(){
    this.setState(
      {
        currentAlbum: this.props.albums[0]
      }
    )
  },
  handleAlbumClick(e){
    this.setState(
      {
        currentAlbum: this.props.albums[e.currentTarget.id]
      }
    )
    e.preventDefault();
  },
  render() {
    return (
      <div className="nav">
        <aside className="albums__aside">
          <nav className="albums__nav">
      {this.props.albums.map(function(album, i){
        return <Link className="albums__nav--link" key={i} id={i} to={`/albums/${album.title}`} onClick={this.handleAlbumClick}> { album.title } </Link>

        }, this)
      }
          </nav>
        </aside>

        <Album className="album" album={this.state.currentAlbum}/>
      </div>
    )
  }
})
