import React from 'react';

function ServiceItem({ title, icon, description }) {
  return (
    <div className="bg-black p-5 hover:-translate-y-2 transform transition66 rounded-md">
      <div className="text-white w-12 h-12 mb-4">{icon}</div>
      <h1 className="font-semibold text-lg text-white mb-1">{title}</h1>
      <p className="text-md text-slate-100">{description}</p>
    </div>
  );
}

export default ServiceItem;
