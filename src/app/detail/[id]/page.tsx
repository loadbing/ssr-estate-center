import styles from "./detail.module.css";


type DetailPageProps = {
  params: {
    id: string
  }
}

export default function Detail({ params: { id } }: DetailPageProps) {

  return (
    <div className={styles.detail}>
      <section id="section-detail" className={styles['section-detail']}>
        Detail : {id}
      </section>
    </div>
  );
}
