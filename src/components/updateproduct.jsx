import axios from "axios"
import { useFormik } from "formik"

const UpdateProducts = () => {

    const formik = useFormik({
        initialValues: {
            id: 0,
            title: '',
            image: '',
            price: 0,
            rating: ""
        },
        onSubmit: (values) => {
            axios({
                method: 'put',
                url: `http://127.0.0.1:5000/update/${item_id}`,
                data:values
            })
        }

    })


    return (
        <div className="w-100 d-flex mt-3 justify-content-center align-items-center flex-column">
            <h1>Update Proudcts</h1>
            
            <form action="" className="w-25 border border-4 p-4 rounded">
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
    )
}

export default UpdateProducts