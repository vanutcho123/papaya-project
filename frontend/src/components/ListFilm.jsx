import React from "react";
import styles from "../style";
import { fetchData } from "../constants";
import CardContent from "./Card/CardContent";

const ListFilm = () => {
  return (
    <div className={`${styles.padding} mt-[55.6px]`}>
      <ul className="list-none">
        {fetchData.map((item, index) => (
          <li key={index}>
            <CardContent item={item} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListFilm;
