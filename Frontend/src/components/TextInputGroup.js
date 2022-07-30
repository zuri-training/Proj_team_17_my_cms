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
    <div class="form-group mb-6">
    <label htmlFor={name} class="form-label inline-block mb-2 text-gray-700">{label}</label>
    <input type={type} className="form-control
      block
      w-full
      px-3
      py-1.5
      text-base
      font-normal
      text-gray-700
      bg-white bg-clip-padding
      border border-solid border-gray-300
      rounded
      transition
      ease-in-out
      m-0
    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" 
    placeholder={placeholder}
    value={value} 
    />
  </div>
  )
}

    TextInputGroup.propTypes = {
        label: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        value: PropTypes.string,
        placeholder: PropTypes.string.isRequired,
    }

    TextInputGroup.defaultProps = {
        type: 'text',
    }