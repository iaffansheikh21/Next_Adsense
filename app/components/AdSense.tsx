import Script from 'next/script';
import React from 'react'

type AdsenseTypes = {
    pId: string;
}

const AdSense = ({ pId }: AdsenseTypes) => {
  return (
    <Script
        async
        src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4409372479209068`}
        crossOrigin='anonymous'
        strategy='afterInteractive'
    />
  )
}

export default AdSense