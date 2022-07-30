import React from 'react'
import PropTypes from 'prop-types'

export default function TextInputGroup({
  className,
    label,
    name,
    type,
    value,
    placeholder,
}) {

  return (
    <div class="form-group mb-6">
    <label htmlFor={name} className='text-sm label-color'>{label}</label>
    <input type={type} className={className}
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
        className: PropTypes.string.isRequired
    }

    TextInputGroup.defaultProps = {
        type: 'text',
    }