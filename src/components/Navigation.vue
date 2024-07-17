<template>
    <nav>
      <ul class="menu">
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About me</router-link></li>
        <li><router-link to="/projects">Projects</router-link></li>
        <li><router-link to="#contact">Contact</router-link></li>
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
  