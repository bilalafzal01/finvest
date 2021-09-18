import { useContext } from 'react'
import { SidebarContext } from '../context/SidebarContext'

export default function useSidebar() {
  const context = useContext(SidebarContext)

  if (!context)
    throw new Error('useSidebar must be used within a SidebarContext')

  const { isSidebarOpen, toggleSidebar } = context

  return {
    isSidebarOpen,
    toggleSidebar,
  }
}
