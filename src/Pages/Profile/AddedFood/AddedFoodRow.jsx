import { Link } from "react-router-dom";


const AddedFoodRow = ({ food }) => {
    const { _id, image, name, category, price,  } = food || {}
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="mask mask-squircle w-12 h-12">
                        <img src={image} alt="" />
                    </div>
                </div>
            </td>
            <td className="font-medium">
                {name}
            </td>
            <td> {category} </td>
            <td> {price} </td>
            <td>
                <button className="btn btn-outline btn-sm">
                    <Link to={`/updatefood/${_id}`}>Update</Link>
                </button>
            </td>
        </tr>
    );
};

export default AddedFoodRow;