import navScreenAtom from '@/recoil/NavScreenAtom';
import React, { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import logo from '../../assets/icons/logo-black.svg'

const NavScreen = () => {

    const [navToggle, setNavToggle] = useRecoilState(navScreenAtom);

    useEffect(() => {
        // console.log(navToggle)
        
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

  return (
    <div className={`fixed right-0 h-screen bg-[#1a1a1a] transition-all duration-300 ease-in-out z-[150] ${navToggle ? 'w-full' : 'w-0'}`}>
        
    </div>
  )
}

export default NavScreen