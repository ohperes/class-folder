
import { SingUp } from '../SingUp/SingUp';
import styles from './Login.module.css';

export function Login() {

  return (
   <div className={styles.content}>
        <img className={styles.loginLogo} src="../src/assets/amico.svg" alt="Logo de estudante" />
        <h1 className={styles.title}>Class Folder</h1>
        <p className={styles.subtitle}>Mantenha seus registros de aulas!</p>
        
        <div className={styles.form}>
            <input type="text" placeholder='Usuário'/>
            <input type="password" placeholder='Senha'/>

            <button type="submit">Login</button>
        </div>
        <SingUp className={styles.signUp}> Novo por aqui? Cadastre-se!</SingUp>
   </div>
  );
}

