const FormError = ({ error }) => {
    return (
        <>
            {error && (
                <p className="mt-2 mb-5 text-sm text-red-600">
                    <span className="font-medium">{error.message}</span>
                </p>
            )}
        </>
    )
}
export default FormError