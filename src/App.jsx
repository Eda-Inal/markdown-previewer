import { useState } from 'react';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Markdown from 'https://esm.sh/react-markdown@9';
import { help } from './redux/markdownSlice';
import Qm from './components/questionmark';
import { onchangeText,clickedButton } from './redux/markdownSlice';

function App() {
  const dispatch = useDispatch();
  const content = useSelector(state => state.markdown.content);
  const situation = useSelector(state => state.markdown.situation) ;
  console.log(situation);

  return (
    <>
      <h1 className='text-4xl text-white'>Markdown Previewer</h1>
      <div className='qm  w-auto h-auto '>
        <div className='inside' onClick={()=>dispatch(clickedButton())}>
       ?
        </div>
      
      </div>
    
      <div className='container mt-5 col-6  flex '>
        <div className='mr-4 '>
          {
            situation && <textarea 
            className='text-2xl w-48 sm:w-60 md:w-80 lg:w-96  h-[500px] sm:h-[600px] p-5'
            value={help}
            onChange={(e)=> dispatch(onchangeText(e.target.value))}
          />
          }
          {
            situation && <div className='ml-4 div'> 
            <div className='w-48 sm:w-60 md:w-80 lg:w-96 bg-white  h-[500px] sm:h-[600px] p-5'>
             
            <div className='normal-text start-text'>
                <Markdown>{help}</Markdown>
              </div>
              </div>
            
          </div>
          }
         {
          !situation && <textarea 
          className='text-2xl w-48 sm:w-60 md:w-80 lg:w-96  h-[450px] sm:h-[600px] p-5'
          value={content}
          onChange={(e)=> dispatch(onchangeText(e.target.value))}
        />
         } 
        </div>
        {
          !situation && <div className='ml-4 div'> 
          <div className='w-48 sm:w-60 md:w-80 lg:w-96 bg-white  h-[450px] sm:h-[600px] p-5'>
           
          <div className='normal-text start-text'>
              <Markdown>{content}</Markdown>
            </div>
            </div>
          
        </div>
        }
        
      </div>
    </>
  );
}

export default App;
