import React, { useState, useEffect } from 'react';
import './App.css';
import Button from './Button';

 function App() {

const [formData, setFormData] = useState({ muscleGroup: '', level: '', type: '' });

const [data, setData] = useState(null);

const [filteredData, setFilteredData] = useState(null);

 const handleChange = (event) => {

const { name, value } = event.target;

setFormData((prevData) => ({

...prevData,

[name]: value,

}));

};

 const handleSubmit = (event) => {

event.preventDefault();

};
useEffect(() => {

if (formData.muscleGroup) {

fetch(`https://api.api-ninjas.com/v1/exercises?muscle=${formData.muscleGroup}`, {

headers: { 'X-Api-Key': 'i883KF+Ub1y46gZ7q9zgAA==ANzqtUvdOBx3MqjD' },

})

.then((response) => {

if (!response.ok) {

throw new Error(`HTTP error! Status: ${response.status}`);

}

return response.json();

})

.then((result) => {

console.log(result);

setData(result);

console.log(formData.level)

console.log(result.exercises)

 

if (result && formData.level) {

console.log("bro");
const filteredExercises = result.filter(

(exercise) => {

return exercise.difficulty === formData.level;

}

);

console.log(filteredExercises);

setFilteredData({ exercises: filteredExercises });

} else {

console.error('No exercises found in the result:', result);

setFilteredData({ exercises: [] });

}

})

.catch((error) => {

console.error('Fetch error:', error);

});

}

}, [formData.muscleGroup, formData.level]);

const handleExerciseTypeClick = (exerciseType) => {

if (data) {

const filteredExercises = data.filter(

(exercise) => exercise.type === exerciseType

);

console.log(filteredExercises)

setFilteredData({exercise: filteredExercises});

}

};

 

return (

<div className='exercise'>

<h1>Exercise Guide</h1>

<h3>SELECT EXERCISE TYPE</h3>

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

<option value="beginner">Beginner</option>

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

<li key={index}>{exercise.name} (Equipment: {exercise.equipment}) (Instructions: {exercise.instructions})</li>

))}

</ul>

</div>

)}

<div>

<h3>SELECT EXERCISE TYPE</h3>

<div>

<button onClick={() => handleExerciseTypeClick("cardio")} className="custom-button">

CARDIO

</button>

<button onClick={() => handleExerciseTypeClick("olympic weightlifting")} className='custom-button'>

OLYMPIC WEIGHTLIFTING

</button>

<button onClick={() => handleExerciseTypeClick("plyometrics")} className='custom-button'>

PLYOMETRICS

</button>

<button onClick={() => handleExerciseTypeClick("powerlifting")} className='custom-button'>

POWER LIFTING

</button>

<button onClick={() => handleExerciseTypeClick("strength")} className='custom-button'>

STRENGTH

</button>

<button onClick={() => handleExerciseTypeClick("stretching")} className='custom-button'>

STRETCHING

</button>

<button onClick={() => handleExerciseTypeClick("strongman")} className='custom-button'>

STRONGMAN

</button>

</div>

</div>

<div>

<h3>Filtered Exercises:</h3>

<ul>

{filteredData && filteredData.exercises ? (

filteredData.exercises.map((exercise, index) => (

<li key={index}>{exercise.name} (Equipment: {exercise.equipment}) (Instructions: {exercise.instructions})</li>

))

) : (

<p>No exercises found for the selected criteria.</p>

)}

</ul>

</div>

 </div>

);

}

 export default App;
