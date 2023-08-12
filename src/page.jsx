import React,{useState} from 'react'

function Page() {
const [selectplan,setselectplan]=useState(null);
const [price,setprice]=useState(0);
const [discount,setdiscount]=useState(0);
const actualprice=18500;
const plans=[
  {months:12,price:99,discount:actualprice-99},
  {months:12,price:179,discount:actualprice-179},
  {months:6,price:149,discount:(actualprice/2)-149},
  {months:3,price:99,discount:(actualprice/4)-99}
]
function handleclick(index){
  setselectplan(index);
  setprice((plans[index].price));
  setdiscount((plans[index].discount));
}
  return (
    <div className="relative bg-gray-800  w-full h-[1008px] overflow-hidden shrink-0 text-darkslategray font-roboto">
        <img
          className=" absolute top-[2px] left-[0px] w-full h-[1008px] object-cover"
          alt=""
          src="/back-ground@2x.png"
        />
        <div className='flex flex-row justify-between'>
        <div className="absolute top-[60px] left-[100px] flex flex-col gap-[40px] 
        text-left text-13xl text-white">
          <div className="self-stretch flex flex-row items-center justify-start">
              <div className="text-5xl p-6 flex-1 relative tracking-[-0.01em] leading-[125%] font-semibold">
                Access curated courses worth<br/>
              <span className='text-red-600 font-bold line-through '>₹18,500 </span>
              <span>at just<span className='text-blue-600'> ₹99 </span> 
               per year!</span>
              </div>
            </div>
            <div className=' ml-4 flex flex-row'>
              <img className='h-12 w-12 mr-12' src="/group-20.svg"></img>
              <p className='text-2xl font-semibold font-sans'><span className='text-blue-600'>100+ </span>Job relevant courses</p>
            </div>
            <div className=' ml-4  flex flex-row'>
              <img className='h-12 w-12  mr-12' src="/group-19.svg"></img>
              <p className='text-2xl font-semibold font-sans'><span className='text-blue-600'>20,000+ </span>Hours of content</p>
            </div>
            <div className='  ml-4  flex flex-row'>
              <img className='h-12 w-12 mr-12' src="/vector.svg"></img>
              <p className='text-2xl font-semibold font-sans'><span className='text-blue-600'>Exclusive </span>webinar access</p>
            </div>
            <div className='  ml-4  flex flex-row'>
              <img className=' h-12 w-12 mr-12' src="/group-17.svg"></img>
              <p className='text-2xl font-semibold font-sans'>Scholarship worth <span className='text-blue-600'>₹94,500</span></p>
            </div>
            <div className=' ml-4 flex flex-row'>
              <img className='h-12 w-12 mr-12' src="/vector1.svg"></img>
              <p className='text-2xl font-semibold font-sans'><span className='text-blue-600'>Ad Free</span> learning experience</p>
            </div>
        </div>
        <div className="absolute top-[100px] left-[850px] rounded-lg bg-white w-[520px]  flex flex-col py-8 px-4 
        box-border " >
            <div className=" w-full flex flex-row justify-around">
            <div className='flex flex-col'>
            <button className='rounded-full h-12 w-12 bg-blue-500 font-bold text-white text-lg'>1</button> 
            <p>Sign Up</p>
            </div>
            <div className='flex flex-col'>
            <button className='rounded-full h-12 w-12 text-lg font-bold bg-blue-500 text-white'>2</button> 
            <p>Subscribe</p>
            </div>
            </div>
            <div className='text-center m-4 text-2xl font-bold text-gray-700'>Select your subscription plan</div>
            {plans.map((plan,index)=>{
              return(
              <div key={index} 
              onClick={()=>handleclick(index)} className={`rounded-lg p-4 mb-4 
              ${selectplan===index?'bg-gray-100':'bg-white'}
              ${selectplan===index?'border-2 border-solid border-green-500':'border-[2px] border-solid border-silver'} 
              border-[2px] border-solid border-silver w-full`}>
            <div className='flex flex-row  text-sm font-bold text-gray-700'>
              <img src={`${selectplan===index?'/radio-button1.svg':'/radio-button.svg'}`} className='mr-2'></img>
              <p className=' text-md mr-32 mt-3'>{plan.months} Months Subscription</p>
              <div className='ml-10 flex flex-col'>
              <p className='mt-2'>Total ₹{plan.price}</p>
              <p className='ml-5 text-gray-400'>₹{Math.round(plan.price/plan.months)} /mo</p>
              </div>
              </div>
            </div>)
          })}
            <p className='border-b-2 border-solid border-silver'></p>
            <div className='flex flex-row justify-between'>
            <div className='text-lg mb-2 font-medium'>Subscription Fee</div>
            <p className='font-semibold mr-2' >₹18,500</p>
            </div>
            <div className='text-red-700 rounded-md w-full border-solid border-red-700 border-2 
            [background:linear-gradient(135deg,_rgba(222,_67,_19,_0.2),_rgba(222,_67,_19,_0.2)_0.75%,_rgba(222,_67,_19,_0.2)_2.92%,_rgba(222,_68,_20,_0.2)_6.37%,_rgba(223,_69,_21,_0.2)_10.97%,_rgba(223,_72,_22,_0.2)_16.59%,_rgba(224,_75,_24,_0.2)_23.1%,_rgba(225,_80,_27,_0.2)_30.37%,_rgba(227,_86,_31,_0.2)_38.27%,_rgba(229,_94,_36,_0.2)_46.66%,_rgba(231,_104,_43,_0.2)_55.41%,_rgba(235,_117,_51,_0.2)_64.39%,_rgba(238,_132,_60,_0.2)_73.47%,_rgba(243,_149,_71,_0.2)_82.52%,_rgba(248,_169,_84,_0.2)_91.41%,_rgba(254,_193,_99,_0.2))]'>
              <div className='flex flex-row justify-between'>
              <div className='flex flex-col'>
              <p className='text-lg font-semibold pl-3 pt-2'>Limited time offer</p>
              <div className='flex flex-row pb-2'>
            <img src="/icon-clock.svg" className='pl-3 pt-1'></img>
            <p className='text-red-500 pl-2'> Offer valid till 25th March 2023</p>
            </div>
            </div>
              <p className='text-black p-3 font-semibold'>-₹{discount}</p>
            </div>
            </div>
            <div className=' mt-2 ml-2 flex flex-row justify-between'>
            <p>
            <span className='font-semibold'>Total </span>
            {`Incl. of 18% GST`}
            </p>
              <p className='text-2xl font-semibold'>₹{price}</p>
            </div>
            <div className=' mt-8 flex flex-row'>
            <button className='border-2 bg-gray-200 h-14 text-sm text-red-500 font-semibold 
            border-solid border-red-500 rounded-sm p-2 w-[250px] mr-6'>
            CANCEL</button>
            <button className='border-2 text-sm h-14
             font-semibold bg-green-600 text-white rounded-sm p-2 w-[250px]'>PROCEED TO PAY</button>
            </div>
            <img src="/razorpay.png" className='h-12 w-28 mt-4 '></img>
            </div>
            </div>
            </div>
            )
            }
export default Page;