import axios from "axios"
import { useEffect, useState } from "react"


export default function useHttpCategories(url){

  console.log('Se activo useHttpData mediante el link')

  console.log('url linkeada', url)

    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)

    useEffect(() => {

        console.log('Entra en useEffect')
        let ignore = false
        console.log('ignore', ignore)

        const controller = new AbortController()
        const { signal } = controller
    
        setLoading(true)
        console.log('Llamado a la api')
        axios.get(url, {signal})
          .then( ({ data }) => {
            if(!ignore) setData(data.meals)
          })
          .finally(() => {
            if(!ignore) setLoading(false)
          })
    
          // Desuscribir
        return () => {
          ignore = true
          controller.abort()
        }
    
      }, [])


    return { loading, data, setData, setLoading }
}