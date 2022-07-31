import React from "react";
import { useRouter } from 'next/router'


const Company = () => {

    const router = useRouter();

    return (
        <>
        This Client od ID: {router.query.id} belongs to Company : {router.query.orgId}
        </>
    )
}

export default Company;