export default function CurrentSection() {
  return (
    <>
      <div className='fixed z-30 top-0 left-0 w-full h-16 bg-secondary -translate-y-16 transition'></div>
      <div className='fixed z-50 top-0 left-0 w-full h-16 -translate-y-16 transition'>
        <div className='absolute top-0 w-full h-11 bg-gradient-radial from-primary to-transparent'></div>
        <div className='absolute bottom-0 w-full h-11 bg-gradient-radial from-transparent to-primary'></div>
        <div className=''></div>
      </div>
      <div className='fixed z-30 top-0 left-0 w-full h-8 mt-16 bg-gradient-conic from-primary to-transparent transition -translate-y-24'></div>
    </>
  );
}
