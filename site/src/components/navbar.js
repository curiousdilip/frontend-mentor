import React from 'react'

const navbar = () => {
  return (
    <nav class="navbar">
    <h1 class="nav-title">Frontend Projects</h1>
    <ul class="nav-links">
        <button class="theme-toggle" href="" id="toggle">
            <i class="fas" id="themeIcon"></i>
        </button>

        <a class="github" href="https://github.com/curiousdilip/frontend-mentor" target="_blank" rel="noreferrer">
            <i class="fab fa-github"></i>
        </a>

        <a class="twitter" href="https://twitter.com/curiousdilip" target="_blank" rel="noreferrer">
            <i class="fab fa-twitter"></i>
        </a>
        <a class="linkedin" href="https://linkedin.com/in/curiousdilip" target="_blank" rel="noreferrer">
            <i class="fab fa-linkedin"></i>
        </a>
    </ul>
</nav>
  )
}

export default navbar
