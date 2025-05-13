'use client';

import React, {useState, useEffect} from 'react';
import Image from 'next/image';
import {motion, AnimatePresence} from 'framer-motion';

const EXPIRY_TIME = new Date().getTime() + 2 * 24 * 60 * 60 * 1000;
const STORAGE_KEY = 'promo-banner-dismissed';

const CountdownItem: React.FC<{ value: number; label: string }> = ({
	                                                                   value,
	                                                                   label,
                                                                   }) => (
	<motion.div
		className='bg-white p-2 rounded-md text-center w-16'
		initial={{scale: 0.9}}
		animate={{scale: 1}}
		transition={{duration: 0.3}}
		key={value}
	>
		<p className='text-lg font-bold'>{value.toString().padStart(2, '0')}</p>
		<span className='text-xs text-gray-500'>{label}</span>
	</motion.div>
);

const PromoBanner: React.FC<{ onClose: () => void }> = ({onClose}) => {
	const [timeLeft, setTimeLeft] = useState<number>(
		EXPIRY_TIME - new Date().getTime()
	);
	
	useEffect(() => {
		if (timeLeft <= 0) return;
		
		const interval = setInterval(() => {
			setTimeLeft((prev) => (prev <= 1000 ? 0 : prev - 1000));
		}, 1000);
		
		return () => clearInterval(interval);
	}, [timeLeft]);
	
	const formatTime = (ms: number) => {
		const totalSeconds = Math.floor(ms / 1000);
		return {
			days: Math.floor(totalSeconds / 86400),
			hours: Math.floor((totalSeconds % 86400) / 3600),
			minutes: Math.floor((totalSeconds % 3600) / 60),
			seconds: totalSeconds % 60,
		};
	};
	
	const {days, hours, minutes, seconds} = formatTime(timeLeft);
	
	return (
		<motion.div
			className='fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50'
			initial={{opacity: 0}}
			animate={{opacity: 1}}
			exit={{opacity: 0}}
			transition={{duration: 0.3}}
		>
			<motion.div
				className='relative bg-[#F5D3B2] p-4 md:p-6 rounded-lg shadow-lg max-w-3xl w-[90%] md:w-full grid grid-cols-1 md:grid-cols-2 gap-4 items-center'
				initial={{scale: 0.9, opacity: 0}}
				animate={{scale: 1, opacity: 1}}
				exit={{scale: 0.9, opacity: 0}}
				transition={{duration: 0.3}}
			>
				<div className='flex justify-center'>
					<Image
						src='/images/home/bannerAd.png'
						alt='Promotion'
						width={250}
						height={250}
						className='object-contain w-full max-w-[180px] md:max-w-[250px]'
					/>
				</div>
				
				<div className='flex flex-col items-center md:items-start text-center md:text-left space-y-2'>
					<p className='text-sm font-semibold text-gray-700'>PROMOTION</p>
					<h2 className='text-2xl md:text-3xl font-bold text-black'>
						Hurry up! 40% OFF
					</h2>
					<p className='text-sm text-gray-600'>Offer expires in:</p>
					
					<div className='grid grid-cols-4 gap-2 mt-2'>
						{[
							{value: days, label: 'Days'},
							{value: hours, label: 'Hours'},
							{value: minutes, label: 'Minutes'},
							{value: seconds, label: 'Seconds'},
						].map((item, index) => (
							<CountdownItem
								key={index}
								value={item.value}
								label={item.label}
							/>
						))}
					</div>
					
					<motion.button
						className='mt-4 bg-black text-white px-6 py-2 rounded-md'
						whileHover={{scale: 1.05}}
						whileTap={{scale: 0.95}}
						transition={{duration: 0.2}}
					>
						Shop now
					</motion.button>
				</div>
				
				<motion.button
					className='absolute top-3 right-3 text-black text-base'
					onClick={onClose}
					whileHover={{scale: 1.2, rotate: 90}}
					transition={{duration: 0.2}}
					aria-label='Close promotion banner'
				>
					❌
				</motion.button>
			</motion.div>
		</motion.div>
	);
};

const SaleButton: React.FC = () => {
	const [isBannerVisible, setIsBannerVisible] = useState<boolean>(false);
	
	useEffect(() => {
		if (typeof window !== 'undefined') {
			const dismissed = localStorage.getItem(STORAGE_KEY);
			setIsBannerVisible(dismissed !== 'true');
		}
	}, []);
	
	const closeBanner = () => {
		localStorage.setItem(STORAGE_KEY, 'true');
		setIsBannerVisible(false);
	};
	
	return (
		<>
			<AnimatePresence>
				{isBannerVisible && <PromoBanner onClose={closeBanner}/>}
			</AnimatePresence>
			
			<motion.button
				className='fixed right-[-47px] top-1/2 transform -translate-y-1/2 bg-white text-black shadow-lg px-4 py-2 rounded-l-lg z-20 text-sm font-bold'
				initial={{rotate: -90}}
				animate={{x: [0, 5, 0]}}
				transition={{repeat: Infinity, duration: 1.5}}
				whileHover={{x: 0, scale: 1.05}}
				onClick={() => setIsBannerVisible(true)}
			>
				GET 20% OFF
			</motion.button>
		</>
	);
};

export default SaleButton;
