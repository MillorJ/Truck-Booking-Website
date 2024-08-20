import React from 'react'

function LoginValidation(values){
    let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/
    if(values.email=== ""){
        error.email = "Email is required"
    }
    else if(!email_pattern.test(values.email)){
        error.email = "Email is invalid"
    }
    else{
        error.email = ""
    }
    if(values.password === ""){
        error.password = "Password is required"
    }
    else if(!password_pattern.test(values.password)){
        error.password = "Password should have atleast 8 characters, 1 uppercase, 1 lowercase, and 1 number"
    }
    else{
        error.password = ""
    }

    return error
}

export default LoginValidation