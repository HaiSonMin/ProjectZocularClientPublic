'use client'

import React from 'react'
import {Facebook, Instagram, Youtube} from 'lucide-react'

const Footer = () => {
	return (
		<footer className="bg-orange-500 text-white py-8">
			<div className="container mx-auto px-4 md:px-12">
				<div className="flex flex-col md:flex-row justify-between items-center">
					{/* Logo */}
					<div className="text-2xl font-bold">Zocular®</div>
					
					{/* Navigation */}
					<nav className="flex space-x-6 mt-4 md:mt-0">
						<a href="#" className="hover:underline">
							Home
						</a>
						<a href="#" className="hover:underline">
							Shop
						</a>
						<a href="#" className="hover:underline">
							Product
						</a>
						<a href="#" className="hover:underline">
							Blog
						</a>
						<a href="#" className="hover:underline">
							Contact Us
						</a>
					</nav>
				</div>
				
				{/* Line Divider */}
				<hr className="my-6 border-t border-white/50"/>
				
				<div className="flex flex-col md:flex-row justify-between items-center text-sm">
					{/* Copyright */}
					<p>© 2025 Zocular. All rights reserved</p>
					
					{/* Privacy Policy & Terms */}
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a href="#" className="hover:underline">
							Privacy Policy
						</a>
						<a href="#" className="hover:underline font-semibold">
							Terms of Use
						</a>
					</div>
					
					{/* Social Icons */}
					<div className="flex space-x-4 mt-4 md:mt-0">
						<a href="#" className="hover:text-gray-200 transition-all">
							<Instagram size={20}/>
						</a>
						<a href="#" className="hover:text-gray-200 transition-all">
							<Facebook size={20}/>
						</a>
						<a href="#" className="hover:text-gray-200 transition-all">
							<Youtube size={20}/>
						</a>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
