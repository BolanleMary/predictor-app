import React from "react";

function Header() {

    return (
      
      <div className="w-full max-w-md flex justify-between items-center mb-4">
        <h1 className="text-xl font-semibold">Predictor</h1>
        <select className="border rounded-lg px-2 py-1 text-sm">
          <option>Akinyele</option>
          <option>Ibadan</option>
          <option>Lagos</option>
        </select>
      </div>
      
        );
}

export default Header;