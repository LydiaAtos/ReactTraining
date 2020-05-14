import React, { Component } from 'react';

class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = {hasError: false};
    }
  
    componentDidCatch(error, info) {
      this.setState({hasError: true});
      console.log("error caught");
    }
  
    render() {
        console.log("Error Boundary rendered " + this.state.hasError);
      if(this.state.hasError) return <div>Error!</div>;
      return (
          <div>
              <p>Parent component</p>
              {this.props.children};
          </div>
      );
    }
  }

  export default ErrorBoundary;