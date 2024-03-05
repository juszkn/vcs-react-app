import {useEffect, useState} from "react";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        let data = localStorage.getItem('data');

        if(!data)
            return;

        data = JSON.parse(data);
        setProducts(data)
    }, [loading]);

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);
        const data = {};

        for (const input of formData.entries()) {
            data[input[0]] = input[1];
        }

        const  localData = localStorage.getItem('data');

        if(localData) {

            let convertedData = JSON.parse(localData)
            convertedData.push(data);
            convertedData = JSON.stringify(convertedData);
            localStorage.setItem('data', JSON.stringify([data]));
        } else {
            localStorage.setItem('data', JSON.stringify([data]));
        }

        console.log(data);

        setLoading(!loading)
    }
    return (
        <>
            <h1>Products</h1>
            <table className="table">
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Photo</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(data =>
                        <tr>
                            <td>{data.title}</td>
                            <td>{data.photo}</td>
                            <td>{data.price}</td>
                            <td>{data.qty}</td>
                        </tr>
                    )}
                </tbody>
            </table>

            <h1>New products</h1>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label>Produkto pavadinimas</label>
                    <input
                        type="text"
                        className="form-control"
                        name="title"
                    />
                </div>
                <div className="mb-3">
                    <label>Produkto nuotrauka</label>
                    <input
                        type="text"
                        className="form-control"
                        name="photo"
                    />
                </div>
                <div className="mb-3">
                    <label>Produkto kaina</label>
                    <input
                        type="text"
                        className="form-control"
                        name="price"
                    />
                </div>
                <div className="mb-3">
                    <label>Kiekis sandelyje</label>
                    <input
                        type="number"
                        className="form-control"
                        name="qty"
                    />
                </div>
                <button className="btn btn-primary">Pridėti</button>
            </form>
        </>
    )
}

export default Products;