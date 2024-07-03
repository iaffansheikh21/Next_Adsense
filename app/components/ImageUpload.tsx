import React from 'react'
import Image from 'next/image'

export default function ImageUpload() {
  return (
    <div>
        <Image src={"/wp2.jpg"} alt='Ads Testing Image' width={500} height={500}></Image>
    </div>
  )
}
