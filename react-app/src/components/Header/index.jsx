import { useTransactionContext } from "../../hooks/useTransactionContext";
import Input from "../Input";
import styles from "./style.module.scss";

export default function Header() {
	const { searchTransaction, setSearchTransaction } = useTransactionContext();

	return (
		<header className={styles.header}>
			<h1>Expense Tracker</h1>
			<Input
				placeholder="Search for a transaction"
				value={searchTransaction}
				setValue={setSearchTransaction}
			/>
			<h1>React App</h1>
		</header>
	)
}
