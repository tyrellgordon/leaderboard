import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './stylesheets/index.css';
import 'semantic-ui-css/semantic.min.css'

ReactDOM.render(
  <App />,
  document.getElementById('root')
);

// var cores = ["#FFFFFF", "#C0C0C0", "#808080", "#000000", "#FF0000", "#800000", "#FFFF00", "#808000", "#00FF00", "#008000", "#00FFFF", "#008080", "#0000FF", "#000080", "#FF00FF", "#800080"];
//
// window.onload = function trocaCor(){
//   var ncores = cores.length;
//   // var logo = document.getElementById("logo").style;
//
//   var i = Math.floor(Math.random() * ncores);
//   var j = Math.floor(Math.random() * ncores);
//
//   while(i == j){
//     var i = Math.floor(Math.random() * ncores);
//     var j = Math.floor(Math.random() * ncores);
//   }
//
//
//   logo.textShadow = "1px 2px "+cores[i];
//   logo.color = cores[j];
//
//   setTimeout(trocaCor, 300);
}
