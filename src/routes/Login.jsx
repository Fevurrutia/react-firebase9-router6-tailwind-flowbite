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

const Login = () => {
    const { loginUser } = useContext(UserContext)
    const navegate = useNavigate()
    const { required, patternEmail, minLengthNum, validateTrim } = formValidate()

    const {
        register,
        handleSubmit,
        setError,
        formState: { errors }
    } = useForm()

    const onSubmit = async (data) => {
        try {
            await loginUser(data.email, data.password)
            navegate('/')
        } catch (error) {
            console.log(error.code)
            const { code, message } = erroresFirebase(error.code)
            setError(code, { message })
        }
    }
    return (
        <>
            <Title text='Login'/>
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
                    label='Ingesa Password'
                    error={errors.password}
                />
                <FormError error={errors.password} />
                <Button type='submit' TextButton='Login'/>
            </form>
        </>
    )
}
export default Login