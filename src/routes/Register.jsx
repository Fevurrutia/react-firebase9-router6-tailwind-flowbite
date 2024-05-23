import { useContext } from "react"
import { UserContext } from "../context/UserProvider"
import { useNavigate } from "react-router-dom"
import { useForm } from "react-hook-form"
import { erroresFirebase } from "../utils/erroresFirebase"
import { formValidate } from "../utils/formValidate"

import FormError from "../components/FormError"
import FormInput from "../components/FormInput"
import Title from "../components/Title"
import Button from "../components/Button"

const Register = () => {
    const { registerUser } = useContext(UserContext)
    const navegate = useNavigate()
    const { required, patternEmail, minLengthNum, validateTrim, validateEquals } = formValidate()

    const {
        register,
        handleSubmit,
        getValues,
        setError,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        try {
            await registerUser(data.email, data.password)
            navegate('/')
        } catch (error) {
            console.log(error.code)
            const { code, message } = erroresFirebase(error.code)
            setError(code, { message })
        }
    }

    return (
        <>
            <Title text='Register'/>
            <form onSubmit={handleSubmit(onSubmit)}>
                <FormInput
                    type='email'
                    placeholder='Ingrese Correo'
                    {...register('email', {
                        required,
                        pattern: patternEmail
                    })}
                    label='Ingresa Correo'
                    error={errors.email}
                />
                <FormError error={errors.email} />
                <FormInput
                    type="password"
                    placeholder="Ingrese Clave"
                    {...register('password', {
                        minLength: minLengthNum(6),
                        validate: validateTrim
                    })}
                    label='Ingresa Password'
                    error={errors.password}
                />
                <FormError error={errors.password} />
                <FormInput
                    type="password"
                    placeholder="Reingrese la Clave"
                    {...register('repassword', {
                        validate: validateEquals(getValues('password'))
                    }
                    )}
                    label='Repite Password'
                    error={errors.repassword}
                />
                <FormError error={errors.repassword} />
                <Button type='submit' TextButton='Register'/>
            </form>
        </>
    )
}
export default Register