import React ,{useState}from 'react';
import PageProfile from './screens/PageProfile/PageProfile'
import PageMatch from './screens/PageMatch/PageMatch';



function App() {
    const [page, setPage] = useState(1)

    const changePage1 = () =>{
      setPage(2)
    }

    const changePage2 = () =>{
      setPage(1)
    }


    const handlePage = () => {
      switch(page){
        case 1: 
          return <PageProfile switchPages={changePage1} myPage={page}/>
        case 2: 
          return <PageMatch switchPages={changePage2} myPage={page}/>
        default:
          return <PageProfile switchPages={changePage1} myPage={page}/>
      }
    }

    return (
      handlePage()
    )
  
}

export default App;
