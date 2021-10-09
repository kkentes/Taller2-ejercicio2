
import React, {Fragment, useState, useEffect} from 'react'
import Formulario from './components/Formulario'
import Header from './components/Header'
import Clima from './components/Clima'
import Error from './components/Error'

import './styles/App.css'
function App() {
  const [busqueda, setBusqueda] = useState({
    ciudad:'',
  });
  const {ciudad,pais} = busqueda;

  const [consultar,setConsultar] = useState(false);
  const [data, setData] = useState({});
  const [error, setError] = useState(false);

  useEffect(()=> {
    const consultarAPI = async() => {
      if(consultar){
        let keyAPI = `eaed9e10df601aab920b0f2f1e13df89`;
        let urlAPI = `https://api.openweathermap.org/data/2.5/weather?q=${ciudad}&appid=${keyAPI}`;
        let response = await fetch(urlAPI);
        let data = await response.json(); 
        setData(data);
        setConsultar(false);

        if(data.cod === '404')
          setError(true);
        else
          setError(false);  
        
        console.log(data)

        if(data.cod === "404"){
          setError(true);
        }else{
          setError(false);
        }
      }
    };
    consultarAPI();
  },[consultar]);

  let componente;
  if(error) {
    componente = <Error descripcion = {data.message}/> ;
  }
  else{
    componente = <Clima data={data}/>
  }
  return (
    <>
    <Header titulo="Aplicación de Clima"/>

    <div className="container">
      <div className="row">
        <div className="col-md-6 col-sm-12 mt-3">
          <h2 className="size-title">Formulario de consulta</h2>
          <Formulario 
            busqueda={busqueda}
            setBusqueda={setBusqueda}
            setConsultar={setConsultar}
          />
        </div>
        <div className="col-md-6 col-sm-12">
          
          {componente}
        </div>
      </div>
    </div>
    </>
  );
}

export default App;
