import { Component } from "react";
import styles from "./Tutors.module.css";

class Tutors extends Component {
  renderList = (items) => {
    return items.map((el) => {
      const name = `${el.firstName} ${el.lastName}`;

      return (
        <div key={el.id} className={styles.tutorsListItem}>
          <div>{name}</div>
          <div className={styles.address}>
            <span>{el.email}</span>
            <span>{el.telephone}</span>
            <span>{el.location}</span>
          </div>
          <div>{el.role}</div>
        </div>
      );
    });
  };

  render() {
    const { list } = this.props;
    return (
      <section className="section">
        <h1>
          <span>cat icon</span>
          <span>Tutors</span>
        </h1>
        <div className={`box ${styles.tutorsList}`}>
          {this.renderList(list)}
        </div>
      </section>
    );
  }
}

export default Tutors;
