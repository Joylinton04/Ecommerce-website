import { useState, useEffect } from "react";

const useLocalStorage = (key) => {
  //const [storage, setStorage] = useState(['aa'])

  const setItem = (value) => {
    try {
        window.localStorage.setItem(key, JSON.stringify(value))
    }catch(err) {
        console.log(err)
    }
  }

  const getItem = (key) => {
    try {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : []
    }catch(error) {
        console.log(error)
    }
  }

  return { setItem, getItem }
}

export default useLocalStorage;