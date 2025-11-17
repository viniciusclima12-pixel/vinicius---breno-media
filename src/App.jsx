import { useState, useEffect } from "react"
import styles from "./App.module.css"

function App() {
  const [n1, setN1] = useState("")
  const [n2, setN2] = useState("")
  const [n3, setN3] = useState("")
  const [n4, setN4] = useState("")
  const [n5, setN5] = useState("")
  const [n6, setN6] = useState("")
  const [media, setMedia] = useState(null)

  useEffect(() => {
    if (n1 !== "" && n2 !== "" && n3 !== "" && n4 !== "" && n5 !== "" && n6 !== ""
    ) {
      const m = (parseFloat(n1) +  parseFloat(n2) +  parseFloat(n3) +  parseFloat(n4) + parseFloat(n5) + parseFloat(n6)) / 6
      setMedia(m.toFixed(2))
    }
  }, [n1, n2, n3, n4, n5, n6])

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Média das Notas</h1>

      <div className={styles.inputs}>
        <input type="number" placeholder="Nota 1" value={n1} onChange={(e) => setN1(e.target.value)} />
        <input type="number" placeholder="Nota 2" value={n2} onChange={(e) => setN2(e.target.value)} />
        <input type="number" placeholder="Nota 3" value={n3} onChange={(e) => setN3(e.target.value)} />
        <input type="number" placeholder="Nota 4" value={n4} onChange={(e) => setN4(e.target.value)} />
        <input type="number" placeholder="Nota 5" value={n5} onChange={(e) => setN5(e.target.value)} />
        <input type="number" placeholder="Nota 6" value={n6} onChange={(e) => setN6(e.target.value)} />
      </div>

    {media && (
        <div className={styles.result}>
          <h2>Sua média é: {media}</h2>
        </div>
      )}
    </div>
  );
}

export default App;
