import React from 'react'

function sidebar() {
  return (
    <div className="min-h-full border-2 border-purple-400">
      <ul className="flex flex-col">
        <li>Main Menu</li>
        <li>
          <ul>
            <li>Dashboard</li>
            <li>Portfolio</li>
            <li>Notifications</li>
          </ul>
        </li>
        <li>Support</li>
        <li>
          <ul>
            <li>Help and Support</li>
            <li>Settings</li>
          </ul>
        </li>
      </ul>
    </div>
  )
}

export default sidebar
