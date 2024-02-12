import { useContext, useEffect } from "react"
import Blog from "./components/Blogs"
import Header from "./components/Header"
import Pagination from "./components/Pagination"
import { AppContext } from "./context/AppContext"


function App() {
const {fetchblogposts}=useContext(AppContext);
useEffect(()=>{
  fetchblogposts();
},[])
  return (
    <div>
     <Header></Header>
      <Blog></Blog>
      <Pagination></Pagination>
    </div>

  )
}

export default App
