import React,{useState} from "react";
import style from './AddUser.module.css';
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enteredUsername,setEnteredUsername] = useState('');
    const [enteredUserAge,setEnteredUserAge] = useState('');
    const [error,setError] = useState();
    const addUserHandler = (event) =>{
        event.preventDefault();
        if (enteredUsername.trim().length === 0 || enteredUserAge.trim().length === 0 ){
            setError({
                title:"Invalid input",
                message:"Please provide not blank inputs"
            });
            return;
        }
        
        if (+enteredUserAge < 1 ){
            setError({
                title:"Invalid Age",
                message:"Please provide age > 0"
            });
            return;
        }
        props.onAddUser(enteredUsername,enteredUserAge)
        setEnteredUsername('');
        setEnteredUserAge('');
    };

    const onChangeUsernameHandler = event => {
        setEnteredUsername(event.target.value);
        
        
    };
    const onChangeUserAgeHandler = event => {
        setEnteredUserAge(event.target.value);
        
    };
    
    const clearModal = () => {
        setError();
    };

    return(
        <div>
            {error && <ErrorModal title={error.title} message={error.message} clearModal={clearModal}></ErrorModal>}
            <Card className={style.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username" >UserName</label>
                    <input id="username" type="text" onChange={onChangeUsernameHandler} value={enteredUsername}/>
                    <label htmlFor="age">Age</label>
                    <input id="age" type="number"  onChange={onChangeUserAgeHandler} value={enteredUserAge}/>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};


export default AddUser;
