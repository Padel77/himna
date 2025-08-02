"use client"

import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from "@/components/ui/carousel"
import { Item } from "../home/OurPartners"
import Image from "next/image"

export function CarouselPlugin({ partners }: { partners: Item[] }) {
  const plugin = React.useRef(
    Autoplay({ delay: 1000, stopOnInteraction: false })
  )
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full  mx-auto"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="mr-1" >
        {Array.from({ length: partners.length  }).map((_, index) => (
          <CarouselItem  key={index} className="pr-1 md:basis-1/2 lg:basis-1/4 basis-1/3">
            <div className="p-1" >
              <Card className="w-full h-full">
                <CardContent className="flex justify-center items-center">
                  <Image
                    src={partners[index].image}
                    alt={partners[index].name}
                    width={250}
                    height={250}
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    priority
                    className="object-contain"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
