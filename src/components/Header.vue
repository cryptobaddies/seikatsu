<template>
<div>
  <!-- chnage this to v-toolbar -->
    <v-navigation-drawer fixed clipped app v-model="navBar" class="navdrawer" >
      <v-list dense class="pt-0">
        <router-link to="/Signin" v-if="!logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Signin</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Top</v-list-tile-title>  
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/Message">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Message</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/Protected" v-if="logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Protected Page</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
        <router-link to="/Signout" v-if="logined">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Signout</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </router-link>
      </v-list>
    </v-navigation-drawer>
    <v-toolbar app class="navbar" >
      <v-toolbar-side-icon @click.stop="updateNaviBar"></v-toolbar-side-icon>
      <v-toolbar-title class="headline " >
        <span>Seikatsu</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat ><router-link to="/">Home</router-link></v-btn>
        <v-btn flat><router-link to="/Gallery">Gallery</router-link></v-btn>
        <v-btn flat><router-link to="/Miners">Miners</router-link></v-btn>
        <v-btn flat><router-link to="/Protected">About</router-link></v-btn>

      </v-toolbar-items>
    </v-toolbar>

    <v-content>
      <router-view v-if="loaded" />
    </v-content>
  </div>
</template>

<script>
import firebase from 'firebase/app' 
import "firebase/auth"
import "firebase/firestore"
import "firebase/messaging"

import firebaseConfig from '@/firebase/firebase';

import store from '@/store/index.js';

export default {
  name: 'Header',
  data () {
    return {
      navBar: false,
    }
  },
  created() {
    firebase.initializeApp(firebaseConfig);

    // for messaging
    if (firebase.messaging.isSupported() && firebaseConfig.messageKey) {
      const messaging = firebase.messaging();
      messaging.usePublicVapidKey(firebaseConfig.messageKey);

      // Request Permission of Notifications
      messaging.requestPermission().then(() => {
        console.log('Notification permission granted.');
        
        // Get Token
        messaging.getToken().then((token) => {
          console.log(token)
        })
      }).catch((err) => {
        console.log('Unable to get permission to notify.', err);
      });
    }
    store.dispatch('setUser', { }) 
  },
  computed: {
    logined() {
      return !!this.$store.getters.getUser;
    },
    loaded() {
      return !this.$store.getters.getUserLoading;
    },
  },
  methods: {
    updateNaviBar: function() {
      this.navBar =  !this.navBar;
    },

  },
}
</script>

<style>
  p {
  margin-bottom: 2px;
  }
  v-toolbar{
    font-size: 1.5rem;
  }
  .v-toolbar__content{
    color: rgb(255, 249, 252);
    height: 56px;
  }
  .theme--light.v-toolbar {
      background:#e35885;
      color: rgba(0,0,0,0.87);
}
 v-btn{

    align-items: center;
    border-radius: inherit;
    color: inherit;
    display: -ms-flexbox;
    display: flex;
    height: inherit;
    -ms-flex: 1 0 auto;
    flex: 1 0 auto;
    -ms-flex-pack: center;
    justify-content: center;
    margin: 0 auto;
    padding: 0 16px;
    transition: .3s cubic-bezier(.25,.8,.5,1);
    white-space: nowrap;
    width: inherit;

 }
</style>
