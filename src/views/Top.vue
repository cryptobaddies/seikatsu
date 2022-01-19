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
<main>
  <a href="#" class="card" v-on:click="makeActive('home')" >
  <div class="card__body">
    <div class="card__top">
      <div class="card__owner">
        <div class="card__avatar"></div>
        <div class="card__user">
          <span class="card__user__title">Owned by</span>
          <span class="card__user__code">2304RC</span>
        </div>
      </div>
      <div class="card__creator">
        <div class="card__avatar"></div>
        <div class="card__user">
          <span class="card__user__title">Created by</span>
          <span class="card__user__code">20AR02</span>
        </div>
      </div>
    </div>
    <div class="card__image">
      <img src="https://source.unsplash.com/OOFSqPWjCt0/1600x900" alt="">
    </div>
  </div>
  <div class="card__info">
    <p><b>Price:</b> ETH 2.00</p>
    <p>($3,565.48)</p>
  </div>
  <div class="card__footer">
    <span class="card__btn card__btn--secondary">View history</span>
    <span class="card__btn card__btn--primary">Buy Now</span>
  </div>
</a><!--
https://dribbble.com/shots/15319401-NFT-Store-Desktop
-->

<a href="#" class="card" v-on:click="makeActive('home')" >
  <div class="card__body">
    <div class="card__top">
      <div class="card__owner">
        <div class="card__avatar"></div>
        <div class="card__user">
          <span class="card__user__title">Owned by</span>
          <span class="card__user__code">2304RC</span>
        </div>
      </div>
      <div class="card__creator">
        <div class="card__avatar"></div>
        <div class="card__user">
          <span class="card__user__title">Created by</span>
          <span class="card__user__code">20AR02</span>
        </div>
      </div>
    </div>
    <div class="card__image">
      <img src="https://source.unsplash.com/OOFSqPWjCt0/1600x900" alt="">
    </div>
  </div>
  <div class="card__info">
    <p><b>Price:</b> ETH 2.00</p>
    <p>($3,565.48)</p>
  </div>
  <div class="card__footer">
    <span class="card__btn card__btn--secondary">View history</span>
    <span class="card__btn card__btn--primary">Buy Now</span>
  </div>
</a>
</main>
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
body {
  margin: 0;
  padding: 0;
  min-height: 100vh;
  background: #eceff1;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: 'DM Sans', system-ui, sans-serif;
  color: #263238;
}

.card {
  width: 22rem;
  max-width: 90%;
  border: solid 4px #fff;
  border-radius: 2rem;
  padding: 0.75rem;
  text-decoration: none;
  color: inherit;
  background: #eceff1;
  box-shadow: 0 16px 32px #cfd8dc;
  transition: all 400ms ease;
  flex-direction: row;
}
.card:hover {
  background: #fff;
}
.card__body {
  background: #fff;
  border-radius: 1.25rem;
  padding: 0.75rem;
}
.card__top {
  display: flex;
  font-weight: 500;
}
.card__owner, .card__creator {
  width: 50%;
  display: flex;
}
.card__owner {
  position: relative;
}
.card__owner::after {
  content: '';
  position: absolute;
  top: 0;
  right: -1px;
  width: 2px;
  height: 100%;
  border-radius: 2px;
  background: #eceff1;
}
.card__creator {
  flex-direction: row-reverse;
  text-align: right;
}
.card__avatar {
  width: 3rem;
  height: 3rem;
  background: #eceff1;
  border-radius: 100%;
  flex-shrink: 0;
}
.card__user {
  padding: 0 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.card__user__title {
  font-size: 0.75rem;
  color: #b0bec5;
}
.card__image {
  padding-top: 75%;
  position: relative;
  overflow: hidden;
  margin-top: 0.75rem;
  border-radius: 1rem;
  background: #eceff1;
  box-shadow: 0 16px 32px #eceff1;
}
.card__image img {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card__info {
  margin: 0.75rem;
  display: flex;
  justify-content: space-between;
}
.card__info p {
  margin: 0;
}
.card__footer {
  background: #fff;
  padding: 0.75rem;
  border-radius: 0.75rem 0.75rem 1.75rem 1.75rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.card__btn {
  width: 48%;
  padding: 1rem;
  text-align: center;
  font-weight: 500;
  transition: all 200ms ease;
}
.card__btn--primary {
  background: #263238;
  color: #eceff1;
  border-radius: 0.5rem 0.5rem 1.25rem 0.5rem;
}
.card__btn--primary:hover {
  background: #304ffe;
}
.card__btn--secondary {
  border-radius: 0.5rem 0.5rem 0.5rem 1.25rem;
}
.card__btn--secondary:hover {
  background: #eceff1;
  color: #304ffe;
}
*{
	margin:0;
	padding:0;
}

body{
	font:15px/1.3 'Open Sans', sans-serif;
	color: #5e5b64;
	text-align:center;
}

a, a:visited {
	outline:none;
	color:#389dc1;
}

a:hover{
	text-decoration:none;
}

section, footer, header, aside, nav{
	display: block;
}

/*-------------------------
	The menu
--------------------------*/

nav{
	display:inline-block;
	margin:60px auto 45px;
	background-color:#5597b4;
	box-shadow:0 1px 1px #ccc;
	border-radius:2px;
}

nav a{
	display:inline-block;
	padding: 18px 30px;
	color:#fff !important;
	font-weight:bold;
	font-size:16px;
	text-decoration:none !important;
	line-height:1;
	text-transform: uppercase;
	background-color:transparent;

	-webkit-transition:background-color 0.25s;
	-moz-transition:background-color 0.25s;
	transition:background-color 0.25s;
}

nav a:first-child{
	border-radius:2px 0 0 2px;
}

nav a:last-child{
	border-radius:0 2px 2px 0;
}

.nav__twitter, .nav__discord, .nav__etherscan,
.nav__opensea, .nav__docs,
.nav__services, .nav__raffle,
.nav__docs, .nav__game{
	background-color:#e35885;
}

p{
	font-size:22px;
	font-weight:bold;
	color:#7d9098;
}

p b{
	color:#ffffff;
	display:inline-block;
	padding:5px 10px;
	background-color:#c4d7e0;
	border-radius:2px;
	text-transform:uppercase;
	font-size:18px;
}
</style>


