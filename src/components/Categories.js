import React, { useEffect, useState } from 'react'
import categoryData from 'api/categories.json'
import Category from './ui/Category'
import Title from './ui/Title'
function Categories() {
  const [categories,setCategories] = useState([])

  

  useEffect(()=>{
      // bu component calıstıgında bir kereye mahsus apiye istek atmak istedigmizde useEffect calısacak.
     
      // setTimeout(()=> setCategories(categoryData),1000)
      setCategories(categoryData)
  },[])
  return (
    <div className='bg-white py-6'>
      <div className='container mx-auto'>
        <Title children="Kategoriler"/>
        <div className='grid grid-cols-4 md:grid-cols-6 lg:grid-cols-8 xl:grid-cols-9 2xl:grid-cols-10 '>
          {/* {!categories.length && 'Yükleniyor...'} */}
            {
              categories && categories.map((category,index)=><Category key={index} category={category}/>)
            }
        </div>
      </div>
    </div>
  )
}

export default Categories