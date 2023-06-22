import React from 'react';

import Services from '../pages/data/services';
import ServicesItem from './ServiceItem';

function ServicesSection() {
  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        {Services.map((service) => (
          <ServicesItem
            key={service.title}
            title={service.title}
            icon={service.icon}
            description={service.description}
          ></ServicesItem>
        ))}
      </div>
    </div>
  );
}

export default ServicesSection;
