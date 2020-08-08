import React, { Component } from 'react';
import EpicMenu from './EpicMenu';
import fire from './config/fire';
import firebase from 'firebase';

firebase.firestore().collection('data').add({
  
})


class App extends Component {
  
  render() {
    let links = [
      { label: 'Canary', link: '#home', active: true },
      
     
    ];
    

    return (
      <div className="container center">
        <EpicMenu links={links}  />
        
       <fire/>
      </div>
    );
  }
  
  
}



export default App;