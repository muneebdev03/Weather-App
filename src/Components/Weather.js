import React,{useState} from "react";
import './Weather.css'

const Weather = () =>{

    const[data,setData] = useState({})

    const[location,setLocation]=useState('')

    const api = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=01cb49ff757bbed56f1ed4a169e056b1`
    

    function changehandler(event){
        setLocation(event.target.value)
        
    }

    const searchLocation = (event) =>{
        if(event.key === 'Enter'){
        fetch(api)
        .then(response => { 
            return response.json()
        })
        .then( wdata =>{
            console.log(wdata)
            // if(wdata.cod === '200') {
            //     setData(wdata)
            // } else { 
            //     alert(wdata.message);
            // }
            setData(wdata)
        })
        
        }

    }
    
    return(
        <div className="app">
        <div className="search">
            <input 
            type="text"
            value={location}
            onChange={changehandler}
            onKeyPress={searchLocation}
            placeholder="Enter Location"
            />
         </div>
            <div className="Container">
                <div className="top">
                    <div className="location">
                        <p className="loc-font">{data.name}</p>
                        {data.sys ? <h2 className="loc-font">{data.sys.country}</h2>:null}
                    </div>
                    <div className="temp">
                        {data.main ? <h1>{data.main.temp}°C</h1>:null}
                    </div>
                    <div className="desc">
                        {data.weather ? <p className="desc-font">{data.weather[0].description} </p> : null}
                    </div>
                <div className="buttom">
                    <div className="feels">
                        {data.main ? <p className="bold">{data.main.feels_like} °C</p>:null}
                        <p> Feels Like</p>
                    </div>
                    <div className="humidity">
                        {data.main ? <p className="bold">{data.main.humidity} %</p> :null} 
                        <p>Humidity</p>
                    </div>
                    <div className="wind">
                        {data.wind ?<p className="bold">{data.wind.speed} M/S</p> : null }
                        <p>Wind</p>
                    </div>
                </div>    
                </div>
            </div>
            
        </div>
    )
}

export default Weather