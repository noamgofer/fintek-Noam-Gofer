import './App.css';
import {useState , useEffect} from 'react'
import Header from './components/Header';
import Input from './components/Input';
import WeatherData from './components/WeatherData';
import Logo from './components/Logo';
import Footer from './components/Footer';

function App() {
const [data,setData] = useState(null)
const [city,setCity] = useState("")
const [message,setMessage] = useState("")

const handleFetch = async () => {
  try { 
    const response = await fetch(`http://localhost:4000/weather` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({city})
    })
    const result = await response.json()

    if(result.error) {
      setMessage("city not found!")
      setData(null)
    } else {
    setData(result)
    setMessage("")
  }
  } catch (error) {
    console.log('error fetching data',error);
    setData(null)
  }
}

  return (
    <div className="App">
      <div className='flex-div'>
        <div className='rightSide'>
          <Logo/>
          <Header />
          <Input setCity = {setCity} handleFetch = {handleFetch}/>
          {message && <div className='error-message'><p>{message}</p></div>} 
          {data && <Footer data={data}/>}
        </div>
        <div className='leftSide'>
          {data && <WeatherData data = {data}/>}
        </div>
      </div>
    </div>
  );
}

export default App;
