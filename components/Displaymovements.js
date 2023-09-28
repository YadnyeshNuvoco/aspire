import React from 'react';

const DisplayMovement = ({ movements }) => {
    // Check if "movements" object exists
    if (!movements) {
        return <div>No movements available.</div>;
    }

    // Extract the keys of "movements" object that start with "possibleMovement"
    const movementKeys = Object.keys(movements).filter(key =>
        key.startsWith('possibleMovement')
    );

    // Check if there are any "possibleMovement" properties with data
    if (movementKeys.length === 0) {
        return <div>No movements available for this stage.</div>;
    }

    return (
        <table className="w-full">
            <tbody>
                {movementKeys.map((movementKey, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className="p-2 fixed-width-cell">{movementKey}</td>
                        {movements[movementKey].map((movement, index) => (
                            <td key={index} className="p-2 fixed-width-cell border rounded m-2">
                                {movement}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default DisplayMovement;
