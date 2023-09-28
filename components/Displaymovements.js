import React from "react";
import Image from "next/image";

const DisplayMovement = ({ movements }) => {
  // Check if "movements" object exists
  if (!movements) {
    return <div>No movements available.</div>;
  }

  // Extract the keys of "movements" object that start with "possibleMovement"
  const movementKeys = Object.keys(movements).filter((key) =>
    key.startsWith("possibleMovement")
  );

  // Check if there are any "possibleMovement" properties with data
  if (movementKeys.length === 0) {
    return <div>No movements available for this stage.</div>;
  }

  return (
    <table className="w-full">
      <thead>
        <tr>
          <th>Divisions</th>

          {movements["possibleMovement1"].map((movement, index) => (
            <th key={index} className="p-2">
              <div className="relative h-20 pb-300">
                <Image
                  src={`/pss${index + 1}.jpg`}
                  alt={index}
                  layout="fill"
                  objectFit="contain"
                  objectPosition="center"
                />
              </div>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {movementKeys.map((movementKey, rowIndex) => (
          <tr key={rowIndex}>
            <td
              className="p-2 fixed-width-cell border rounded m-2"
              style={{ height: "70px" }}
            >
              {movementKey}
            </td>
            {movements[movementKey].map((movement, index) => (
              <td
                key={index}
                className="p-2 fixed-width-cell border rounded m-2"
                style={{ height: "50px" }}
              >
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
