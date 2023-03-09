import { useSelector, useDispatch } from "react-redux";
import { getOrders } from "../features/orders/orderSlice";
import { useEffect } from "react";
import { toast } from "react-toastify";
import OrdersList from "./OrdersList.jsx";
import LoadingSpinner from "../components/spinner/LoadingSpinner";
import classes from "./Dashboard.module.css";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { orders, isLoading, isError, message } = useSelector((state) => state.orders);

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }

    dispatch(getOrders());
  }, [isError, message, dispatch]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  let content;
  if (isError) {
    content = <p>{message}</p>;
  }

  const deleteHandler = () => {
    toast.error("Item has been deleted successfully");
  };

  return (
    <div className={classes.container}>
      <section className={classes.heading}>
        <p>Orders Dashboard</p>
        {isError && (
          <div>
            <div className={classes.err}>{content}</div>
            <h6>Something went wrong. Please try again later...</h6>
          </div>
        )}
      </section>

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
          {orders.map((order) => (
            <OrdersList key={order.orderNo} order={order} deleteHandler={deleteHandler} />
          ))}
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
