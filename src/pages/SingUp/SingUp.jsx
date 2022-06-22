
import styles from '../SingIn/Login.module.css'

export function SingUp() {

  return (
   <div className={styles.content}>
        <img className={styles.loginLogo} src="../src/assets/amico.svg" alt="Logo de estudante" />

        <h1 className={styles.title}>Class Folder</h1>

        <p className={styles.subtitle}>Mantenha-se atualizado sobre os registros de aula!</p>
        
        <div className={styles.form}>
            <input type="text" placeholder='Nome'/>
            <input type="email" placeholder='Email'/>
            <input type="numbe" placeholder='CPF'/>
            <input type="password" placeholder='Senha'/>

            <button type="submit">Cadastrar</button>
        </div>
   </div>
  );
}

