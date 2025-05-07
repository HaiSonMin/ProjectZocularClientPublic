'use client';
import Errors from '@/assets/image/error/doc_robot.svg';
import ButtonComeBack from '@/components/buttons/ButtonComeBack';
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
                </div>
                <h1>Server error <span className='fount-number'>500</span></h1>
                <h2>Oops, Something&apos;s wrong</h2>
                <p>
                    Please try refreshing this page or contact us if the problem persists
                </p>
                <ButtonComeBack
                    onClick={() => {
                        router.push('/');
                    }}
                />
            </div>
            <div className='not-found-right'>
                <div className='not-found-thumb'>
                    <Image src={Errors} alt='eclip' width={550} height={550} />
                </div>
            </div>
        </div>
    );
}