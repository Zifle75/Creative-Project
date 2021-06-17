<template>
  <div id="app">
    <header id="header">
      <h1>The Inspiration Generator</h1>
      <nav>
	<router-link to="/"><i class="fas fa-home"></i></router-link>
	<router-link to="/dashboard"><i class="fas fa-user"></i></router-link>
      </nav>
    </header>
    <router-view />
  </div>
</template>


<style>

body {
  font-family: 'Work Sans', sans-serif;
  font-weight: 300;
  font-size: 13pt;
  margin: 0px 100px;
}

#header {
  /* Hopefully a Rectangle */
  height:125px;
  width: 100%;

  /* Fixed Position */
  position: fixed;
  z-index: 10000;
  left: 50%;
  transform: translate(-50%, 0);

  /* Color and Alignment */
  background: #000000;
  text-align: center;
  box-shadow: 0 0 0 1em #FFF;
}

nav {
  display: flex;
  justify-content: center;
}

h1 {
  color: #fff;
  font-size: 30px;
}

h2 {
  font-size: 18px;
}

#header .fas {
  font-size: 25px;
  color: #fff;
  width: 50px;
}

.pure-button-primary {
  background-color: #277E8E;
}


</style>
