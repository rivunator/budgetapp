import React from "react";
import BudgetCategoryList from "../../BudgetCategory/BudgetCategoryList/BudgetCategoryList";
import MoneySummary from "../../UI/MoneySummary/MoneySummary";

const landingPage = () => (
  <React.Fragment>
    <MoneySummary />
    <BudgetCategoryList />
  </React.Fragment>
);

export default landingPage;
