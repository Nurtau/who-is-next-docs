import React from "react";
import clsx from "clsx";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Читабельный",
    Svg: require("@site/static/img/swift-icon.svg").default,
    description: (
      <>
        Фронтовая часть проекта написана на Swift, что делает проект легким для
        понимания.
      </>
    ),
  },
  {
    title: "Простой и быстрый",
    Svg: require("@site/static/img/go-icon.svg").default,
    description: (
      <>
        Серверная часть проекта написано на Go. Go славится своей простотой и
        производительностью.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
