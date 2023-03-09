import { useState } from "react";
import { toast } from "react-toastify";
import data from "../MOCK_DATA/shipments_data.json";
import "./Table.css";
import OrdersList from "./OrdersList";

const Table = () => {
  const [orders, setOrders] = useState(data);

  const deleteHandler = (orderId) => {
    //Copy of current orders array
    const newOrders = [...orders];

    //findIndex method to find selected item
    const index = orders.findIndex((order) => order.orderNo === orderId);

    //Index indicates to the item we want to remove and 1 indicates how many items we want to remove
    newOrders.splice(index, 1);

    //Display remain orders array
    setOrders(newOrders);

    //Show some feedback
    toast.error("Item has been deleted successfully!");
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th className="th">Order nr.</th>
            <th className="th">Date</th>
            <th className="th">Customer</th>
            <th className="th">Tracking nr.</th>
            <th className="th">Status</th>
            <th className="th">Consignee</th>
            <th className="th">Actions</th>
          </tr>
        </thead>
        {console.log(orders)}
        {orders.map((order) => {
          return <OrdersList key={order.orderNo} order={order} deleteHandler={deleteHandler} />;
        })}
      </table>
    </div>
  );
};

export default Table;
