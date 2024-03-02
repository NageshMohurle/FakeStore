import axios from "axios"
import { useFormik } from 'formik'


const AddProducts = () => {

    const formik = useFormik({
        initialValues: {
            id: 0,
            title: "",
            image: "",
            price: 0,
            rating: "",
        },
        onSubmit: (values) => {
            axios({
                method: "post",
                url: "http://127.0.0.1:5000/add",
                data: values
            })
        }
    })

    return (
        <div>
            <div className="add-products w-100 d-flex justify-content-center align-items-center flex-column m-3">
                <h1 className="">Add Products</h1>
                <form action="" className="form w-25 border border-2 p-3" style={{ height: '400px' }} onSubmit={formik.handleSubmit}>
                    <label htmlFor="id" className="">Id</label>
                    <input type="number" id="id" name="id" className="form-control" onChange={formik.handleChange} />

                    <label htmlFor="title">Title</label>
                    <input type="text" id="title" name="title" className="form-control" onChange={formik.handleChange} />

                    <label htmlFor="image">Image</label>
                    <input type="text" id="image" name="image" className="form-control" onChange={formik.handleChange} />

                    <label htmlFor="Price">Price</label>
                    <input type="number" id="Price" name="price" className="form-control" onChange={formik.handleChange} />

                    <label htmlFor="Rating">Rating</label>
                    <input type="text" id="Rating" name="rating" className="form-control" onChange={formik.handleChange} />

                    <button className="btn btn-success mt-2">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddProducts