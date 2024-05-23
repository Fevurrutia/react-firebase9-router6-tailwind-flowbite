import { forwardRef } from "react"

const FormInput = forwardRef(({ type, placeholder, onChange, onBlur, name, label, error, children }, ref) => {
    const errorClassLabel = error
        ? 'block mb-2 text-sm font-medium text-red-700'
        : 'block mb-2 text-sm font-medium text-gray-900'

    const errorClassInput = error
        ? 'block w-full p-2.5 bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500'
        : 'bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:border-blue-500 block w-full p-2.5'

    return (
        <div className="mt-5">
            <label htmlFor="email" className={errorClassLabel}>
                {label}
            </label>
            <input
                className={errorClassInput}
                type={type}
                placeholder={placeholder}
                ref={ref}
                onChange={onChange}
                onBlur={onBlur}
                name={name}
            />
            {children}
        </div>
    )
})
export default FormInput