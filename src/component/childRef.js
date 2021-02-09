import React from 'react';


class FormInput extends React.Component {

    constructor(props) {
      super(props);
      this.textInput = React.createRef();
    }
    
    hasText() {
      return this.textInput.current.value.length > 0;
    }
    
    selectInputText() {
      this.textInput.current.select();
    }
    
    render() {
      return (
        <div>
          {/* Creating a string ref named: textInput */}
          <input type="text" ref={this.textInput} />
        </div>
      );
    }
    
  }
export default FormInput