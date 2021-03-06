import React from 'react'
import Modal from '../../components/UI/Modal/Modal'
import Aux from '../Aux';
import axios from '../../axios-file'

const withError = (WrappedComponent, axios) => {
  return class extends React.Component {
    state = {
      error: null
    }


    componentWillMount() {
      this.reqInterceptor = axios.interceptors.request.use(req => {
        this.setState({
          error: null
        })
        return req;
      })
      this.resInterceptor = axios.interceptors.response.use(resp => resp, error => {
        this.setState({
          error: error

        })

      })
    }

    componentWillUnmount() {
      axios.interceptors.request.eject(this.reqInterceptor)
      axios.interceptors.response.eject(this.resInterceptor)

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
            modalClosed={this.errorHandler}>
            {this.state.error ? this.state.error.message : null}
          </Modal>
        <WrappedComponent {...this.props} />
        </Aux>
      )
    }
  }
}

export default withError
