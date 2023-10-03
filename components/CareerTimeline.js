import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';


const CareerTimeline = ({ movements }) => {

    console.log(movements)
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
        <VerticalTimeline className='w-full m-5'>
            {movements["possibleMovement1"].map((item, index) => (
                <VerticalTimelineElement
                    key={index}
                    className="vertical-timeline-element--work"
                    contentStyle={{ color: '#333' }}
                    contentArrowStyle={{ borderRight: '7px solid #333' }}
                    date={`Step ${index + 1}`}
                    iconStyle={{
                        background: index % 2 === 0 ? 'rgba(255, 0, 0, 0.6)' : 'rgba(0, 128, 0, 0.6)',
                        color: '#fff',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                    visible={true}
                >
                    <h3 className="vertical-timeline-element-title font-bold">{item}</h3>
                </VerticalTimelineElement>
            ))}
        </VerticalTimeline>


    );
};

export default CareerTimeline;
