import Image from "next/image";
import styles from "./SampleCard.module.css";

export interface ISampleCard {
  tag: string;
  title: string;
  body: string;
  author: string;
  time: string;
}

const SampleCard: React.FC<ISampleCard> = ({
  tag,
  title,
  body,
  author,
  time,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <div className={styles.card__header}>
          <Image
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVH1VeZVlinoNjmTgBsEtMKTKS4o_ZbeGS6i7wk6BOgtbsh7R92mvNr69xPWu3GA-kS0c&usqp=CAU"
            alt="card__image"
            className={styles.card__image}
            width="600"
            height="400"
          />
        </div>
        <div className={styles.card__body}>
          <span className={`${styles.tag} ${styles["tag-blue"]}`}>{tag}</span>
          <h4>{title}</h4>
          <p>{body}</p>
        </div>
        <div className={styles.card__footer}>
          <div className={styles.user}>
            <Image
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRxi1HaszVALKDMrlwjLcZeQMkyhIQArSMftQ&usqp=CAU"
              alt="user__image"
              className={styles.user__image}
              width="40"
              height="40"
            />
            <div className={styles.user__info}>
              <h5>{author}</h5>
              <small>{time}</small>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SampleCard;
