<template>
<!-- create a nav bar for nft website in vue with links to: Twitter Discord 
Etherscan Opensea, Home Rdffaaffle, Bridge Game, Stake Docrrs ------------------>



<body>
    <!--Navbar-->
    <nav class="navbar navbar-default navbar-fixed-top">
        <div class="container-fluid">
            <div class="navbar-header">
                <a class="navbar-brand" href="#"><img alt="Brand" src="https://i.imgur.com/s48YcyN.png" class="img-responsive" style="width:37px;"/></a>
                
            </div>
            <ul class="nav navbar-nav">
                <li class="active"><a class="nav-link scroll" href="#purpose">Purpose</a></li>
                <li><a class="nav-link scroll" href="#learn">Learn</a></li>
                <li><a class="nav-link scroll" href="#com">Community</a></li>
                <li><a class="nav-link scroll" href="#show">Showcase</a></li>
                <li><a class="nav-link scroll" href="#source">Sources</a></li>
            </ul>
        </div>
    </nav>
    
    <!--Vue top logo-->
    <div class="container mx-auto d-block">
        <img id="top" class="mx-auto d-block" src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1644348717/nft/eevee_b1997e.png" alt="x" style="width:200px;">
    </div>
    
    <!--Container div-->
    <div class="container" id="purp">
        <h1 id="purpose" class="text-center text-secondary">Purpose</h1>
        <h4 class="text-center text-secondary">The Progressive JavaScript Framework</h4>
         <div class="container mx-auto d-block">
           <img id="eYou" src="https://res.cloudinary.com/madeleinesalondecoiffure/image/upload/v1644348588/nft/purugly_loe5wh.png" class="mx-auto d-block img-circle" alt="purugly" style="width:175px;">
           </div>
               <div id="app" class="card-wrapper">
 <div id="app" class="card-wrapper">
  <analytics-card v-for="(card, index) in cards" :key="card" :card="card" :color="colors[index % colors.length]" :index="index">
     <div class="card" ref="card">
          <div class="card-icon" :style="{backgroundColor: color.bg}">
            <i :class="card.icon" :style="{color: color.text}"></i>
          </div>
          <div class="card-value"> {{ cardValue }}</div>
          <div class="card-title">{{ card.title }}</div>
          <div class="card-status" :style="{ color: this.status > 0 ? '#35AF8E' : '#FF2332' }"> 
            <span>
              <i :class="status > 0 ? 'fas fa-angle-up' : 'fas fa-angle-down'"></i>
            </span> 
            {{ calculateStatus(card.newVal, card.pastVal) + '%' }}
        </div>
        </div> 
    
    
    
    
  </analytics-card>
</div>
</div>
        <p>Vue.js is a JavaScript framework with optional tools for user interface in web development. With Vue we can make applications faster, more attractive and user friendly. VueJS was created by Evan You who at the time worked for google prototyping in the web browser using Angular. In coming up with the vue framework, You figured he would just take parts of angular he really liked and built something lightweight without all the extra concepts involved with Angular. <br/></p>
        
        <p>Syntax wise, vue is kind of like Angular and will look similar to it (e.g. v-if vs ng-if).However, if we were to compare VueJs to another framework, it would be React as they both:</p>
            <ul>
                <li>Utilize a virtual DOM</li>
                <li>provide reactive and composable view components</li>
                <li>maintain focus in the core library, with concerns such as routing and global state management handled by companion libraries</li>
            </ul>
            <p>Vue does point out point out where React takes the wheel from them, for example in the richness of their ecosystem and abundance of their custom renderers.
