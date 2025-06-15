import React from 'react'

export default function ContactMap() {
  return (
    <div className="md:mb-16 mb-8">
        <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7720198625284!2d34.12184897579379!3d0.2760286997212558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177fbf0c11a2bd95%3A0x7f3a9b1b4e7114b3!2sTrinity%20Baptist%20Church%20Funyula!5e0!3m2!1ssw!2ske!4v1749968766161!5m2!1ssw!2ske" 
            className="w-full md:h-[450px] h-[300px] border border-gray-300 shadow-md rounded-lg"
            allowFullScreen 
            loading="eager"
            style={{border:0}}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  )
}
