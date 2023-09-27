import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';

const Uniqueroledropdown = ({ options, uniqueroles, handleUniquerolesChange }) => {
    return (
        <div className="relative">
            <select
                value={uniqueroles}
                onChange={handleUniquerolesChange}
                className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                <option key="" value="">Select Option</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.uniqueRoleName}
                    </option>
                ))}
            </select>
            <div className="absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none text-gray-700">
                <IoIosArrowDown className="w-4 h-4" />
            </div>
        </div>
    )
}

export default Uniqueroledropdown

