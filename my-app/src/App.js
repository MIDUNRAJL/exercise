import React, { useState } from 'react';
import './App.css';

function App() {
  const [selectedMuscle, setSelectedMuscle] = useState('');
  function handleMuscleChange(event) {
    setSelectedMuscle(event.target.value); // Update selected muscle state
  }
  fetch('https://api.api-ninjas.com/v1/exercises?muscle=' + selectedMuscle, {
  method: 'GET',
  headers: {
    'X-Api-Key': 'i883KF+Ub1y46gZ7q9zgAA==ANzqtUvdOBx3MqjD',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(result => {
  console.log(result);
})
.catch(error => {
  console.error('Error:', error);
});

  
  return (
    <div>
       {/* <h1>Exercise Guide</h1>
       <h3>Select the Exercise Type</h3>
       <Button onCli
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
       </Button> */}

       <div>
        <label>
          <select
                  name="types"
                  value={selectedMuscle}
                  onChange={handleMuscleChange}>
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
                  



        </label>
       </div>

       <div>
        <label>
          <select
                  name="level">
           <option value="">SELECT THE DIFFICULTY LEVEL</option>  
           <option value="begin">Beginner</option>
           <option value="intermediate">Intermediate</option>
           <option value="expert">Expert</option>       
                  </select>

        </label>
       </div>
      
    </div>

  
   
  );
}

export default App;
