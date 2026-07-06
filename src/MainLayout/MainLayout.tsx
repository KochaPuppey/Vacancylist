import Header from '../components/Header/Header.tsx';
import {Outlet} from 'react-router';

export default function MainLayout () {
    return (
    <>
        <Header />
        <Outlet />
    </>
    )
}