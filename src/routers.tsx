import { Route, Routes, BrowserRouter } from 'react-router-dom'
import Detail from './pages/detail/Detail'
import Home from './pages/home/Home'
import Search2 from './pages/home/Searching'


function Routers() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/detail" element={ <Detail /> } >
                <Route path=":id" element={ <Detail /> } />
            </Route>
            <Route path="/search" element={ <Search2 /> } />
        </Routes>
    </BrowserRouter>
  )
}

export default Routers