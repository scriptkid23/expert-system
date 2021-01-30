import React from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import './App.global.css';

const App = () => {
  const [input, setInput] = React.useState([]);
  const [model, setModel] = React.useState('');
  const myModeFn = () => {
    return {
      token: function (stream, state) {
        if (stream.match('use')) {
          return 'keyword';
        } else {
          stream.next();
          return null;
        }
      },
    };
  };
  const maximin = (A,numberVariable) => {
    console.log(A);
    console.log(numberVariable);
    let result = {};
    Object.keys(A).map(value => {
      result[value] = Math.min.apply(Math,A[value]);
    })
    console.log(result);
    let Sorted = Object.entries(result).sort((prev, next) => prev[1] - next[1])
    console.log(Sorted.pop());
  }
  const handleInput = (input) => {
    var inputConvert = [];
    var A = {};
    var p ={};
    input.map((value) => {
      inputConvert.push(value.replace(/[\r\n]+/g, ''));
    });
    console.log(inputConvert);
    console.log(inputConvert[0].split(/\s+/g)[1]);
    setModel(inputConvert[0].split(/\s+/g)[1]);
    var variableOfModel = [];
    console.log(inputConvert);
    for (let i = 1; i < inputConvert.length; i++) {
      if (inputConvert[i].length !== 0) {
        variableOfModel.push(inputConvert[i]);
      }
    }
    for (let i = 0; i < variableOfModel.length; i++) {
      let temp = variableOfModel[i].replace(/\s/g, '').split('=');
      console.log(temp[0].match(/A/g))
      if(temp[0].match(/A/g)){
       A[temp[0]] = JSON.parse(temp[1]);
      }
     if(temp[0].match(/p/g)){
       p[temp[0]] = JSON.parse(temp[1]);
     }
    }
    maximin(A,variableOfModel.length);
    
    
  };
  return (
    <div className="wrapper">
      <div className="editor">
        <CodeMirror
          defineMode={{ name: 'myMode', fn: myModeFn }}
          value="<h1>I ♥ react-codemirror2</h1>"
          options={{
            theme: 'material',
            lineNumbers: true,
          }}
          onChange={(editor, value) => {
            // console.log(editor.getValue().split(";");
            setInput(editor.getValue().split(';'));
          }}
        />
      </div>
      <button type="button" onClick={() => handleInput(input)}>
        Start
      </button>

      <div className="result"></div>
    </div>
  );
};
export default App;
