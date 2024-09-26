import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import { toast } from "sonner"

export default function useAuth() { // Revisa si ya tenemos un token
    const navigate = useNavigate()
    const [token, setToken] = useState('')
    
    useEffect(()=>{
        const tkn = localStorage.getItem('token')
        setToken(tkn)
        if(!tkn){
            toast.error('Sesion expirada. Iniciar sesion de nuevo')
            navigate('/login')
        }
    }, [navigate])
    return token
}