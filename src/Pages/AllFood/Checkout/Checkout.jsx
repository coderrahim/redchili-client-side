
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserInfo from "../../../hooks/useUserInfo";


const Checkout = () => {
    const checkoutFood = useLoaderData()
    const { name, email, image, category, quantity, price, addedby, country, description } = checkoutFood;
    const navigate = useNavigate()

    const dbuser = useUserInfo()

    const handleConfirmOrder = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const user = dbuser[0].name;
        const email = dbuser[0].email;
        const date = form.date.value;
        const country = form.country.value;

        const confirmOrderData = { name, user, email, price, addedby, date, country, image, category } 
        

        fetch('http://localhost:5000/foodOrder', {
            method: "POST",
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify(confirmOrderData)
        })
        .then(res => res.json())
        .then(data => {
            if(data.insertedId){
                Swal.fire(
                    'Good Job!',
                    `Order Create Successfull`,
                    'success'
                )
                navigate( '/my-order-food')
            }
        })
    }

    return (
        <div>
            <div className=" container bg-base-100">

                <div className="hero-content flex-col ">
                    <h1 className="text-5xl font-bold ">Confirm Order</h1>
                    <div className="card  w-full text-xl shadow-2xl bg-base-100">

                        <form onSubmit={handleConfirmOrder} className="card-body ">

                            <div className="grid md:grid-cols-2  gap-4">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Food Name</span>
                                    </label>
                                    <input type="text" name="name" defaultValue={name} placeholder="input Food Name" className="input input-bordered" required />
                                </div>
                            

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text"> Prices </span>
                                    </label>
                                    <input type="number" name="price" defaultValue={price} placeholder="input Price" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Name</span>
                                    </label>
                                    <input type="text" name="addedby"  defaultValue={dbuser[0]?.name} disabled className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    <input type="text" name="addedby"  defaultValue={dbuser[0]?.email} disabled className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Purchase Date</span>
                                    </label>
                                    <input type="date" name="date"  className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Country</span>
                                    </label>
                                    <select name="country" className="select select-bordered w-full " required>
                                        <option disabled selected>Select One</option>
                                        <option value="bangladesh">Bangladesh</option>
                                        <option value="india">India</option>
                                        <option value="pakisthan">Pakisthan</option>
                                        <option value="usa">USA</option>
                                        <option value="canada">Canada</option>
                                    </select>
                                </div>

                            </div>


                            <input className="btn btn-red w-full mt-8 " type="submit" value="Confirm Order" />
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;