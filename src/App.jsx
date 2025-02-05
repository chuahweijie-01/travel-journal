import './App.css';
import Entry from './components/Entry';
import Header from './components/Header';
import data from './data'

export default function App() {

  const entryElement = data.map(x => {
    return (
      <Entry
        key={x.id}
        entry={x}
      />
    )
  })


  return (
    <>
      <Header />
      <main className="container">
        {entryElement}
      </main>
    </>
  )
}
