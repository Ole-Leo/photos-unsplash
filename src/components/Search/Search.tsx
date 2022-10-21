import { FC } from 'react';
import { ReactComponent as SearchIcon } from '../../assets/search.svg';

import styles from './styles.module.css';

type SearchProps = {
  value: string;
  onChange: React.ChangeEventHandler;
  onKeyDown?: React.KeyboardEventHandler;
};

export const Search: FC<SearchProps> = ({ value, onChange, onKeyDown }) => {
  return (
    <div className={styles.search}>
      <SearchIcon />
      <input
        className={styles.input}
        type="search"
        placeholder="Search for Unsplash photos"
        value={value}
        onChange={onChange}
        onKeyDown={onKeyDown}
      />
    </div>
  );
};
