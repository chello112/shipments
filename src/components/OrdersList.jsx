import EditOrder from "./EditOrder";
import "./OrdersList.css";

const OrdersList = ({ order, deleteHandler }) => {
  return (
    <tbody>
      <tr>
        <td className="td">{order.orderNo}</td>
        <td className="td">{order.date}</td>
        <td className="td">{order.customer}</td>
        <td className="td">{order.trackingNo}</td>
        <td className="td">{order.status}</td>
        <td className="td">{order.consignee}</td>
        <td>
          <EditOrder
            orderNo={order.orderNo}
            date={order.date}
            customer={order.customer}
            trackingNo={order.trackingNo}
            status={order.status}
            consignee={order.consignee}
          />
          <button className="deleteBtn" onClick={deleteHandler}>
            Delete
          </button>
        </td>
      </tr>
    </tbody>
  );
};

export default OrdersList;