But where React is outshined by vue in:
</p>
       <ul>
               <li><strong>Optimization Efforts</strong> - removes the need for a whole class of performance optimizations</li>
               <li><strong>HTML &amp; CSS</strong> -  React, everything is just JavaScript. Not only are HTML structures expressed via JSX, the recent trends also tend to put CSS management inside JavaScript as well. Vue embraces classic web technologies and builds on top of them.</li>
            <!--<li><strong>Scale</strong> - Finally, Vue offers a CLI project generator that makes it frivolously easy to start a new project using your choice of build system. React is also making strides in this area with create-react-app, but it currently has a few limitations: 
               <li class="align-content-center">It does not allow any configuration during project generation, while Vue’s project templates allow customization</li>
               <li class="align-content-center">It only offers a single template that assumes you’re building a single-page application, while Vue offers a wide variety of templates for various purposes and build systems.</li>
               <li class="align-content-center">It cannot generate projects from user-built templates, which can be especially useful for enterprise environments with pre-established conventions.</li>
           </li>-->
       </ul>
       
      <div>
          <h1 id="learn" class="text-center text-secondary">Learn</h1>
          <h4 class="text-center text-secondary">Tutorials From Around The Web</h4>
          <div class="container mx-auto d-block">
              <img id="brain" src="https://i.imgur.com/OwJHSz2.png" class="mx-auto d-block" alt="working brain" style="width:100px;">
          </div>
          <p>VueJS being one of the most popular JavaScript frameworks has a ton of free tutorials out there and they all represent the same information. Some brief history, how to install, the syntax used and some examples to follow to create your first app(a list of some kind). Requirements to understand and implement this framework would be basic knowledge of HTML, CSS, and JS.<br /></p>
          <p>VueJs is a frontend framework so its main focus is on the view layer and can be easily integrated into big projects for front-end development without any issues. Features used in VueJs are:</p>
          <ul>
              <li><strong>Virtual Dom</strong> - Changes made to a dom replica in the form of JavaScript data structures. When changes are to be made, they are made to the JavaScript data structures and then compared to the original data structure. The final changes are then updated to the real DOM, which the user will see changing. This is good in terms of optimization, it is less expensive and the changes can be made at a faster rate. </li>
              <li><strong>Data Binding</strong> - Data binding helps manipulate or assign values to HTML attributes, change the style, and assign classes with the help of a binding directive called v-bind.
              </li>
              <li><strong>Components</strong> - This feature creates custom elements, which can be reused in HTML.</li>
              <li><strong>Event Handling</strong> - v-on is the attribute added to the DOM elements to listen to the events in VueJS.</li>
              <li><strong>Animation/ Transition</strong> - VueJS has a built-in transition component effect and we can easily add third party animation libraries to add more interactivity to the interface.
              </li>
              <li><strong>Computed Properties</strong> - A very important feature that will listen to the changes made to the UI elements and performs the necessary calculations.
              </li>
              <li><strong>Directives</strong> - VueJS has built-in directives such as v-if, v-else, v-show, v-on, v-bind, and v-model, which are used to perform various actions on the frontend.</li>
              <li><strong>Watchers</strong> - Watchers are applied to data that changes like form input elements. We won’t have to add any additional events, this feature takes care of handling any data changes making the code simple and fast.</li>
          </ul>
      </div>
       <div>
           <h1 id="com" class="text-center text-secondary">Community</h1>
           <h4 class="text-center text-secondary">Vue Hangouts</h4>
           <div class="container mx-auto d-block">
           <img id="unity" src="https://i.imgur.com/VyQrXQG.png" class="mx-auto d-block" alt="community" style="width:100px;">
           </div>
           <p>VueJs has many communities around the web for discussion. The reddit community for example has many instances where people ask a question or mention a area of difficulty and people in the community are quick to respond with solutions or tips. The downside of sites like reddit however, is that people will sometimes go in on you for asking a “noob” question that can be found in the documentation. Its best to always refer to the documentation before asking a question because responses can be brutal at times.</p>
       </div>
       <div>
           <h1 id="show" class="text-center text-secondary">Showcase</h1>
           <h4 class="text-center text-secondary"></h4>
           <p><a href="https://redredefined.preciosacomponents.com/?ref=madewithvuejs.com" target="_blank">Redredefind</a> has a very cool website! Their color scheme and use of animations is great!
               I also really like how simple yet interactive <a href=" https://happyplants.garden/intro" target="_blank">Happy Plants</a> is. From inspecting the site we can see that they use lots of virtual dom to make changes to the web page and animations. I don't have many dislikes to this site other than its font and color scheme.
           </p>
           <p>VueJs is the perfect beginner framework because of how easy it is to use. The benefits of using vueJs are many but my favorite part of it is that it cuts several lines of code in to a few. The documentation is pretty easy to follow and so are the tutorials. I’d say Vue is the perfect topping onto your vanilla JS ice cream. </p>
           <div class="row">
               <div class="col-lg-6 col-2 "><a href="https://redredefined.preciosacomponents.com/?ref=madewithvuejs.com" target="_blank"><img id="red" class="img-thumbnail img-fluid mx-auto d-block" src="https://i.imgur.com/CcWMlB3.jpg" alt="Redredefined"></a></div>
               <div class="col-lg-6 col-2 "><a href="https://happyplants.garden/intro" target="_blank"><img id="hp" class="img-thumbnail img-fluid mx-auto d-block" src="https://i.imgur.com/CcAMrzj.jpg" alt="happyPlants"></a></div>

           </div>
       </div>
       <div>
           <h1 id="source" class="text-center text-secondary">Source</h1>
           <h4 class="text-center text-secondary">Where I site my sources</h4>
             <div class="container mx-auto d-block">
              <img id="chip" src="https://i.imgur.com/aSdR3pm.png" class="mx-auto d-block" alt="working chip" style="width:90px;">
              <h3>Purpose</h3>
              <ul>
                  <li><a href="https://vuejs.org/" target="_blank">VueJS</a></li>
                  <li><a href="https://hackernoon.com/what-is-vue-js-and-what-are-its-advantages-4071b7c7993d" target="_blank">Hackernoon</a></li>
              </ul>
              <h3>Tutorials</h3>
              <ul>
                  <li><a href="https://www.vuemastery.com/courses/intro-to-vue-js/vue-instance/" target="_blank">Vue Mastery</a></li>
                  <li><a href="https://laracasts.com/series/learn-vue-2-step-by-step" target="_blank">LaraCasts</a></li>
                  <li><a href="https://egghead.io/courses/develop-basic-web-apps-with-vue-js" target="_blank">EggHead</a></li>
              </ul>
              <h3>Community</h3>
              <ul>
                  <li><a href="https://dev.to/t/vue" target="_blank">Dev</a></li>
                  <li><a href="https://www.reddit.com/r/vuejs/" target="_blank">Reddit</a></li>
                  <li><a href="https://stackoverflow.com/search?q=vueJS" target="_blank">StackOverflow</a></li>
                  <li><a href="https://github.com/vuejs-community" target="_blank">GitHub</a></li>
              </ul>
              <h3>Showcase</h3>
              <ul>
                  <li><a href=" https://madewithvuejs.com/ " target="_blank">Made With Vue</a></li>
                  <li><a href="https://vuejsprojects.com/" target="_blank">VueJS Projects</a></li>
                  <li><a href="https://vuejsexamples.com/" target="_blank">VueJS Examples</a></li>
                  
              </ul>
          </div>
           
       </div>
        
    </div>

    <!-- Footer -->   
   <footer class="container bg-4 text-center">
  <p>A Site By <a href="https://www.ericrgarcia.com">www.EricRGarcia.com</a></p> 
