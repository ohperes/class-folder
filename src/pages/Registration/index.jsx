
import { useState } from 'react';
import styles from './Registration.module.css'
import axios from 'axios';

export function Registration() {

  const[name, setName] = useState('');
  const[email, setEmail] = useState('');
  const[cpf, setCpf] = useState('');
  const[password, setPassword] = useState('');

 

  function handleName(event) {
    setName(event.target.value);
  }

  function handleEmail(event) {
    setEmail(event.target.value);
  }

  function handleCpf(event) {
    setCpf(event.target.value);
  }

  function handlePassword(event) {
    setPassword(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    
     const user = {
      name: name,
      email: email,
      cpf: cpf,
      password: password
    };

    axios.post('http://localhost:3005/setUser', { user })
      .then(res => {
        console.log(res);
        console.log(res.data);
      })
  }


  return (
    <div className={styles.container}>
      <div className={styles.content}>
            <img className={styles.loginLogo} src="../src/assets/amico.svg" alt="Logo de estudante" />

            <h1 className={styles.title}>Class Folder</h1>

            <p className={styles.subtitle}>Mantenha-se atualizado sobre os registros de aula!</p>
            
            <form name='formRegistration' onSubmit={handleSubmit} className={styles.form}>
                <input name="name" onChange={handleName} type="text" placeholder='Nome'/>
                <input name="email" onChange={handleEmail} type="email" placeholder='Email'/>
                <input name="cpf" onChange={handleCpf} type="numbe" placeholder='CPF'/>
                <input name="password" onChange={handlePassword} type="password" placeholder='Senha'/>

                <button type="submit">Cadastrar</button>
            </form>
      </div>
    </div>
  );
}

