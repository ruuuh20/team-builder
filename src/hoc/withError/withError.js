import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux'

const withError = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }
    componentDidMount() {
      axios.interceptors.request.use(req => {
        this.setState({
          error: null
        })
        return req;
      })
      axios.interceptors.response.use(resp => resp, error => {
        this.setState({
          error: error

        })
      
      })
    }

    errorHandler= () => {
      this.setState({
        error: null
      })
    }
    render() {
      return (
        <Aux>
          <Modal show={this.state.error}
            clicked={this.errorHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
        <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withError
