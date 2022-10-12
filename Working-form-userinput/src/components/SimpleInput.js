import { useEffect,useRef, useState } from "react";
const SimpleInput = (props) => {
  const nameInputRef = useRef();
  const [enteredName, setEnteredName] = useState('');
  const [enteredNameIsValid, setEnteredNameIsValid] = useState(false);
  const [enteredNameTouched, setEnteredNameTouched] = useState(false);
 useEffect(()=>{
  console.log('Name input is valid!');
 },[enteredNameIsValid]);

  const nameInputChangeHandler = event => {
    setEnteredName(event.target.value);
  };
  const formSubmissionHandler = event => {
    event.preventDefault();
    setEnteredNameTouched(true);
    if(enteredName.trim() === ''){
      setEnteredNameIsValid(false);
      return;
    }
    setEnteredNameIsValid(true);
    console.log("Enter name =>", enteredName);
    const enteredValue = nameInputRef.current.value;
    console.log("Enter value :", enteredValue);
    // nameInputRef.current.value = '';
    setEnteredName(" ");
  };
  

  const nameInputIsInvalid = !enteredNameIsValid && enteredNameTouched;
  const nameInputClasses = nameInputIsInvalid ? 'form-control' : 'form-control invalid';
  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input ref={nameInputRef} type='text' id='name' onChange={nameInputChangeHandler} value={enteredName}/>
      </div>
      {!nameInputIsInvalid && <p className="error-text">Name must not be empty.</p>}
      <div className="form-actions">
        <button>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
