import React from 'react'
import PropTypes from 'prop-types'

export default function TextInputGroup({
    label,
    name,
    type,
    value,
    placeholder,
}) {

  return (
    <div className="form-group mb-4">
    <label htmlFor={name} className='text-sm label-color'>{label}</label>
    <input name={name} type={type} className='lg:p-3 p-2.5 w-full input outline-none'
    placeholder={placeholder}
    value={value} 
    />
  </div>
  )
}

    TextInputGroup.propTypes = {
        name: PropTypes.string,
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string.isRequired,
    }

    TextInputGroup.defaultProps = {
        type: 'text',
    }