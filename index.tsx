import { FunctionComponent } from "react";
import styles from "./Login.module.css";

const Login: FunctionComponent = () => {
  return (
    <div className={styles.login}>
      <div className={styles.navigation}>
        <div className={styles.navigationList} />
        <div className={styles.textBlog}>Blog</div>
        <div className={styles.signUp} />
        <div className={styles.signUp1}>Sign Up</div>
        <div className={styles.login1}>Login</div>
      </div>
      <div className={styles.heroParent}>
        <div className={styles.hero} />
        <img
          className={styles.toriiForestIllustration1Icon}
          alt=""
          src="/toriiforestillustration-1@2x.png"
        />
        <div className={styles.groupChild} />
        <img className={styles.groupItem} alt="" />
      </div>
      <div className={styles.rectangleParent}>
        <div className={styles.groupInner} />
        <input
          className={styles.enterYourEmail}
          type="text"
          defaultValue="Nae"
          placeholder="Enter your email"
          id="Name"
        />
        <div className={styles.rectangleDiv} />
        <div className={styles.name}>Name</div>
      </div>
      <div className={styles.rectangleGroup}>
        <div className={styles.groupChild1} />
        <input
          className={styles.enterYourPassword}
          type="password"
          defaultValue="Password"
          placeholder="Enter your password"
          id="Password"
        />
        <div className={styles.password}>Name</div>
      </div>
      <div className={styles.rectangleContainer}>
        <div className={styles.groupChild2} />
        <div className={styles.login2}>Login</div>
      </div>
    </div>
  );
};

export default Login;
