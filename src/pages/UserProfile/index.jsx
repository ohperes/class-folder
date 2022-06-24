import styles from "./Profile.module.css";

function Profile() {
  return (
    <div className={styles.container}>
      <main>
        <div className={styles.row}>
          <div className={styles.left}>
            <h4 className={styles.name}>Jane Doe</h4>
            <p className={styles.info}>UI/UX Designer</p>
            <p className={styles.info}>jane.doe@gmail.com</p>
            <p className={styles.desc}>
              Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in
              France. I really enjoy photography and mountains.
            </p>
          </div>
          <div className={styles.right}>
            <ul className={styles.nav}>
              <li>Perfil</li>
              <li>Turmas</li>
              <li>Aulas</li>
            </ul>
          </div>
        </div>
      </main>
    </div> 
  );
}

export default Profile;