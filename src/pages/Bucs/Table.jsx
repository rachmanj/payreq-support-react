import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';
import Moment from 'react-moment';

import Pagination from '../../components/Pagination';

const Table = () => {
  const [bucs, setBucs] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    const fetchBucs = async () => {
      setLoading(true);
      const res = await axios.get(
        'http://10.10.110.68/payreq-support/api/bucs'
      );
      setBucs(res.data.result);
      setLoading(false);
    };
    fetchBucs();
  }, []);

  const goToPage = async link => {
    setLoading(true);
    const res = await axios.get(link);
    setBucs(res.data.result);
    setLoading(false);
  };

  return (
    <>
      <div>
        {loading ? (
          <h3>Loading.....</h3>
        ) : (
          <>
            <table className="table-auto w-full">
              <thead className="bg-black text-white">
                <tr>
                  <th className="px-4 py-2">Nomor RAB</th>
                  <th className="px-4 py-2">Nominal</th>
                  <th className="px-4 py-2">Tanggal</th>
                  <th className="px-4 py-2">Description</th>
                </tr>
              </thead>
              <tbody>
                {bucs?.data?.map(item => (
                  <tr key={item.id}>
                    <td className="border px-4 py-2 text-center">
                      {item.rab_no}
                    </td>
                    <td className="border px-4 py-2 text-right">
                      {item.budget.toLocaleString()}
                    </td>
                    <td className="border px-4 py-2 text-center">
                      <Moment format="DD-MM-YYYY">{item.date}</Moment>
                    </td>
                    <td className="border px-4 py-2 text-left">
                      {item.description}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </>
        )}
      </div>
      <Pagination
        currentPage={bucs.current_page}
        setCurrentPage
        bucs={bucs}
        goToPage={link => goToPage(link)}
      />
    </>
  );
};

export default Table;
