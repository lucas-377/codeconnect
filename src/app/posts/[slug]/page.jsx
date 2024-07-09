import logger from "@/logger";
import { remark } from "remark";
import html from "remark-html";

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

  const post = data[0];

  // Format markdown content to render as HTML
  const processedContent = await remark().use(html).process(post.markdown);
  const contentHtml = processedContent.toString();

  post.markdown = contentHtml;

  return post;
}

export default async function PostPage({ params }) {
  const data = await getPostBySlug(params.slug);

  return (
    <>
      <h1>{data.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: data.markdown }} />
    </>
  );
}
