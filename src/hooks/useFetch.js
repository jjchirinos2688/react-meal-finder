import axios from "axios"
import { useState } from "react"

export default () => {

    const [data, setData] = useState()
    const [loading, setLoading] = useState(false)


    const fetch = (url) => {
        setLoading(true)
        axios.get(url)
        .then(({data}) => setData(data.meals[0]))
        .finally(()=> setLoading(false))
    }

    return {data, loading, fetch}
}