</footer>
</body>


</template>
<script>
    export default {
      props: ["card", "color", "index"],
      data() {
          return {
      status: 0,
      loading: true,
      hover: true,
      colors: [
      {
        bg: "#E5F3FE",
        text: "#0383FF"
      },
      {
        bg: "#F3F1FF",
        text: "#876CFF"
      },
      {
        bg: "#FFF8E5",
        text: "#FEB801"
      },
      {
        bg: "#EBF9E9",
        text: "#42C73E"
      }
    ],
    cards: [
      {
        newVal: 21500,
        pastVal: 20452,
        unit: "k",
        title: "Total lines of code",
        icon: "fas fa-grip-lines"
      },
      {
        newVal: 350,
        pastVal: 189,
        unit: "",
        title: "Total commits",
        icon: "fas fa-pen"
      },
      {
        newVal: 5,
        pastVal: 15,
        unit: "%",
        title: "Total contributions",
        icon: "fas fa-external-link-alt"
      }
    ]
    };
  },
    
    }
  

    
</script>
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
@import url('https://fonts.googleapis.com/css?family=Kodchasan&display=swap');

body,html{
    height: 100%;
    margin: 0;
    background: linear-gradient(141deg, #34495e 0%, #39ba84 51%, #394d84 75%);
    background-repeat: no-repeat;
	background-size: cover;
	background-attachment: fixed;
    font-family: 'Kodchasan', sans-serif;
    color: #bec1c4;
}

#top{
    display: block;
    margin-top: 60px;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
    }

#purp{
    border: 1.5px solid #34495e;
}
#eYou{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

#brain{
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%;
}

#unity{
       display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; 
}

#red{
   display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; 
}

#hp{
   display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; 
}

#chip{
   display: block;
    margin-left: auto;
    margin-right: auto;
    width: 50%; 
}
.bg-4 { 
    margin: 25px;
    border: 1.5px solid #39ba84;
    background-color: #394d84;
    color: #39ba84;
}
#foot{
    margin-top:35px !important;
}
.card-wrapper {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}
.card {
    background: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 250px;
    margin: 10px;
    padding: 20px;
    box-shadow: 0 20px 40px 0 rgba(204, 204, 204, 0.1);
    border: 1px solid rgba(0, 0, 0, 0.1);
    border-radius: 5px;
    position: relative;
}
.card-value {
    font-size: 30px;
    font-family: "Roboto", sans-serif;
    font-weight: 500;
    color: #2d2f38;
    padding: 20px;
}
.card-title {
    color: #949ea1;
    font-weight: 500;
    font-size: 14px;
    margin-bottom: 10px;
}
.card-icon {
    width: 50px;
    height: 50px;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}
.card-status {
    font-weight: 500;
    font-size: 14px;
}
@media (max-width: 600px) {
    body {
        height: auto;
    }
}
@media (max-width: 250px) {
    .card {
        width: 90%;
    }
}


</style>


