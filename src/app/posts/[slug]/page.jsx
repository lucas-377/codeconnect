import logger from "@/logger";

/**
 * Return one post from backend
 * @returns JSON
 */
async function getPostBySlug(slug) {
  const url = `http://localhost:3042/posts?slug=${slug}`;

  const response = await fetch(url);

  if (!response.ok) {
    logger.error("Post não encontrado.");
    return {}; // Prevent client side page error
  }

  logger.info("Post encontrado com sucesso.");

  const data = await response.json();

  if (data.length === 0) {
    return {};
  }

  return data[0];
}

export default async function PostPage({ params }) {
  const data = await getPostBySlug(params.slug);

  return <h1>{data.title}</h1>;
}
