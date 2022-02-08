<template>
<!-- create a nav bar for nft website in vue with links to: Twitter Discord 
Etherscan Opensea, Home Raffle, Bridge Game, Stake Docs -->
<body>
  <header>
<h1>nfts</h1>
</header>
<nav v-bind:class="active" v-on:click.prevent>
  <div class="navbar-inner">
    <div class="container">
      <a href="#" class="brand" v-on:click="makeActive('brand')">NFT</a>
      <ul class="nav">
        <li><a class="nav__twitter" v-on:click="makeActive('twitter')">Twitter</a></li>
        <li><a href="#" class="nav__discord" v-on:click="makeActive('discord')">Discord</a></li>
        <li><a href="#" class="nav__etherscan" v-on:click="makeActive('etherscan')">Etherscan</a></li>
        <li><a href="#" class="nav__opensea" v-on:click="makeActive('opensea')">Opensea</a></li>
        <li><a href="#" class="nav__raffle" v-on:click="makeActive('raffle')">Home Raffle</a></li>
        <li><a href="#" class="nav__game" v-on:click="makeActive('game')">Bridge Game</a></li>
        <li><a href="#" class="nav__docs" v-on:click="makeActive('docs')">Stake Docs</a></li>
      </ul>
    </div>
  </div>
</nav>

</body>

</template>

<style>
.navbar {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  box-shadow: 0 1px 0 rgba(0,0,0,.05);
  -webkit-transition: all .2s ease-in-out;
  transition: all .2s ease-in-out;
  display: inline-flex;
}
.navbar-inner {
  background-color: #fff;
  border-radius: 6px;
  box-shadow: 0 5px 11px rgba(0,0,0,.18), 0 4px 15px rgba(0,0,0,.15);
  padding: 0 20px;
}
.navbar .brand {
  color: #777;
  font-size: 16px;
  font-weight: bold;
  line-height: 20px;
  padding: 14px 20px 10px;
  text-shadow: 0 1px 0 #fff;
}
.navbar .brand:hover {
  text-decoration: none;
}
.navbar .nav > li > a {
  background-color: transparent;
  border-radius: 0;
  color: #777;
  display: block;
  font-size: 14px;
  font-weight: bold;
  line-height: 20px;
  padding: 10px 20px;
  text-shadow: 0 1px 0 #fff;
}
.navbar .nav > li > a:hover,
.navbar .nav > li > a:focus {
  background-color: transparent;
  color: #333;
  text-decoration: none;
}
.navbar .nav > .active > a,
.navbar .nav > .active > a:hover,
.navbar .nav > .active > a:focus {
  background-color: transparent;
  color: #555;
  text-decoration: none;
}
.navbar .nav > li > .dropdown-menu:before {
  border-bottom: 7px solid transparent;
  border-left: 7px solid rgba(0,0,0,.2);
  border-top: 0;
  border-right: 0;
  content: '';
  display: inline-block;
  left: -7px;
  position: absolute;
  top: 10px;
}
.navbar .nav > li > .dropdown-menu:after {
  border-bottom: 6px solid transparent;
  border-left: 6px solid #fff;
  border-top: 0;
  border-right: 0;
  content: '';
  display: inline-block;
  left: -6px;
  position: absolute;
  top: 11px;
}
.navbar .nav > li > .dropdown-menu > li > a {
  background-color: #fff;
  border-bottom: 1px solid #e5e5e5;
  border-radius: 0;
  color: #777;
  display: block;
  font-size: 14px;
  font-weight: normal;
  line-height: 20px;
  padding: 10px 20px;
  text-shadow: 0 1px 0 #fff;
}

* *::before, *::after {
  box-sizing: border-box;
}

</style>


