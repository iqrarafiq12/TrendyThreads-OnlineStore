/* eslint-disable import/no-anonymous-default-export */
import React from 'react';
import { BsBoxes } from 'react-icons/bs';
import { CiChat1 } from 'react-icons/ci';
import { BiShoppingBag } from 'react-icons/bi';

export default [
  {
    title: 'Gift Boxes',
    icon: <BsBoxes className="w-full h-full" />,
    description:
      'Instead of a traditional gift box, you could opt for a personalized shopping bag. Look for companies that offer custom-printed shopping bags with the recipients name, initials, or a unique design. This way, the bag itself becomes a gift and can be used for future shopping trips.',
  },
  {
    title: 'ChatBot',
    icon: <CiChat1 className="w-full h-full" />,
    description:
      'Our chat bot analyzes your preferences, past purchases, and browsing history to provide tailored product recommendations. Whether youre looking for clothing, electronics, home decor, or any other item, our bot will suggest options that match your style and needs.',
  },
  {
    title: 'Web Development',
    icon: <BiShoppingBag className="w-full h-full" />,
    description:
      ' Explore our extensive catalog of products from a wide range of categories. From fashion and electronics to home essentials and more, youll find an array of options to suit your needs. Our intuitive search and filtering functions make it easy to navigate and find exactly what youre looking for.',
  },
];
