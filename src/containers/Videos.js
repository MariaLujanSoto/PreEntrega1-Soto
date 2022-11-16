
import Product from "../components/Product";

import { useEffect, useState } from "react";


const Videos = () => {
   
    const [datos, setDatos] = useState([])

    const deleteVideo = (id) =>{

        let nuevosDatos = datos.filter(item => item.id !==id)
        setDatos(nuevosDatos)
    }


        useEffect(()=>{
            //consulta a la API
            //fetch
            // customFetch(2000, data[6])
            // .then(response => setDatos(response))
            // .catch(err => console.log(err))

            // console.log('componentes montados en el DOM');
            fetch("https://api.mercadolibre.com/sites/MLA/search?q=bebidas")
            .then(response =>response.json())
            .then(response => setDatos(response.results))
            .catch(err => console.log(err))
        
        }, [])

    return(
        <>

        {
            datos.map(item =>(
                <Product 
                key={item.id}   
                title={item.title}
                price={item.price}
                stock = {item.available_quantity}
                thumbnail={item.thumbnail}
                
                
                deleteVideo={()=>deleteVideo(item.id)}/>
            ))
        }
        
        </>
    )

}

export default Videos;