import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, photo, name, price, quantity } = coffee;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        // start deleting the3 coffee
        fetch(`http://localhost:4000/coffees/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            // console.log("after delete", data);
            if (data.deletedCount) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remainingCoffees = coffees.filter(
                (coff) => coff._id !== _id
              );
              setCoffees(remainingCoffees);
            }
          });
      }
    });
  };
  return (
    <div className="card lg:card-side bg-base-100 shadow-sm">
      <figure>
        <img src={photo} alt="Album" />
      </figure>
      <div className="flex w-full mt-8 justify-around ">
        <div className="space-y-2">
          <h2 className="card-title">Name : {name}</h2>
          <h2 className="card-title">Price : {price}</h2>
          <h2 className="card-title">Quantity : {quantity}</h2>
        </div>

        <div className="space-y-2">
          <Link to={`/details/${_id}`}>
            {" "}
            <button className="btn ">View</button>
          </Link>
          <br />
          <Link to={`/update/${_id}`}>
            <button className="btn">Edit</button>
          </Link>
          <br />
          <button onClick={() => handleDelete(_id)} className="btn">
            X
          </button>
          <br />
        </div>
      </div>
    </div>
  );
};

export default CoffeeCard;
