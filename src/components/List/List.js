import React from 'react';
import style from './List.scss';
import { ListGroup, ListGroupItem } from 'react-bootstrap';


/**
 * UI Component
 * @type {Class}
 */
class List extends React.Component {
  /**
   * Constructor for UI Component
   * @param  {Object} props  Props passed to this class
   * @return {void}
   */
  constructor (props) {
    super(props);
    this.state = { request: null };
  }

  // componentDidMount () {
  //   let that = this;
  //   fetch('http://localhost:5000/hello', {mode: 'cors'})
  //     .then(function(response) {
  //       response.text().then(function (text) {
  //         that.setState({request: text});
  //       });
  //     })
  // }

  componentWillMount () {
    let that = this;
    fetch('http://localhost:5000/hello')
      .then(function(response) {
        return response.json();
      })
      .then(function(myresponse) {
        that.setState({request: myresponse})
      })
  }

  /**
   * Render function for UIComponent Component
   * @return {JSX} Component to render
   */
  render () {

    return (
      <div className={style.container}>
        <ListGroup>
          {this.state.request ? this.state.request.map(element => <ListGroupItem>{element.description} {element.amount}</ListGroupItem>) : null}
        </ListGroup>
      </div>
    );
  }
}

export default List;
