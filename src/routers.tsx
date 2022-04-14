import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'

function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } >
                <Route path=":id" element={ <Detail /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers