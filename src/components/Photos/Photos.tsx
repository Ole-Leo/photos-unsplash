import { FC } from 'react';

import { Photo } from '../../data';
import PhotoAlbum, { ClickHandler } from 'react-photo-album';
import { photosLayout } from '../../utils/utils';

import styles from './styles.module.css';

type PhotosProps = {
  photos: Photo[];
  onClick: ClickHandler;
};

export const Photos: FC<PhotosProps> = ({ photos, onClick }) => {
  return (
    <div className={styles.photos}>
      {photos && (
        <PhotoAlbum
          photos={photosLayout(photos)}
          layout="columns"
          onClick={onClick}
        />
      )}
    </div>
  );
};
