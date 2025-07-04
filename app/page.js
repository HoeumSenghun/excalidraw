import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1 className="text-3xl text-pink-300 font-bold underline">excalidraw</h1>
    </div>
  );
}
