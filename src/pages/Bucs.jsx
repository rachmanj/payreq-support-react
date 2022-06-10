import React from 'react';

import Table from './Bucs/Table';

const Bucs = () => {
  return (
    <>
      <div className="flex">
        <div className="p-7 mt-5 text-2xl font-semibold h-screen">
          <h1>Bucs</h1>
        </div>
        <div className="mt-20">
          <Table />
        </div>
      </div>
    </>
  );
};

export default Bucs;
