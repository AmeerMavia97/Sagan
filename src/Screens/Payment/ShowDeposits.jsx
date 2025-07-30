import React, { useEffect, useState } from "react";
import { db } from "../../Config/Firebase/Firebase";
import { collection, getDocs, query, orderBy } from "firebase/firestore";
import { CircleArrowLeft } from "lucide-react";

const ShowDeposits = () => {
  const [deposits, setDeposits] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
const fetchDeposits = async () => {
  try {
    const q = query(collection(db, "deposits"), orderBy("createdAt", "asc"));
    const querySnapshot = await getDocs(q);

    const depositList = [];
    let totalAmount = 0;

    querySnapshot.forEach((doc) => {
      const data = doc.data();
      depositList.push(data);
      totalAmount += Number(data.amount) || 0;
    });

    setDeposits(depositList);
    setTotal(totalAmount);
  } catch (error) {
    console.error("Error fetching deposits:", error);
  }
};

    fetchDeposits();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center">
      <header className="pt-5 sm:pt-8 pb-10 lg:p-8">
        <div className="flex items-center justify-center">
          <img
            src="/Images/logo.png"
            alt="SAGAN"
            className="h-16 md:h-20 2xl:h-24"
          />
        </div>
      </header>

      <section className="sm:px-8 2xl:px-12 sm:bg-[#FFF5F7] rounded-[20px] sm:shadow-lg mb-24 w-full max-w-4xl">
        <div className="flex justify-center items-center gap-4 pt-8 px-1.5 sm:px-0">
          <CircleArrowLeft className="size-5.5 2xl:size-7 text-[#FFB5C0]" />
          <div className="relative w-full max-w-lg">
            <div className="w-full h-0.5 2xl:h-1 bg-[#FFB5C0] rounded-full" />
            <div className="absolute top-1/2 left-0 w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-1/3 w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-2/3 w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
            <div className="absolute top-1/2 left-full -translate-x-full w-2 h-2 2xl:w-3 2xl:h-3 bg-[#FFB5C0] rotate-45 -translate-y-1/2 rounded-full" />
          </div>
        </div>

        <div className="p-6 md:p-10">
          <h1 className="text-center font-Inter font-semibold text-[23px] lg:text-[27px] 2xl:text-[30px] mb-6">
            All Deposits
          </h1>

          <div className="overflow-x-auto rounded-xl shadow">
            <table className="w-full border border-[#FFB5C0] bg-white">
              <thead>
                <tr className="bg-[#FFEDF0] text-[#272727] text-left">
                  <th className="p-3 border border-[#FFB5C0]">#</th>
                  <th className="p-3 border border-[#FFB5C0]">Payment Method</th>
                  <th className="p-3 border border-[#FFB5C0]">Amount (AUD)</th>
                </tr>
              </thead>
              <tbody>
                {deposits.map((deposit, index) => (
                  <tr key={index} className="hover:bg-[#FFF5F7] text-[#272727]">
                    <td className="p-3 border border-[#FFB5C0]">{index + 1}</td>
                    <td className="p-3 border border-[#FFB5C0] capitalize">
                      {deposit.method || "N/A"}
                    </td>
                    <td className="p-3 border border-[#FFB5C0]">A${deposit.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="text-right font-semibold mt-6 text-lg 2xl:text-xl text-[#272727]">
            Total: A${total.toFixed(2)}
          </div>
        </div>
      </section>
    </div>
  );
};

export default ShowDeposits;
