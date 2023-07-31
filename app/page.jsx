import Image from 'next/image'
import Link from 'next/link'
import people from 'public/people.jpg'
import { HiMusicNote } from 'react-icons/hi'

export default function Home() {


  return (
    <div className='flex justify-center items-center h-screen'>
      <div className='bg-white border-2 sm:w-[400px] sm:h-[600px] w-[350px] h-[570px] text-black rounded-2xl 
      flex flex-col  gap-5 shadow-lg shadow-blue-500/40'>
        <Image src={people} alt='people' className='rounded-t-2xl' />
        <div className='flex flex-col sm:mx-6 mx-5 gap-5 '>
          <div className='sm:mx-10 mx-6'>
            <div className='flex flex-col justify-center items-center gap-5'>
              <h1 className='mt-3 text-2xl font-bold'>Order Summary</h1>
              <span className='text-slate-500 text-center text-sm'>You can now listen to millions of songs
                <br />audiobooks, and podcasts on any device
                <br />anywhere you like!
              </span>
            </div>
            <div className='flex flex-row items-center sm:mt-10 mt-10'>
              <div className=' bg-slate-200 w-[48px] h-[48px] rounded-full flex items-center  justify-center'>
                <HiMusicNote size={20} className='text-slate-500' />
              </div>
              <div className='ml-3 '>
                <h1 className='font-bold'>Annual Plan</h1>
                <h1 className='text-slate-500'>$59.99/year</h1>
              </div>
              <div className='ml-auto'>
                <Link href='http://localhost:3000/' className='text-violet-800 hover:border-none hover:text-violet-400
                font-bold text-sm border-b-2 border-violet-600'>Change</Link>
              </div>
            </div>
          </div>
          <div className='mt-7 flex flex-col gap-6'>
            <button className='bg-blue-700 hover:bg-violet-400 h-[50px] text-white rounded-2xl 
            shadow-lg shadow-blue-500/40'>Proceed to Payment</button>
            <button className='text-slate-500 hover:text-slate-800 font-bold text-sm'>Cancel Order</button>
          </div>
        </div>
      </div>
    </div>


  )
}
