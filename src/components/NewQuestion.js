import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../actions/shared'
import '../stylesheets/new_question.scss';

class NewQuestion extends Component{
  
  state = {
    optionOne: '',
    optionTwo: ''
  }

  handleSubmit = (e) => {
    e.preventDefault()
    console.log(this.state.optionOne, this.state.optionTwo)
    const { dispatch } = this.props
    dispatch(handleAddQuestion(this.state.optionOne, this.state.optionTwo))
    // return (
    //   <Redirect to='/' />
    // )
  }

  render(){
    return(
    <div className='new-ques-wrap_nqw'>
      <header>
        <h1>
          Create New Question
        </h1>
      </header>
      <form onSubmit={this.handleSubmit}>
        <p className='form-title'>
          Complete the question:
        </p>
        <h3 className='question-text'>
          Would you rather ...
        </h3>
        <input type="text" 
               className="option-input" 
               name="optionOne" 
               placeholder="Enter Option One Text Here"
               onChange={(e) => this.setState({
                optionOne : e.target.value
               })}/>
        <p className="or">
          OR
        </p>
        <input type="text" 
               className="option-input" 
               name="optionTwo" 
               placeholder="Enter Option Two Text Here"
               onChange={(e) => this.setState({
                optionTwo : e.target.value
               })}/>
        <input type="submit" 
               value="submit" 
               className="submit"
               />
      </form>
    </div>
    )
  }
}

export default connect()(NewQuestion);
