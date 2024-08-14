import React from 'react'

function TopNav() {
  return (
    <div className="text-white p-4 bg-card border-b border-b-slate-600">
        <div className="flex justify-between mr-5 ml-5">
          <h1 className="text-2xl font-bold">Onebox</h1>
          <div className="flex flex-column justify-between w-1/5 ">
            <button>Click me</button>
            <h1>Tims Works</h1>
          </div>
      </div>
    </div>
  )
}

export default TopNav