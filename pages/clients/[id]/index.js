import React from "react";
import { useRouter } from 'next/router'


const Client = () => {


    const router = useRouter();

    const handleRoute = () => {

        //load data..
        router.push('/clients/max/projecta')

        // router.push({
        //     pathname:"/clients/[id]/[orgId]",
        //     query:{id:'max',orgid:"A boy"}
        // })
    }


    return (

        <>
        This is Client Id : {router.query.id}
        <button onClick={handleRoute}>Navigate to A</button>
        </>

    )
}

export default Client;