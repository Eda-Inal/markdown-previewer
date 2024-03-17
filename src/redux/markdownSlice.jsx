import { createSlice } from '@reduxjs/toolkit';
export const help = `Heading
=======

Sub-heading
-----------

### Another deeper heading

Paragraphs are separated
by a blank line.

Leave 2 spaces at the end of a line to do a
line break

Text attributes *italic*, **bold**,
\`monospace\`, ~~strikethrough~~ .

Shopping list:

  * apples
  * oranges
  * pears

Numbered list:

  1. apples
  2. oranges
  3. pears

The rain---not the reign---in
Spain.

 *[Herman Fassett](https://freecodecamp.com/hermanfassett)*`;

export const markdownSlice = createSlice({
    name : 'markdown',
    initialState :{
content :"",
situation : false
    },
    reducers : {
        onchangeText: (state,action) => {
            state.content = action.payload
        },
        clickedButton : (state) =>{
state.situation = !state.situation
        },

    }
})
export const {onchangeText,clickedButton} = markdownSlice.actions
export default markdownSlice.reducer