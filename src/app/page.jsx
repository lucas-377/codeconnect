import { Card } from "@/components/Card";
import styles from "./page.module.css";
import logger from "@/logger";
import Link from "next/link";

/**
 * Return all posts from backend
 * @returns JSON
 */
async function getAllPosts(page) {
  const response = await fetch(
    `http://localhost:3042/posts?_page=${page}&_per_page=4`
  );

  if (!response.ok) {
    logger.error("Erro na obtenção dos posts.");
    return []; // Prevent client side page error
  }

  logger.info("Posts obtidos com sucesso.");
  return response.json();
}

export default async function HomePage({ searchParams }) {
  const currentPage = parseInt(searchParams?.page || 1);
  const { data: posts, prev, next } = await getAllPosts(currentPage);

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <Card post={post} key={post.id} />
      ))}

      <div className="footer-links">
        {prev && (
          <Link href={`/?page=${prev}`} className={styles.pagination}>
            Página anterior
          </Link>
        )}
        {next && (
          <Link href={`/?page=${next}`} className={styles.pagination}>
            Próxima página
          </Link>
        )}
      </div>
    </main>
  );
}
