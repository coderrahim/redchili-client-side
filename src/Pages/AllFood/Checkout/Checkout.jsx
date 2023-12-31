
import PropTypes from 'prop-types';
import { useLoaderData, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useUserInfo from "../../../hooks/useUserInfo";
import PageTitle from "../../../Components/PageTitle";
import { useContext } from 'react';
import { AuthContext } from '../../../Provider/AuthProvider';


const Checkout = () => {
    const checkoutFood = useLoaderData()
    const {user} = useContext(AuthContext)
    const { name, email, image, category, quantity, price, addedby, country, description } = checkoutFood 
    const navigate = useNavigate()

    const dbuser = useUserInfo()

    const handleConfirmOrder = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const price = form.price.value;
        const user = form.user.value;
        const email = form.email.value;
        const date = form.date.value;
        const country = form.country.value;

        const confirmOrderData = { name, user, email, price, addedby, date, country, image, category } 
        

        fetch('https://red-chili-server-side.vercel.app/foodOrder', {
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
            <PageTitle title="Checkout" />
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
                                    
                                    {
                                        user?.displayName ?
                                        
                                        <input type="text" name="user"  defaultValue={user.displayName} disabled className="input input-bordered" required />
                                        :
                                        <input type="text" name="user"  defaultValue={dbuser[0]?.name} disabled className="input input-bordered" required />
                                    }

                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Buyer Email</span>
                                    </label>
                                    {
                                        user?.email ?
                                        <input type="text" name="email"  defaultValue={user?.email} disabled className="input input-bordered" required />
                                        :
                                        <input type="text" name="email"  defaultValue={dbuser[0]?.email} disabled className="input input-bordered" required />
                                    }
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
Checkout.propTypes = {
    Checkout: PropTypes.object
}

export default Checkout;