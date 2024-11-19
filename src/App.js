import CreateCustomer from './features/customers/CreateCustomer'
import Customer from './features/customers/Customer'
import AccountOperation from './features/accounts/AccountOperations'
import Balance from './features/accounts/BalanceDisplay'
import { useSelector } from "react-redux"
function App() {
  const name = useSelector((state) => state.customer.fullName)
  return (
    <div>
      <h1>The React-Redux Bank</h1>
      {name === "" ? <CreateCustomer></CreateCustomer> : <><Customer></Customer>
      <AccountOperation></AccountOperation>
      <Balance></Balance></> }
      
      
    </div>
  );
}

export default App;
