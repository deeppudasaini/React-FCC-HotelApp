import React,{useState,useEffect} from 'react'
import Loading from './Loading'
import Hotels from './Hotels';
import './App.css';

function App() {
const [loading, setLoading] = useState(false)
const [hotels, setHotels] = useState([])
const removeHotels= (id) =>
{
  const newHotel= hotels.filter((hotel)=>hotel.id!==id  );
  setHotels(newHotel);  
  
  
  
};

useEffect(() => {
  try{
  fetch("https://course-api.com/react-tours-project").then(response => {
    return response.json()
  }).then(users => setHotels(users))}
  catch(e){
setLoading(true)
  }
}, [])
if(loading){
  return (
  <div className="App">
 <main>
   <Loading />
 </main>
 </div>);
}
else if(!loading){
  return (
    <div className="App">
{/*       
      {
        setTimeout(()=>{
          return <Loading />
        },2000)
      }
       */}
       <main>
<Hotels  allHotels={hotels} removeHotels={removeHotels} />
      </main>
    </div>
  );
}
else if(!loading && hotels.length==0){
  <h2>No Hotels Left</h2>
}
}

export default App;
