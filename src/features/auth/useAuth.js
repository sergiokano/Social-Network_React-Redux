import { useState, useEffect } from "react";
import axios from "axios"

export default function useAuth(code) {
  const [accessToken, setAccesToken] = useState();
  const [refreshToken, setRefreshToken] = useState();
  const [expiresIn, setExpiresIn] = useState();

  useEffect(() => {
    axios.post('http://localhost:8080/music/login', {
        code,
    }).then(res => {
        console.log(res.data)
    }).catch(() => {
        window.location = '/'
    })
  }, [code]);
}
