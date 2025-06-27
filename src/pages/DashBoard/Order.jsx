import React from "react";

const orders = [
  {
    id: "#57113",
    date: "June 27, 2025",
    status: "On hold",
    total: "£19.99 for 1 item",
  },
  {
    id: "#57073",
    date: "June 24, 2025",
    status: "Cancelled",
    total: "£19.99 for 1 item",
  },
  {
    id: "#57072",
    date: "June 24, 2025",
    status: "Completed",
    total: "£0.00 for 2 items",
  },
  {
    id: "#56974",
    date: "June 21, 2025",
    status: "Cancelled",
    total: "£47.99 for 1 item",
  },
];

const getStatusColor = (status) => {
  switch (status) {
    case "Completed":
      return "text-green-600 bg-green-100";
    case "Cancelled":
      return "text-red-600 bg-red-100";
    case "On hold":
      return "text-yellow-600 bg-yellow-100";
    default:
      return "text-gray-600 bg-gray-100";
  }
};

const Order = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">My Orders</h1>

      {/* Scrollable wrapper */}
      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse text-sm text-left">
          <thead>
            <tr className="bg-gray-100 text-gray-600 uppercase tracking-wider">
              <th className="p-3 whitespace-nowrap">Order</th>
              <th className="p-3 whitespace-nowrap">Date</th>
              <th className="p-3 whitespace-nowrap">Status</th>
              <th className="p-3 whitespace-nowrap">Total</th>
              <th className="p-3 whitespace-nowrap">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr
                key={order.id}
                className="border-b hover:bg-gray-50 transition duration-150"
              >
                <td className="p-3 font-medium whitespace-nowrap">
                  {order.id}
                </td>
                <td className="p-3 whitespace-nowrap">{order.date}</td>
                <td className="p-3 whitespace-nowrap">
                  <span
                    className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(
                      order.status
                    )}`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="p-3 whitespace-nowrap">{order.total}</td>
                <td className="p-3 whitespace-nowrap">
                  <button className="text-indigo-600 hover:underline">
                    View
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Order;
