import React from 'react'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"
import Image from 'next/image'
export default function Slider() {
  return (
    <div className=''>
      <Carousel>
  <CarouselContent>
    <CarouselItem>
        <Image src={'/slider1.png'} alt="milk" width={1000} height={400} className={'w-full md:h-[400px] h-[200px] object-fill rounded-2xl'}/>
    </CarouselItem>
    <CarouselItem>
    <Image src={'/slider3.jpg'} alt="milk" width={1000} height={400} className={'w-full md:h-[400px] h-[200px] object-fill rounded-2xl'}/>
    </CarouselItem>
    <CarouselItem>
    <Image src={'/slider4.png'} alt="milk" width={1000} height={400} className={'w-full md:h-[400px] h-[200px] object-fill rounded-2xl'}/>
    </CarouselItem>
    <CarouselItem>
    <Image src={'/slider5.jpg'} alt="milk" width={1000} height={400} className={'w-full md:h-[400px] h-[200px] object-fill rounded-2xl'}/>
    </CarouselItem>
  </CarouselContent>
  <CarouselPrevious />
  <CarouselNext />
</Carousel>

    </div>
  )
}
