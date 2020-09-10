import React ,{useState}from 'react';
import PageProfile from './screens/PageProfile/PageProfile'
import PageMatch from './screens/PageMatch/PageMatch';



function App() {
    const [page, setPage] = useState(1)

    const handlePage = () => {
      switch(page){
        case 1: 
          return <PageProfile switchPages={setPage}/>
        case 2: 
          return <PageMatch switchPages={setPage}/>
        default:
          return <PageProfile switchPages={setPage}/>
      }
    }

    return (
      handlePage()
    )
  
}

export default App;
