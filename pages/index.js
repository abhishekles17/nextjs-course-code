import fs from "fs/promises";
import path from "path";
import Link from 'next/link'

function HomePage(props) {
  const { products } = props;
  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          <Link href={`/${product.id}`}>{product.title}</Link>
          </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  console.log("regenerating")
  const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
  const jsonData = await fs.readFile(filePath);
  const data = JSON.parse(jsonData);


  // if you are not able to fetch data from anywhere
  if(!data) {
    return {
      redirect: {
        destination:'/someRoute'
      }
    }
  }

  // if fetched data is empty

  if(data.products && data.products.length === 0) {
    return {
      notFound:true
    }
  }


  // if everything is fine and you have required data
  return {
    props: {
      products: data.products,
    },
    revalidate: 10
  };
}

export default HomePage;
