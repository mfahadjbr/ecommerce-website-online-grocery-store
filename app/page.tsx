import Slider from './_components/Slider';
import Category from './_components/Category';
import ProductList from './_components/ProductList';
import Footer from './_components/Footer';
import Image from 'next/image';
export default function Home() {
  return (
     <div>
      {/*slider*/}
      <div className="p-5 md:p-12 px-16">
     <Slider/>
     </div>
     {/*categories*/}
     <div className='p-7'>
     <Category/>
     </div>
     {/*product list*/}
     <div className='p-7'>
     <ProductList/>
     </div>
     {/*bannar*/}
     <Image src={'/banner.png'} alt='banner' width={1000} height={300} className='w-full h-[400px] object-contain mb-5'/>
     {/*Footer*/}
     <div>
     <Footer/>
     </div>
   </div>
  );
}
