import styles from "./form.module.css"
import { Link } from "react-router-dom";
import { Formik } from "formik";
import {useDispatch, useSelector} from "react-redux";
import {selectCommentsByProductId} from "../../features/comments/comments.selector";
import {addComment} from "../../features/comments/comments.slice";

const Form = ({ productId }) => {
  const comments = useSelector(selectCommentsByProductId(productId));
  const dispatch = useDispatch();

  const attachComment = (title) => dispatch(addComment({
      id: new Date(),
      title,
      productId
  }))

  return (
      <Formik
          initialValues={{
              comment: ""
          }}
          onSubmit={(values) => {
              attachComment(values.comment);
              values.comment = "";
          }}
      >
          {({ values, handleSubmit, handleChange }) => (
              <form className={styles.layout} onSubmit={handleSubmit}>
                  <Link to={`/order/${productId}`} className={styles.button}>Замовити</Link>
                  <h3>Комментарі</h3>
                  <div className={styles.comments}>
                      {comments.map(({ id, title }) =>
                          <div key={id} className={styles.comment}>
                              <p className={styles.comment__comment}>{title}</p>
                              <p className={styles.comment__user}>Невідомий</p>
                          </div>
                      )}
                  </div>
                  <div className={styles.form}>
                  <textarea
                      className={styles.textarea}
                      placeholder={'Введіть коментар'}
                      name="comment"
                      onChange={handleChange}
                      value={values.comment}
                  />
                      <button type="submit" className={styles.button}>Додати коментар</button>
                  </div>
              </form>
          )}
      </Formik>
  )
}

export default Form;
