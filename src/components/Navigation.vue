<template>
    <nav>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><a href="/about">About me</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </template>
  
  <style scoped>
  .menu {
    display: flex;
    list-style-type: none;
    padding: 0;
  }
  
  .menu li a {
    color: white;
    padding: 10px 15px;
    text-decoration: none;
  }
  
  .menu li a:hover {
    background-color: #555;
  }
  </style>
  