import React from "react";
import { useRouter } from "next/router";

const Slug = () => {
  const router = useRouter();

  console.log(router.query.slug);

  return <>This is slug

  {router && router.query && router.query.slug && (router.query.slug).map((id,index) => {
     return <h1 key={index}>{id}</h1>
  })}
  
  </>;
};

export default Slug;
