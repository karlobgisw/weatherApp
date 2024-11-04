import { motion } from "framer-motion"

type GetStartedProps = {
    setStarted: React.Dispatch<React.SetStateAction<boolean>>
}
export default function GetStarted({setStarted}:GetStartedProps) {
  return (
      <div className=' bg-[#0b131e] h-screen w-full flex items-center justify-center text-center flex-col'>
          <div className='flex items-center justify-center flex-col'>
              <motion.div animate={{ y: 10 }} transition={{ ease: "easeOut", duration: 1, repeat: Infinity, repeatType: 'reverse' }} className=' w-1/3 h-1/3 mb-10'>
                  <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 16 16">
                      <path d="M12 8a4 4 0 1 1-8 0 4 4 0 0 1 8 0M8 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 0m0 13a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 13m8-5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5M3 8a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1 0-1h2A.5.5 0 0 1 3 8m10.657-5.657a.5.5 0 0 1 0 .707l-1.414 1.415a.5.5 0 1 1-.707-.708l1.414-1.414a.5.5 0 0 1 .707 0m-9.193 9.193a.5.5 0 0 1 0 .707L3.05 13.657a.5.5 0 0 1-.707-.707l1.414-1.414a.5.5 0 0 1 .707 0m9.193 2.121a.5.5 0 0 1-.707 0l-1.414-1.414a.5.5 0 0 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .707M4.464 4.465a.5.5 0 0 1-.707 0L2.343 3.05a.5.5 0 1 1 .707-.707l1.414 1.414a.5.5 0 0 1 0 .708" />
                  </svg>
              </motion.div>
              <div className='flex flex-col gap-2'>
                  <h1 className=' text-white font-extrabold text-3xl'>Weather with Karlo</h1>
                  <h3 className=' text-[#8e959d]'>Weather App</h3>
              </div>
              <a onClick={() => setStarted(false)} className='bg-[#0095ff] p-3 text-white rounded-3xl text-xs mt-7 cursor-pointer font-bold'>Get Started</a>
          </div>
      </div>
  )
}
