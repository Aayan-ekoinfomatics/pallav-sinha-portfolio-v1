import Image from 'next/image'
import { Inter } from 'next/font/google'
import NavScreen from '@/components/global-components/NavScreen'
import logo from '../assets/icons/logo-black.svg'
import logo_white from '../assets/icons/logo_white.svg'
import { useRecoilState } from 'recoil'
import navScreenAtom from '@/recoil/navScreenAtom'
import Head from 'next/head'
import { useState } from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [navToggle, setNavToggle] = useRecoilState(navScreenAtom);

  // const [landingPageData, setLandingPageData] = useState()

  // const landingPageData = [
  //   {
  //     header: 'Colaborations',
  //     title: '',
  //   },
  // ];

  const collab_row1 = ['Netflix/Epic', 'Bhima', 'Foods', 'Glasswaaley', 'Sakurafresh'];
  const collab_row2 = ['Nuts on Wheels', 'Himitsu Labs', 'Illustrations', 'BeeMG'];
  const collab_row3 = ['Citrus Trails', 'FirstQA', 'IEA', 'Mannbhavak'];

  const exp_row1 = ['bigbasket', 'Swiggy', 'Pet Warehouse', 'NACIN'];
  const exp_row2 = ['Naivo', 'Coffee', 'HCCI', 'Flipkart'];


  return (
    <div className={`relative w-full snap-y-mandatory`}>

      <Head>
        <title>Pallav Sinha</title>
        <link rel="logo" href="/logo-black.svg" />
      </Head>


      <NavScreen />

      {/* nav logo */}
      <div className={`w-fit h-fit fixed top-[4%] right-[4%] z-[200] cursor-pointer transition-all duration-300 ease-in-out ${navToggle ? '' : 'rotate-[270deg]'}`} onClick={() => setNavToggle(!navToggle)}>
        <div className='w-[35px] h-[35px] relative'>
          <Image
            src={navToggle ? logo_white : logo}
            fill={true}
            alt="Picture of the author"
          />
        </div>
      </div>

      {/* page 1 */}
      <div className='w-full relative h-screen flex flex-col justify-center items-center snap-start-custom'>
        <div className='w-fit flex flex-col justify-center items-center'>
          <div className='w-[90px] h-[90px] relative'>
            <Image
              src={navToggle ? logo_white : logo}
              fill={true}
              alt="Picture of the author"
            />
          </div>
          <h1 className='font-austin pt-8 font-[500] text-[42px]'>Pallav Sinha</h1>
        </div>
        <div className='w-full absolute bottom-0 pb-4 flex justify-center items-center'>
          <h1 className='leading-0 font-sora text-[24px] flex gap-9 pt-2 text-gray-700 font-[500]'><span>designer</span><span>x</span><span>Illustrator</span></h1>
        </div>
      </div>


      {/* page 2 - Collaborations*/}
      <div className='h-screen snap-start-custom'>
        <div className='w-full pb-[70px] pt-[110px] flex justify-center items-center'>
          <h1 className='font-austin text-[45px]'>Collaborations</h1>
        </div>
        <div className='w-full flex flex-col items-center pt-10'>
          <h1 className='font-sora font-[600] text-[35px]'>Since <span className='bg-[#c9e76b] text- px-1 '><span aria-hidden='true'></span>2015</span><span aria-hidden='true'></span></h1>
          <h1 className='font-sora text-[27px] flex gap-9 pt-2'><span>Designer</span><span>x</span><span>Illustrator</span></h1>
          <div className='w-full max-w-[900px] pt-8'>
            <h1 className='font-sora text-center text-[20px]'>i joined here as a junior designer as I was transitioning industries; from a production
              artist to a designer. Have been working since the inception of the company, and have
              built a team over the course of 6 years and have worked with a multitude of clients.</h1>
          </div>
          <div className='w-full max-w-[1000px] flex flex-col gap-8 items-center mt-16'>
            <div className='w-full flex justify-between'>
              {
                collab_row1?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
            <div className='w-[93%] flex justify-between'>
              {
                collab_row2?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
            <div className='w-[85%] flex justify-between'>
              {
                collab_row3?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
          </div>
        </div>
      </div>


      {/* page 3 - Work & Exp */}
      <div className='h-screen snap-start-custom'>
        <div className='w-full pb-[70px] pt-[110px] flex justify-center items-center'>
          <h1 className='font-austin text-[45px]'>Works and Experience</h1>
        </div>
        <div className='w-full flex flex-col items-center pt-10'>
          <h1 className='font-sora font-[600] text-[33px]'>Clemenzie</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>May 2017 - July 2023</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>Associate<span className='bg-[#c9e76b] px-1 mx-[2px]'>Creative</span>Director</h1>
          <div className='w-full max-w-[930px] pt-8'>
            <h1 className='font-sora text-center text-[20px]'>i joined here as a junior designer as I was transitioning industries; from a production
              artist to a designer. Have been working since the inception of the company, and have
              built a team over the course of 6 years and have worked with a multitude of clients.</h1>
          </div>
          <div className='w-full max-w-[850px] flex flex-col gap-8 items-center mt-16'>
            <div className='w-full flex justify-between'>
              {
                exp_row1?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
            <div className='w-[85%] flex justify-between'>
              {
                exp_row2?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
          </div>
        </div>
      </div>


      {/* page 4 - work & exp contd.. */}
      <div className='h-screen snap-start-custom'>
        <div className='w-full flex flex-col items-center pt-28'>
          <h1 className='font-sora font-[600] text-[33px]'>Gear up</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>January - March 2017</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>Production<span className='bg-[#c9e76b] px-1 mx-[2px]'>Artist</span> | Co-founder</h1>
          <div className='w-full max-w-[930px] pt-8'>
            <h1 className='font-sora text-center text-[20px]'>a small break i took from doing jobs to start and create a mobile game development
              studio. But, as you can see from the time duration, it didnt work out. But I ended up
              making a game that went into the playstore and has over 1000+ downloads</h1>
          </div>
          {/* <div className='w-full max-w-[850px] flex flex-col gap-8 items-center mt-16'>
            <div className='w-full flex justify-between'>
              {
                exp_row1?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
            <div className='w-[85%] flex justify-between'>
              {
                exp_row2?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
          </div> */}
        </div>
        <div className='w-full flex flex-col items-center pt-28'>
          <h1 className='font-sora font-[600] text-[33px]'>Gamezale</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>January - December 2016</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>Concept<span className='bg-[#c9e76b] px-1 mx-[2px]'>Artist</span></h1>
          <div className='w-full max-w-[930px] pt-8'>
            <h1 className='font-sora text-center text-[20px]'>a startup based out of UAE, this studio focused on developing 2D/3D side scrollers for
              mobile applications. Did some work in pre production doing concept arts and
              storyboarding before eventually moving out due to disbandedment of the studio.</h1>
          </div>
        </div>
      </div>


      {/* page 5 - work & exp contd.. */}
      <div className='h-screen snap-start-custom'>
        <div className='w-full flex flex-col items-center pt-28'>
          <h1 className='font-sora font-[600] text-[33px]'>SAGE infolabs</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>December 2014 - March 2015</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>Jr. Production<span className='bg-[#c9e76b] px-1 mx-[2px]'>Artist</span></h1>
          <div className='w-full max-w-[930px] pt-8'>
            <h1 className='font-sora text-center text-[20px]'>a small break i took from doing jobs to start and create a mobile game development
              studio. But, as you can see from the time duration, it didnt work out. But I ended up
              making a game that went into the playstore and has over 1000+ downloads.</h1>
          </div>
          {/* <div className='w-full max-w-[850px] flex flex-col gap-8 items-center mt-16'>
            <div className='w-full flex justify-between'>
              {
                exp_row1?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
            <div className='w-[85%] flex justify-between'>
              {
                exp_row2?.map((data, i) => (
                  <h1 key={i} className='font-sora text-[25px] font-[600]'>{data}</h1>
                ))
              }
            </div>
          </div> */}
        </div>
        {/* <div className='w-full flex flex-col items-center pt-28'>
          <h1 className='font-sora font-[600] text-[33px]'>Gamezale</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>January - December 2016</h1>
          <h1 className='font-sora text-[25px] font-[500] pt-1'>Concept<span className='bg-[#c9e76b] px-1 mx-[2px]'>Artist</span></h1>
          <div className='w-full max-w-[930px] pt-8'>
            <h1 className='font-sora text-center text-[20px]'>a startup based out of UAE, this studio focused on developing 2D/3D side scrollers for
              mobile applications. Did some work in pre production doing concept arts and
              storyboarding before eventually moving out due to disbandedment of the studio.</h1>
          </div>
        </div> */}
      </div>


    </div>
  )
}
