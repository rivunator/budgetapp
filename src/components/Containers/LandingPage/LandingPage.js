import React from "react";
import BudgetCategoryList from "../../BudgetCategory/BudgetCategoryList/BudgetCategoryList";
import MoneySummary from "../../UI/MoneySummary/MoneySummary";
import MonthPicker from "../../UI/MonthPicker/MonthPicker";
import AddBudgetCategory from "../../UI/Buttons/AddBudgetCategory/AddBudgetCategory";

const landingPage = () => (
  <React.Fragment>
    <MonthPicker />
    <MoneySummary />
    <BudgetCategoryList />
    <AddBudgetCategory />
  </React.Fragment>
);

export default landingPage;
