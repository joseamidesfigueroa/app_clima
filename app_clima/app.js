window.addEventListener('load', ()=> {
    let lon
    let lat

    let temperaturaValor = document.getElementById('temperatura')  
    //let temperaturaDescripcion = document.getElementById('temperatura-descripcion')  
    
    let lluviaValor = document.getElementById('lluvia')  
    //let iconoAnimado = document.getElementById('icono-animado') 

    let nubosidadValor = document.getElementById('nubosidad') 


    if(navigator.geolocation){
       navigator.geolocation.getCurrentPosition( posicion => {
           //console.log(posicion.coords.latitude)
           lon = posicion.coords.longitude
           lat = posicion.coords.latitude
            //ubicación actual    
           //const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${AQUI_VIENE_TU_API_KEY}`

           //ubicación por ciudad
           const url_temperatura = `https://srt.snet.gob.sv/apidoa/api/PronosticoModelos/pronostico_from_now/0501/temperatura`
           const url_nubosidad = `https://srt.snet.gob.sv/apidoa/api/PronosticoModelos/pronostico_from_now/0501/nubosidad`
           const url_lluvia = `https://srt.snet.gob.sv/apidoa/api/PronosticoModelos/pronostico_from_now/0501/lluvia`

           //console.log(url)

           fetch(url_temperatura)
            .then( response => { return response.json()})
            .then( data => {
                console.log(data[0])
                
                let temp = Math.round(data[0].valor)
                //console.log(temp)
                temperaturaValor.textContent = `${temp} ° C`

                //console.log(data.weather[0].description)
               // let desc = data[0].description
               // temperaturaDescripcion.textContent = desc.toUpperCase()
               // ubicacion.textContent = data.name
                
              //  vientoVelocidad.textContent = `${data.wind.speed} m/s`
                
                //para iconos estáticos
                //const urlIcon = `http://openweathermap.org/img/wn/${iconCode}.png`                     
                //icono.src = urlIcon
                //console.log(data.weather[0].icon)

                //para iconos dinámicos
                // console.log(data.weather[0].main)
                // switch (data.weather[0].main) {
                //     case 'Thunderstorm':
                //       iconoAnimado.src='animated/thunder.svg'
                //       console.log('TORMENTA');
                //       break;
                //     case 'Drizzle':
                //       iconoAnimado.src='animated/rainy-2.svg'
                //       console.log('LLOVIZNA');
                //       break;
                //     case 'Rain':
                //       iconoAnimado.src='animated/rainy-7.svg'
                //       console.log('LLUVIA');
                //       break;
                //     case 'Snow':
                //       iconoAnimado.src='animated/snowy-6.svg'
                //         console.log('NIEVE');
                //       break;                        
                //     case 'Clear':
                //         iconoAnimado.src='animated/day.svg'
                //         console.log('LIMPIO');
                //       break;
                //     case 'Atmosphere':
                //       iconoAnimado.src='animated/weather.svg'
                //         console.log('ATMOSFERA');
                //         break;  
                //     case 'Clouds':
                //         iconoAnimado.src='animated/cloudy-day-1.svg'
                //         console.log('NUBES');
                //         break;  
                //     default:
                //       iconoAnimado.src='animated/cloudy-day-1.svg'
                //       console.log('por defecto');
                //   }

            })
            .catch( error => {
                console.log(error)
            })

            fetch(url_nubosidad)
            .then( response => { return response.json()})
            .then( data => {
                console.log(data[0])
                
                let nubosidad = Math.round(data[0].valor)
                console.log(nubosidadValor)
                nubosidadValor.textContent = `${nubosidad} %`

            })
            .catch( error => {
                console.log(error)
            })

            fetch(url_lluvia)
            .then( response => { return response.json()})
            .then( data => {
                console.log(data[0])
                
                let lluvia = Math.round(data[0].valor)
                //console.log(temp)
                lluviaValor.textContent = `${lluvia} mm`
            })
            .catch( error => {
                console.log(error)
            })
       })
          
    }
})
