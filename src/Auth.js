import React from 'react';

 const Auth = {
    isAuthenticated : false,
    authenticate(cb) {
      this.isAuthenticated = true
      setTimeout (cb, 100)
    },
    signOut(cb) {
      this.isAuthenticated = false
      setTimeout(cb, 100)
    }
  }

  export default Auth;