import React from 'react'

function Card() {
  return (
    <div>
      <div className="w-80 bg-white rounded-lg shadow-lg p-4">
      <img
        src="https://images.pexels.com/photos/36244414/pexels-photo-36244414.jpeg"
        alt="Watch"
        className="w-full h-80 object-cover rounded-md"
      />

      <h2 className="text-xl font-semibold mt-4">
        Apple Watch Series 7 GPS, Aluminium Case
      </h2>

      <div className="flex items-center gap-2 mt-2">
        <span className="text-yellow-500">⭐⭐⭐⭐</span>
        <span className="bg-blue-100 text-blue-700 px-2 py-1 rounded text-sm">
          4.0
        </span>
      </div>

      <div className="flex justify-between items-center mt-4">
        <h3 className="text-3xl font-bold">$599</h3>

        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Add to Cart
        </button>
      </div>
    </div>
    </div>
  )
}

export default Card
