import './App.css'
import MainLayout from "./MainLayout/MainLayout.tsx";
import MainPage from './components/MainPage/MainPage.tsx'
import {Route,Routes} from 'react-router';
import VacancyWithDescriptionPage from "./components/VacancyWithDescriptionPage/VacancyWithDescriptionPage.tsx";
function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path= '/' element= {<MainPage />} />
                <Route path='/vacancylist/:id' element={<VacancyWithDescriptionPage/>}/>
            </Route>
        </Routes>
    )
}

export default App