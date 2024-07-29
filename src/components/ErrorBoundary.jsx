import React, { Component } from 'react';

// ErrorBoundary class component to catch and handle errors in the component tree
class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  // Lifecycle method to catch errors in child components
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  // Lifecycle method to log error information
  componentDidCatch(error, errorInfo) {
    this.setState({ error, errorInfo });
    // You can also log the error to an error reporting service here
  }

  render() {
    if (this.state.hasError) {
      // Fallback UI to display when an error is caught
      return (
        <div>
          <h1>Something went wrong.</h1>
          <details style={{ whiteSpace: 'pre-wrap' }}>
            {this.state.error && this.state.error.toString()}
            <br />
            {this.state.errorInfo.componentStack}
          </details>
        </div>
      );
    }

    // Render children if no error is caught
    return this.props.children;
  }
}

export default ErrorBoundary;
