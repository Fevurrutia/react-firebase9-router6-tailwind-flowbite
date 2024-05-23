export const formValidate = () => {
    return {
        required: {
            value: true,
            message: '*Campo Obligatorio'
        },
        patternEmail: {
            value: /[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})/,
            message: 'Formato email incorrecto'
        },
        minLengthNum(num) {
            return {value: num, message: `Minimo ${num} caracteres`}
        },
        validateTrim: {
            trim: v => {
                if (!v.trim()) { return 'No seas payaso, escribe algo...' }
                return true
            }
        },
        validateEquals(value) {
           return {equals: v => v === value || 'Contraseñas no coinciden'}
        }
    }
}
