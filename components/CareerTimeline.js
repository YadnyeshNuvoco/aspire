import { useState } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Image from 'next/image';


const CareerTimeline = ({ movements }) => {

    const [possibleMovement, setPossibleMovement] = useState("possibleMovement1");

    const handleChangePossibleMovement = (event) => {
        setPossibleMovement(event.target.value)
    }
    // Check if "movements" object exists
    if (!movements) {
        return <div>No movements available.</div>;
    }

    // Extract the keys of "movements" object that start with "possibleMovement"
    const movementKeys = Object.keys(movements).filter((key) =>
        key.startsWith("possibleMovement")
    );

    // Check if there are any "possibleMovement" properties with movements
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
                <VerticalTimeline className='w-full m-5'>
                    {movements[possibleMovement].map((item, index) => (
                        <VerticalTimelineElement
                            key={index}
                            className="vertical-timeline-element--work"
                            contentStyle={{ color: '#333' }}
                            contentArrowStyle={{ borderRight: '7px solid #333' }}
                            date={`Step ${index + 1}`}
                            iconClassName={`${index % 2 === 0 ? 'bg-red-500' : 'bg-green-500'
                                } text-white flex justify-center items-center`}
                            visible={true}
                        >
                            <h3 className="vertical-timeline-element-title font-bold">{item}</h3>
                            <h4 className="vertical-timeline-element-subtitle">Age - 25-30</h4>
                            <h4 className="vertical-timeline-element-subtitle">Qualification - xyz</h4>

                        </VerticalTimelineElement>
                    ))}
                </VerticalTimeline>
            </div>
        </div>


    );
};

export default CareerTimeline;
