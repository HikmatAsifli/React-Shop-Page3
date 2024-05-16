
    import React, { useContext } from 'react'
    import { Helmet } from 'react-helmet'
    import MainContext from '../../../context/context'
    
    const Dashboard = () => {
        const {data,setData} = useContext(MainContext)
        return (
        <>
                <Helmet>
                    <title>Dashboard</title>
                </Helmet>
                <div>Dashboard page
                </div>
        </>
        )
    }
    
    export default Dashboard
        