import React from 'react';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import Loading from '../components/Loading/Loading';
import { useEffect } from 'react';

const AdminRoute = ({ children }) => {

    const { user, isFetching } = useSelector(state => state.auth);
    const router = useRouter();

    useEffect(() => {
        if (!user?.isAdmin) {
            router.push('/login');
        }
    })

    if (isFetching) {
        return <Loading />
    }
    return (
        <>
            {children}
        </>
    );

};

export default AdminRoute;