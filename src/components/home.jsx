import axios from "axios"
import { useEffect, useState } from "react"

import { Navbar } from "react-bootstrap"


const HomeEcommerce = () => {
    const [products, setProducts] = useState([])

    async function handleProducts() {
        let response = await axios.get('http://127.0.0.1:5000/products')
        let data = response.data
        setProducts(data)
    }

    useEffect(() => {
        handleProducts()
    }, [])
    
    return (
        <div className="">
            <Navbar/>
            <div className="">
                <h1>Products</h1>
                {/* <button onClick={() => handleProducts()}>Load Products</button> */}
                <div className="products d-flex flex-wrap w-100">
                    {
                        products.map((item) => (
                            <ul key={item.id} >
                                <li style={{ listStyleType: 'none' }} className="list-none"><img src={item.image} width={100} height={100} alt="" /></li>
                                <li style={{ listStyleType: 'none' }} className="list-none text-center">{item.title}</li>
                            </ul>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}

export default HomeEcommerce