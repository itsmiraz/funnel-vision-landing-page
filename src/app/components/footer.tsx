import Logo from '@/assets/images/logo.png'
import Xicon from '@/assets/icons/xIcon.svg'
import InstaIcon from '@/assets/icons/insta.svg'
import Linkdin from '@/assets/icons/linkedin.svg'
import Image from 'next/image'


const Footer = () => {
  return (
    <div className='max-w-[1030px] mx-auto pb-[50px] px-4'>

    <div className='flex  md:flex-row gap-y-[30px] flex-col-reverse justify-between items-center'>
      <Image className='md:block hidden' src={Logo} alt='logo
      '/>
      <p className='text-[14px] -translate-x-6 font-semibold font-opensans opacity-60'>
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