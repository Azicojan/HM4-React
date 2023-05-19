


import styles from './styles/SearchInput.module.css'

const SearchInput = () => {
    const handleInputChange = (event) => {
        const searchQuery = event.target.value;
    };

    return(
        <div className={styles.searchContainer}>
             <input
          type='type'
          placeholder="  Find an item"
          onChange={handleInputChange}
          className={styles.searchInput}
          />
         <span className={styles.searchIcon}>&#128269;</span>
        </div>
           
         
        
        
    );
};

export default SearchInput;