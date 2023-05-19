
import CatalogueButton from './CatalogueButton';
import SearchInput from './SearchInput';
import styles from './styles/Header.module.css';
import Selected from './Selected';
import Orders from './Orders'
import Cart from './Cart'
import Manager from './Manager'
import DropdownMenu from './Dropdown';

function Header() {
  return (
    <header className={styles.header_container}>
      <img src={ require('./img/logo192.png')} alt="Company Logo" className={styles.logo} />
      <div className={styles.company_name}>Company Name</div>
      <CatalogueButton />
      <SearchInput />
      <Selected />
      <Orders />
      <Cart />
      <Manager />
      <DropdownMenu />
    </header>
  );
}

export default Header;
