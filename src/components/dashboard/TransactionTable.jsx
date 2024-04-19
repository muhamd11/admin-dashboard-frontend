import React from "react";

const TransactionTable = () => {
  const data = [
    {
      name: "Ahmed Mahmoud",
      status: "pending",
      date: "13.01.2024",
      amount: "1,000",
    },
    {
      name: "nour Mahmoud",
      status: "done",
      date: "13.01.2024",
      amount: "1,500",
    },
    {
      name: "Mahmoud ashraf",
      status: "cancelled",
      date: "13.01.2024",
      amount: "1,000",
    },
    {
      name: "Ahmed Ali",
      status: "done",
      date: "13.01.2024",
      amount: "5,000",
    },
    {
      name: "ashraf Mahmoud",
      status: "pending",
      date: "13.01.2024",
      amount: "1,500",
    },
    {
      name: "Ahmed Mahmoud",
      status: "pending",
      date: "13.01.2024",
      amount: "2,000",
    },
    {
      name: "Ahmed Mahmoud",
      status: "done",
      date: "13.01.2024",
      amount: "1,000",
    },
    {
      name: "Ahmed Mahmoud",
      status: "done",
      date: "13.01.2024",
      amount: "1,000",
    },
  ];
  const getStatusColor = (status) => {
    switch (status) {
      case "pending":
        return "#FFD700"; // Golden yellow
      case "done":
        return "#4CAF50"; // Green
      case "cancelled":
        return "#F44336";
      default:
        return "white";
    }
  };

  return (
    <div className="bg-white mt-5 rounded-lg p-5 ">
      <h2 className="text-gray-400 text-lg">Latest Transaction</h2>
      <div className="overflow-x-auto overflow-y-auto h-[600px]">
        <table className="table ">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Status</th>
              <th>Date</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {data.map((user,index) => (
              <tr key={index} className="hover cursor-pointer">
                <th className="flex items-center gap-3">
                  <div className="bg-neutral text-neutral-content rounded-full w-[39px] h-[39px] flex justify-center items-center">
                    <span className="text-lg mr-[1px]">
                      {user.name[0].toUpperCase()}
                    </span>
                    <span className="text-lg">
                      {user.name[1].toUpperCase()}
                    </span>
                  </div>
                  {user.name}
                </th>
                <td>
                  <p
                    className="w-fit p-[3px] rounded-md text-white"
                    style={{ backgroundColor: getStatusColor(user.status) }}
                  >
                    {user.status}
                  </p>
                </td>
                <td>{user.date}</td>
                <td>{user.amount} $</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TransactionTable;
