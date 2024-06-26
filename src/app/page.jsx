import { Card } from "@/components/Card";
import styles from "./page.module.css";
import logger from "@/logger";

/**
 * Return all posts from backend
 * @returns JSON
 */
async function getAllPosts() {
  const response = await fetch("http://localhost:3042/posts");

  if (!response.ok) {
    logger.error("Erro na obtenção dos posts.");
    return []; // Prevent client side page error
  }

  logger.info("Posts obtidos com sucesso.");
  return response.json();
}

export default async function Home() {
  const posts = await getAllPosts();

  return (
    <main className={styles.main}>
      {posts.map((post) => (
        <Card post={post} />
      ))}
    </main>
  );
}
