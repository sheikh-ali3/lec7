import Link from "next/link";
import Image from "next/image";
import React from "react";

function Card({ image, title, date, location, buttonText, link }) {
  return (
    <div className="text-black flex items-center bg-white rounded-lg shadow-lg overflow-hidden w-full max-w-4xl mx-auto mb-8">
      <Image
        src={image}
        width={200}
        height={200}
        alt={title}
        className={"object-cover  rounded-lg"}
        style={{display: 'block', width: '40%', height: '220px'}}
      />

      <div className="w-1/2 p-8">
        <h3 className="text-2xl font-bold mb-3">{title}</h3>
        <p className="text-gray-600 mb-4">{date}</p>
        <p className="text-gray-500 mb-6">{location}</p>
        {console.log(link)}
        <Link
          href={link}
          className="bg-green-500 text-white px-5 py-2 rounded-lg font-semibold hover:bg-green-600 transition duration-200"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
}

export default Card;