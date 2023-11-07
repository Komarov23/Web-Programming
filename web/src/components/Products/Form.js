import {useRef, useState} from "react";
import styles from "./form.module.css"
import { Link } from "react-router-dom";

const Form = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const textarea = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Коментар додано!!!!!");
    setComments([...comments, textarea.current.value])
    textarea.current.value = "";
  }

  return (
      <div className={styles.layout}>
        <Link to={`/order/${productId}`} className={styles.button}>Замовити</Link>
        <h3>Комментарі</h3>
        <div className={styles.comments}>
          {comments.map(c =>
              <div className={styles.comment}>
                <p className={styles.comment__comment}>{c}</p>
                <p className={styles.comment__user}>Невідомий</p>
              </div>
          )}
        </div>
        <form className={styles.form} onSubmit={handleSubmit}>
          <textarea className={styles.textarea} ref={textarea} placeholder={'Введіть коментар'}/>
          <button className={styles.button}>Додати коментар</button>
        </form>
      </div>
  )
}

export default Form;