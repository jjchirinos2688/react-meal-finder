import axios from "axios"
import { useEffect, useState } from "react"


const makeMealUrl = (category) =>{

    console.log('makeURL Category: ',category)
    return `https://www.themealdb.com/api/json/v1/1/filter.php?c=${category.strCategory}`;
}

export default function useHttpMeals(){

  console.log('Se activo useHttpMeals')

    const [meals, setMeals] = useState([])
    const [loadingMeals, setLoadingMeals] = useState(false)
    const [selectedCategory, setSelectedCategory] = useState({
        strCategory: "Beef",
      })

    useEffect(() => {

        const url = makeMealUrl(selectedCategory)
        console.log('url filter meals by categories', url)
        let ignore = false
        console.log('ignore', ignore)

        const controller = new AbortController()
        const { signal } = controller
    
        setLoadingMeals(true)
        console.log('Llamado a la api para buscar las meals por categoria', selectedCategory.strCategory)
        axios.get(url, {signal})
          .then( ({ data }) => {

            console.log('Respuesta Meals API', data.meals)

            if(!ignore) setMeals(data.meals)
          })
          .finally(() => {
            if(!ignore) setLoadingMeals(false)
          })
    
          // Desuscribir
        return () => {
          ignore = true
          controller.abort()
        }
    
      }, [selectedCategory])


    return { loadingMeals, meals, setMeals, setLoadingMeals, selectedCategory, setSelectedCategory }
}