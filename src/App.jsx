import React from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Markdown from 'https://esm.sh/react-markdown@9';
import { help } from './redux/markdownSlice';
import { onchangeText, clickedButton } from './redux/markdownSlice';

function App() {
  const dispatch = useDispatch();
  const content = useSelector(state => state.markdown.content);
  const situation = useSelector(state => state.markdown.situation);

  return (
    <div className="app">
      <header className="header">
        <h1 className="title">Markdown Previewer</h1>
        <button className="qm-button" onClick={() => dispatch(clickedButton())}>
          ?
        </button>
      </header>
      <main className="main">
        <div className="input-container">
          <textarea
            className="input"
            value={situation ? help : content}
            readOnly={situation}
            onChange={(e) => dispatch(onchangeText(e.target.value))}
          />
        </div>
        <div className="preview-container bg-white">
          <div className="preview bg-white">
            {situation ? (
              <Markdown>{help}</Markdown>
            ) : (
              <Markdown>{content}</Markdown>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
