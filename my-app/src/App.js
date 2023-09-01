import React, { useState } from 'react';
import './App.css';
import Button from './Button'

function App() {
  const [formData, setFormData] = useState({muscleGroup: "", level: ""});
  // const [savedId, setSavedId] = useState(null)
  const [data, setData] = useState(null)

  const handleChange = (event) =>{
    const{name, value} = event.target

    setFormData((prevData) =>({
      ...prevData, [name]: value
    }))
  }
  const handleSubmit =  (event) => {
    event.preventDefault();
    const {muscleGroup} = formData;
    // var muscle = formData.muscleGroup
    fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${muscleGroup}`, {
      headers: { 'X-Api-Key': 'i883KF+Ub1y46gZ7q9zgAA==ANzqtUvdOBx3MqjD' },
    })

.then(response => response.json())
.then(result => {
  console.log(result)
  setData(result)
})
.catch(error => {
  console.error('Error:', error);
});
  }

  const handleClick = (exerciseType) =>{
    console.log(`Button clicked: ${exerciseType}`)
  }

  
  return (
    <div className='exercise'>
        <h1>Exercise Guide</h1>
    

        <h3>SELECT EXERCISE TYPE</h3>

       
       {/* <Button onClick={handleClick}
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
       */}

       
        <form onSubmit={handleSubmit}>
        <label> SELECT THE MUSCLE GROUP </label> 
          <select
                  name="muscleGroup"
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
          
                  
       
       

       

      

      
        <label> SELECT THE DIFFICULTY LEVEL </label>
          <select
                  name="level"
                  value={formData.level}
                  onChange={handleChange}>
           <option value="">SELECT THE DIFFICULTY LEVEL</option>  
           <option value="begin">Beginner</option>
           <option value="intermediate">Intermediate</option>
           <option value="expert">Expert</option>       
                  </select>
                  <button type="submit">SUBMIT</button>
                  </form>
                  {data && data.exercises && (
                    <div>
                      <h2>Fetched Exercises:</h2>
                      <ul>
                        {data.exercises.map((exercise, index) => (
                          <li key={index}>{exercise.name}</li>
                        ))}
                      </ul>
                      </div>
                  )}

<h3>SELECT EXERCISE TYPE</h3>
                            <div>
                              <button onClick={() => handleClick("Cardio")} className="custom-button">
                                CARDIO
                              </button>
                              <button onClick={() => handleClick("Olympic Weightlifting")} className='custom-button'>
                                OLYMPIC WEIGHTLIFTING
                              </button>
                              <button onClick={() => handleClick("plyometrics")} className='custom-button'>
                                PLYOMETRICS
                              </button>
                              <button onClick={() => handleClick("powerlifting")} className='custom-button'>
                                POWER LIFTING
                              </button>
                              <button onClick={() => handleClick("strength")} className='custom-button'>
                                STRENGTH
                              </button>
                              <button onClick={() => handleClick("stretching")} className='custom-button'>
                                STRETCHING
                              </button>
                              <button onClick={() => handleClick("strongman")} className='custom-button'>
                                STRONGMAN
                              </button>
                            </div>

                </div>
                   

  
   
  );
}

export default App;
