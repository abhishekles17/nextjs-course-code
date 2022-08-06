import fs from "fs/promises";
import path from "path";

const ProductDescription = (props) => {

    const {LoadedProduct} = props;

    if(!LoadedProduct) {
       return <div>Loading....</div>
    }

    return (
        <p>{LoadedProduct.description}</p>)
}

export async function getStaticProps(context) {
    const {params} = context;

    const productId = params.pid;
    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const product = data.products.find(product => product.id === productId)
  
  
  
    // if everything is fine and you have required data
    return {
      props: {
        LoadedProduct: product,
      },
    };
  }


  //this function is required to tell nextJs that what values of pid we need to pre-generate so that it will pre-generate it while building 
export async function getStaticPaths() {

    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const jsonData = await fs.readFile(filePath);
    const data = JSON.parse(jsonData);

    const paths  = [];
    data.products.map((product,index) => {
        if(product.id !== 'p3')
        paths.push({params:{pid:product.id}})
    })

    console.log(paths)

    return {
      paths: paths,
      fallback:true
    }
  }

  //here fallback is very important to note ..for example we have a websites in which we have 100 dynamic pages but few of the pages are visited rarely so its good to pre-genrate only most visited pages and generate least isited pages only in browser
// if those pages are visited ..this can be achieve by making fallback true and not pre generating least visited pages.
//if we are using fallback then we need to handle that in component because for the pages which will be generated after request reaches to server in browser needs to time to load and during that time the values might not be present..


//note if fallback is set "blocking" then we don't need to handle the data availability or not in component because next js won't render component untill unless we have data fetched after sending request to server..



export default ProductDescription