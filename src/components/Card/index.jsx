import Image from "next/image";
import { Avatar } from "../Avatar";

import styles from "./card.module.scss";

export const Card = ({ post }) => {
  return (
    <article className={styles.card}>
      <header>
        <figure>
          <Image src={post.cover} width={438} height={133} alt="Capa do post" />
        </figure>
      </header>
      <section>
        <h2>{post.title}</h2>
        <p>{post.body}</p>
        <a href={`/posts/${post.slug}`}>Ver detalhes</a>
      </section>
      <footer>
        <Avatar name={post.author.username} imageSrc={post.author.avatar} />
      </footer>
    </article>
  );
};
