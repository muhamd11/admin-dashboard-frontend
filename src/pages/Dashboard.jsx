// @ts-nocheck
import React from "react";
import TransactionTable from "../components/dashboard/TransactionTable";
import Charts from "../components/dashboard/Charts";
import NavLink from "../components/NavLink";
import Head from './../components/dashboard/Head';

const dashboard = () => {
  return (
    <>
    <NavLink navName='DASHBOARD'/>
      <div className="mt-5">
        <Head />
        <Charts />
        <TransactionTable />
      </div>
    </>
  );
};

export default dashboard;
