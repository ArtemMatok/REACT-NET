

import { Outlet } from 'react-router'
import { Header } from './Components/index'
import { useEffect } from 'react'
import { GetCategoryWithFullProduct } from './Services/Category'


function App() {
  // useEffect(()=>{
  //   const getAllCategories = async() => {
  //     await GetCategoryWithFullProduct()
  //       .then((res) => {
  //         if(res){
  //           localStorage.setItem("categories", JSON.stringify(res));
  //         }
  //         else{
  //           console.log("error");
  //         }
  //       })
  //   }
  //   getAllCategories();
  // },[])
  return (
    <main className='min-h-screen'>
      <Header />
      <Outlet />
    </main>
  )
}

export default App
