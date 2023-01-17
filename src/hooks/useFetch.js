import React from 'react'

const BASE_URL = process.env.REACT_APP_API_URL

export default function useFetch(url, defaultValue = null) {
  const [data, setData] = React.useState(defaultValue)

  React.useEffect(() => {
    fetch(BASE_URL + url)
      .then((res) => res.json())
      .then((data) => {
        setData(data)
      })
      .catch((error) => console.log(error))
  }, [])

  return data
}
