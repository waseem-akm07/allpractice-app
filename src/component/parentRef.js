import React from 'react';
import FormInput from "./childRef";

export default class Apps extends React.Component {
    constructor(props) {
      super(props);
      this.myInput = React.createRef();  
    }
    render() {
      return (
        <div>
          <input ref={this.myInput}/>
          
          <button onClick={() => {
            this.myInput.current.focus();
          }}>
            focus!
          </button>
          <p>aa bb cc dd</p>                             
        </div>
      );
    }
  }
// const MyComponent = (props) => {

//     const formInput = React.createRef();
    
//     const inputSelection = () => {
//       const input = formInput.current;
      
//       if (input.hasText()) {
//         input.selectInputText();
//       }
//     };
    
//     return (
//       <div>
//         <button type="button" onClick={inputSelection}>
//           Select Input
//         </button>
        
//         <FormInput ref={formInput} />
//       </div>
//     );
    
//   };
// export default MyComponent