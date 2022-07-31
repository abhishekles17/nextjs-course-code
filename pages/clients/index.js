import React from "react";
import Link from "next/link";

const Clients = () => {
  const clients = [
    { id: "1", name: "Mahela" },
    { id: "2", name: "Max" },
    { id: "3", name: "Manuel" },
    { id: "4", name: "Mohammad" },
    { id: "5", name: "Manish" },
  ];
  return (
    <>
      List of Clients
      {clients.map((item, index) => {
        return (
            <li key={index}>
                {/* this is one way of eriting the link */}
              <Link href={"/clients/" + item.id}>{item.name}</Link>

              {/* Alter way */}
              <Link href={{
                pathname:"/clients/[id]",
                query:{id:item.id}

              }}>{item.name}</Link>
            </li>
        );
      })}
    </>
  );
};

export default Clients;
