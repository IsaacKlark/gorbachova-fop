import React from "react";
import Page from "../components/Page";
import Menu from "../components/Menu";
import { fakeUser } from "../assets/fakeData";
import CustomersTable from "../components/CustomersTable";

const Main = () => {
  return (<article className="page">
    <Menu />
    <Page>
      <div className="page__wrapper">
        <h1 className="header">Hello {fakeUser.name}  👋🏼,</h1>
        <CustomersTable />
      </div>
    </Page>
  </article>)
}

export default Main;
