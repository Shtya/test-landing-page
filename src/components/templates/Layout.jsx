import React from 'react'
import TopNav from './TopNav'
import Translate from '../atoms/Translate'
import Carousel from '../atoms/Carousel'
import Navbar from './Navbar'

export default function Layout({children}) {
  return (
	<div className=' main relative container bg-[#ffffff] h-screen overflow-auto ' >
		<TopNav />
		<Carousel />
		<Navbar />

		{children}

	</div>
  )
}









