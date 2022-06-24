
import { Link } from 'react-router-dom';
import styles from './Login.module.css';

export function Login() {

  return (
    <div className={styles.container}>
      <div className={styles.content}>
            <img className={styles.loginLogo} src="../src/assets/amico.svg" alt="Logo de estudante" />
            <h1 className={styles.title}>Class Folder</h1>
            <p className={styles.subtitle}>Mantenha seus registros de aulas!</p>
            
            <form className={styles.form}>
                <input type="text" placeholder='Usuário'/>
                <input type="password" placeholder='Senha'/>

                <button type="submit">Login</button>
            </form>
            <span>Novo por aqui?<Link to="/Registration">Cadastre-se!</Link></span>
      </div>
   </div>
  );
}
