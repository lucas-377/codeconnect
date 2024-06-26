import Image from "next/image";

import styles from "./aside.module.scss";

export const Aside = () => {
  return (
    <aside className={styles.aside}>
      <Image src={"/images/logo.png"} width={128} height={40} alt="Logo" />
    </aside>
  );
};
