'use client';
import Robot from '@/assets/image/not-found/8@2x.svg';
import ButtonComeBack from '@/components/buttons/ButtonComeBack';
// import F404 from '@/assets/image/404.svg';
import Image from 'next/image';

import { useRouter } from 'next/navigation';
export default function NotFound() {
  const router = useRouter();
  return (
    <div className='not-found'>
      <div className='not-found-left'>
        <div className='layout-left'>
          <div className='blur-ball'></div>
          <div className='blur-ball'></div>
          {/* <Image width={800} height={1000} src={image} alt='login-image' /> */}
        </div>
        <h1 className='text-not-found'>Oops...</h1>
        <h2>Page not found</h2>
        <p>This page does not exist or has been deleted</p>
        <ButtonComeBack
          onClick={() => {
            router.push('/');
          }}
        />
      </div>

      <div className='not-found-right'>
        <div className='not-found-rotate'>{/* <Image src={F404} alt='eclip' /> */}</div>
        <div className='not-found-thumb'>
          <Image src={Robot} alt='eclip' width={500} height={500} />
        </div>
      </div>
    </div>
  );
}
