import { ReactNode } from 'react'
import { useSelector } from 'react-redux'
import Sidebar from '../Sidebar'
import Connect from '../Connect'
import { selecConnectState } from '@/store/connectSlice'

export default function Layout({ children }: { children: ReactNode }) {
  const connectState = useSelector(selecConnectState)

  return (
    <>
      {connectState ? (
        <Sidebar>{children}</Sidebar>
      ) : (
        <div>
          <Connect />
        </div>
      )}
    </>
  )
}
