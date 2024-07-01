import Image from "next/image";

import styles from "./aside.module.scss";
import Link from "next/link";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Link href="/">
        <Image src={"/images/logo.png"} width={128} height={40} alt="Logo" />
      </Link>
    </aside>
  );
};
