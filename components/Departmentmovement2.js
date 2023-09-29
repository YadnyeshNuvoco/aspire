import { useState } from 'react';
import Image from 'next/image';

const Displaymovement2 = ({ movements }) => {

    const [possibleMovement, setPossibleMovement] = useState("possibleMovement1");

    const handleChangePossibleMovement = (event) => {
        setPossibleMovement(event.target.value)
    }

    const movementKeys = Object.keys(movements).filter((key) =>
        key.startsWith("possibleMovement")
    );

    // Check if "movements" object exists
    if (!movements) {
        return <div> </div>;
    }


    // Check if there are any "possibleMovement" properties with data
    if (movementKeys.length === 0) {
        return <div>No movements available for this stage.</div>;
    }
    return (
        <div className='flex flex-col'>
            <div className='w-1/3 p-4'>
                <select
                    value={possibleMovement}
                    onChange={handleChangePossibleMovement}
                    className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    {/* <option key="" value="">Select Option</option> */}
                    {movementKeys.map((movement) => (
                        <option key={movement} value={movement}>
                            {movement}
                        </option>
                    ))}
                </select>
            </div>
            <div className="flex flex-wrap justify-center">

                {movements[possibleMovement].map((movement, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 p-4 flex flex-col justify-between relative"
                    >
                        <div className="bg-white rounded-lg shadow-md p-4 flex-grow">
                            <div className="mb-4">
                                <Image
                                    src={`/pss${index}.jpg`} // Assuming you have images named pss0.jpg, pss1.jpg, etc.
                                    alt={`Movement ${index}`}
                                    width={100}
                                    height={100}
                                    className="mx-auto rounded-full"
                                />
                            </div>
                            <div className="text-center">{movement}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Displaymovement2;