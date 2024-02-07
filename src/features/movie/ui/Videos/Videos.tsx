import { getVideosOfMovie } from '../../api';
import styles from './videos.module.css';

export default async function Videos({ id }: { id: string }) {
  const videos = await getVideosOfMovie(id);

  return (
    <ul role="list" className={styles.container}>
      {videos.map((video) => (
        <li key={video.id}>
          <iframe
            src={`https://youtube.com/embed/${video.key}`}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title={video.name}
          />
        </li>
      ))}
    </ul>
  );
}
