import React from "react";
import { useRouter } from 'next/router';

const Project  = () => {

    const router = useRouter();

    console.log(router)
    return (
        <>
        ID: {router && router.query.id}
        Name: Abhishek
        Occupation:  Softwre developer
        </>
    )
}

export default Project;