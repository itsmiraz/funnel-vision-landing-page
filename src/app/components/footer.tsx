import Logo from '@/assets/images/logo.png'
import Xicon from '@/assets/icons/xIcon.svg'
import InstaIcon from '@/assets/icons/insta.svg'
import Linkdin from '@/assets/icons/linkedin.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='pb-[50px] px-10'>

    <div className='flex justify-between items-center'>
      <Image src={Logo} alt='logo
      '/>
      <p className='text-[14px] font-semibold font-opensans opacity-60'>
      Copyright@Funnel Vision-2024
      </p>
      <div className='flex gap-x-[14px]'>
        <Xicon/>
        <Linkdin/>
        <InstaIcon/>
      </div>
    </div>


    </div>
  )
}

export default Footer