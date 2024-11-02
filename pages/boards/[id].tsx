import { useRouter } from 'next/router';
import styles from './[id].module.css';

export default function BoardDetail() {
  const router = useRouter();
  const { id } = router.query;

  return <div>{id}</div>;
}
