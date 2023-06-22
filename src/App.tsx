import styles from './App.module.css'
import poweredImage from './assets/powered.png'

const App = () => {
  return (
    <div className={styles.main}>
      <header>
        <div className={styles.headerContainer}>
          <img src={poweredImage} alt="" width={150} />
        </div>

      </header>

      <div className={styles.Container}>
        <div className={styles.leftSide}>
          <h1>Calculo de IMC</h1>
          <p>O IMC(indice de massa corporal) é reconhecido pela OMS(organizaçao Mundial da Saude)
            como um padrão internacional que avalia se as pessoas,
            entre 20 e 59 anos, estão com peso ideal ou em excesso,
            em relação a sua altura.</p>
        </div>
        <input
          type="numeber"
          placeholder='Informe sua Altura. Ex : 1.50' />
       <br/>
        <input
          type="numeber"
          placeholder="Informe seu Peso. Ex : 50.3"
        />
        <br/>
        <button>Calcular</button>
        </div>
        <div className={styles.rightSide}>
''
        </div>
      </div>
    
  )
}
export default App;