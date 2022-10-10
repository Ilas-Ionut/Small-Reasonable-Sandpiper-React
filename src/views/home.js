import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Small Reasonable Sandpiper</title>
        <meta property="og:title" content="Small Reasonable Sandpiper" />
      </Helmet>
      <button className="button">Button</button>
      <img
        alt="image"
        src="https://play.teleporthq.io/static/svg/default-img.svg"
        className="home-image"
      />
      <video
        src
        poster="https://play.teleporthq.io/static/svg/videoposter.svg"
        className="home-video"
      ></video>
      <h1>Heading</h1>
      <button className="button">Button</button>
      <span>Text</span>
      <div className="home-container1">
        <div className="home-container2"></div>
      </div>
    </div>
  )
}

export default Home
