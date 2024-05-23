export const erroresFirebase = (error) => {
    switch (error) {
        case 'auth/email-already-in-use':
            return {
                code: 'email',
                message: 'Usuario ya registrado'
            }
        case 'auth/invalid-email':
            return {
                code: 'email',
                message: 'Formato email no valido'
            }
        case 'auth/invalid-credential':
            return {
                code: 'email',
                message: 'Credenciales incorrectas'
            }
        default:
            return 'Error en el servidor'
    }
}