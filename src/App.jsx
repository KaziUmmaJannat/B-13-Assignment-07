import { RouterProvider } from 'react-router'
import { router } from './Routers/routers'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import FriendTimeLineProvider from './Context/FriendTimelineProvider'

function App() {
  return (
    <FriendTimeLineProvider>
      <RouterProvider router={router} />
      <ToastContainer position="top-right" autoClose={3000} />
    </FriendTimeLineProvider>
  )
}

export default App
