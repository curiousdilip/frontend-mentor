import React from 'react'

const navbar = () => {
  return (
    <nav className="navbar">
    <h1 className="nav-title">Frontend Projects</h1>
    <ul className="nav-links">
        <button className="theme-toggle" href="" id="toggle">
            <i className="fas" id="themeIcon"></i>
        </button>

        <a className="github" href="https://github.com/curiousdilip/frontend-mentor" target="_blank" rel="noreferrer">
            <i className="fab fa-github"></i>
        </a>

        <a className="twitter" href="https://twitter.com/curiousdilip" target="_blank" rel="noreferrer">
            <i className="fab fa-twitter"></i>
        </a>
        <a className="linkedin" href="https://linkedin.com/in/curiousdilip" target="_blank" rel="noreferrer">
            <i className="fab fa-linkedin"></i>
        </a>
    </ul>
</nav>
  )
}

export default navbar
