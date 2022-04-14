import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import Rehome from './pages/home/Rehome'

function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Rehome /> } >
                <Route path=":id" element={ <Detail /> } />
            </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default Routers