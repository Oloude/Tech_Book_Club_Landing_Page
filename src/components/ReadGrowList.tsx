import checkIcon from '../assets/icon-check.svg'


type ReadListProps = {
    value : string
}

function ReadGrowList({value} : ReadListProps) {
  return (
    <div className='flex gap-[14px] items-center'>
        <div><img src={checkIcon} alt="" /></div>
        <p className='text-lgD text-neutral700 tracking-[-0.5px] leading-[1.4]'>{value}</p>
    </div>
  )
}

export default ReadGrowList