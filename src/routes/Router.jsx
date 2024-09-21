import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../views/Home.jsx';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>}/>
            </Routes>
        </BrowserRouter>
    </div>
  )
}

export default Router