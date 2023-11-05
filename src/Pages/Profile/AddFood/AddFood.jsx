import { useContext } from "react";
import { AuthContext } from "../../../Provider/AuthProvider";
import Swal from "sweetalert2";


const AddFood = () => {
    const { user } = useContext(AuthContext)

    const handleAddFood = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const email = user?.email;
        const image = form.image.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const addedby = form.addedby.value;
        const country = form.country.value;
        const description = form.description.value;

        const addFoodData = { name, email, image, category, quantity, price, addedby, country, description, }

        fetch(`http://localhost:5000/addfood`, {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(addFoodData)
        })
            .then(res => res.json())
            .then((data) => {
                if (data.insertedId) {
                    Swal.fire(
                        'Good Job!',
                        `Food Added Successfull`,
                        'success'
                    )
                }
            })
    }


    return (
        <div>
            <div className=" container bg-base-100">

                <div className="hero-content flex-col ">
                    <h1 className="text-5xl font-bold ">Add Food Item</h1>
                    <div className="card  w-full text-xl shadow-2xl bg-base-100">

                        <form onSubmit={handleAddFood} className="card-body ">

                            <div className="grid md:grid-cols-2  gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="input Food Name" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Image</span>
                                    </label>
                                    <input type="text" name="image" placeholder="Food Image URL" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Category</span>
                                    </label>
                                    <select name="category" className="select select-bordered w-full ">

                                        <option disabled selected>Select One</option>
                                        <option value="burger">Burger</option>
                                        <option value="chicken">Chicken</option>
                                        <option value="soup">Soup</option>
                                        <option value="bowl">Bowl</option>
                                        <option value="chiladas">Chiladas</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Quantity</span>
                                    </label>
                                    <input type="number" name="quantity" placeholder="input Food quantity" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Prices </span>
                                    </label>
                                    <input type="number" name="price" placeholder="input Price" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Added By</span>
                                    </label>
                                    <input type="text" name="addedby" placeholder="" defaultValue={user?.displayName} className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <select name="country" className="select select-bordered w-full ">
                                        <option disabled selected>Select One</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="india">India</option>
                                        <option value="pakisthan">Pakisthan</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Descripton</span>
                                    </label>
                                    <textarea className="textarea textarea-bordered" name="description" placeholder="input Food Descripton"></textarea>
                                </div>
                            </div>


                            <input className="btn btn-red w-full mt-8 " type="submit" value="Add Food Item" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddFood;