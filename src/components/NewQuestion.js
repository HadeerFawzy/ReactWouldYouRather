import React from 'react';
import '../stylesheets/new_question.scss';

const NewQuestion = () => (
  <div className='new-ques-wrap_nqw'>
    <header>
      <h1>
        Create New Question
      </h1>
    </header>
    <form>
      <p className='form-title'>
        Complete the question:
      </p>
      <h3 className='question-text'>
        Would you rather ...
      </h3>
      <input type="text" className="option-input" name="optionOne" placeholder="Enter Option One Text Here"/>
      <p className="or">
        OR
      </p>
      <input type="text" className="option-input" name="optionTwo" placeholder="Enter Option Two Text Here"/>
      <input type="submit" value="Submit" className="submit"/>
    </form>
  </div>
);

export default NewQuestion;
