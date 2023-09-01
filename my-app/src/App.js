import React, { useState } from 'react';
import './App.css';

function App() {
  const [formData, setFormData] = useState({muscleGroup: ""})
  const [savedId, setSavedId] = useState(null)
  const [data, setData] = useState(null)

  const handleChange = (event) =>{
    const{name, value, type} = event.target

    setFormData((prevData) =>({
      ...prevData, [name]: inputValue
    }))
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    savedId(formData.muscleGroup)
    var muscle = formData.muscleGroup
$.ajax({
    method: 'GET',
    url: 'https://api.api-ninjas.com/v1/exercises?muscle=' + muscle,
    headers: { 'X-Api-Key': 'i883KF+Ub1y46gZ7q9zgAA==ANzqtUvdOBx3MqjD'},
    contentType: 'application/json',
    success: function(result) {
        console.log(result);
    },
    error: function ajaxError(jqXHR) {
        console.error('Error: ', jqXHR.responseText);
    }
});

.then(response => response.json())
.then(result => {
  console.log(result);
  setData(result)
})
.catch(error => {
  console.error('Error:', error);
});
  }

  
  return (
    <div className='exercise'>
        <h1>Exercise Guide</h1>
       <div>

        <h3>SELECT EXERCISE TYPE</h3>

       
       <Button onClick
       className="custom-button">
        CARDIO
       </Button>
       <Button onClick={handleClick}
       className="custom-button">
        OLYMPIC_WEIGHTLIFTING        
       </Button>
       <Button onClick={handleClick}
       className="custom-button">
        PLYOMETRICS      
       </Button>
       <Button onClick={handleClick}
       className="custom-button">
        POWER LIFTING       
       </Button>
       <Button onClick={handleClick}
       className="custom-button">
        STRENGTH       
       </Button>
       <Button onClick={handleClick}
       className="custom-button">
        STRETCHING     
       </Button>
       <Button onClick={handleClick}
       className="custom-button">
        STRONGMAN       
       </Button> 
       </div>

       <div>
        <form onSubmit={handleSubmit}>
        <label> SELECT THE MUSCLE GROUP </label> 
          <select
                  name="types"
                  value={formData.muscleGroup}
                  onChange={handleChange}>
                    <option value="">SELECT THE MUSCLE GROUP</option>
                    <option value="abdominal">Abdominals</option>
                    <option value="abductor">Abductors</option>
                    <option value="adductors">Adductors</option>
                    <option value="biceps">Biceps</option>
                    <option value="calves">Calves</option>
                    <option value="chest">Chest</option>
                    <option value="forarms">Forearms</option>
                    <option value="glutes">Glutes</option>
                    <option value="hamstrings">Hamstrings</option>
                    <option value="lats">Lats</option>
                    <option value="lower_back">Lower Back</option>
                    <option value="middle_back">Middle Back</option>
                    <option value="neck">Neck</option>
                    <option value="quadriceps">Quadriceps</option>
                    <option value="traps">Traps</option>
                    <option value="triceps">Triceps</option>
                  
          </select>
          </form>
                  
       </div>
       <div>

       <form onSubmit={handleSubmit}>

      

      
        <label> SELECT THE DIFFICULTY LEVEL </label>
          <select
                  name="level">
           <option value="">SELECT THE DIFFICULTY LEVEL</option>  
           <option value="begin">Beginner</option>
           <option value="intermediate">Intermediate</option>
           <option value="expert">Expert</option>       
                  </select>
                  <button type="submit">SUBMIT</button>
                  </form>
                
                  </div>
                   

  
   
  );
}

export default App;
