import { Photo } from './data';
import classnames from 'classnames';
import { useEffect, useState } from 'react';
import { Logo } from './components/Logo/Logo';
import { Photos } from './components/Photos/Photos';
import { Search } from './components/Search/Search';
import { baseSrc, fetchPhotos } from './utils/utils';

import styles from './styles.module.css';

function App() {
  const [query, setQuery] = useState('');
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [src, setScr] = useState(baseSrc);

  const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target;
    setQuery(value);
  };

  const keyDownHandler = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      fetchPhotos(setPhotos, query.toLowerCase());
    }
  };

  const clickHandler = (event: React.MouseEvent) => {
    const { src } = event.currentTarget as HTMLImageElement;
    setScr(src);
    localStorage.setItem('bg', src);
  };

  useEffect(() => {
    localStorage.getItem('bg') === null
      ? setScr(baseSrc)
      : setScr(localStorage.getItem('bg')!);
  }, []);

  return (
    <div className={styles.app} style={{ backgroundImage: `url(${src})` }}>
      <header className={classnames(styles.header, styles.center)}>
        <Logo />
        <Search
          value={query}
          onChange={changeHandler}
          onKeyDown={keyDownHandler}
        />
      </header>
      <main className={styles.center}>
        <Photos photos={photos} onClick={clickHandler} />
      </main>
    </div>
  );
}

export default App;
