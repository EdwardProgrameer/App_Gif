import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs.Js"

export const useFetchGifs = (category) => {


    const [images, setImages] = useState([])
    const [isLoading, setIsLoading] = useState([])

    const getImage = async() => {
        const newImages = await getGifs(category)
        setImages(newImages)
        setIsLoading(false)
    }

    useEffect(() => {
        getImage()
    }, [])

    return {


        images,
        isLoading


    }

}