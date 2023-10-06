import React from 'react';

// Sample testimonial data
const testimonialData = [
  {
    id: 1,
    name: 'Sanchit Tripathi',
    imageSrc: './src/Assets/images/sanchit.png',
    text: 'Captain',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsum repellendus voluptatibus vel incidunt modi laborum reiciendis saepe dolore ad.',
  },
  {
    id: 2,
    name: 'Prasad Vavdane',
    imageSrc: './src/Assets/images/prasad.png',
    text: 'Member',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsum repellendus voluptatibus vel incidunt modi laborum reiciendis saepe dolore ad.',
  },
  {
    id: 3,
    name: 'Ayush Singh',
    imageSrc: './src/Assets/images/ayush.png',
    text: 'Member',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsum repellendus voluptatibus vel incidunt modi laborum reiciendis saepe dolore ad.',
  },
  {
    id: 4,
    name: 'Sanskar Vishwakarma',
    imageSrc: './src/Assets/images/sanskar.png',
    text: 'Member',
    text: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis ipsum repellendus voluptatibus vel incidunt modi laborum reiciendis saepe dolore ad.',
  },
];

const Testimonials = () => {
  return (
    <div className="testimonial mt-16">
      <div className="container mx-auto ml-[25%]">
        <div className="grid grid-cols-2 md:grid-cols-2 gap-2 h-1/2 w-1/2">
          {testimonialData.map((testimonial) => (
            <div
              key={testimonial.id}
              className="col-span-1 md:col-span-1 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-500 transform hover:-translate-y-2"
            >
              <img
                src={testimonial.imageSrc}
                alt={testimonial.name}
                className="mx-auto w-32 h-32 rounded-full mt-6"
              />
              <h3 className="text-xl font-semibold text-center mt-4">{testimonial.name}</h3>
              <p className="text-gray-600 text-center p-4">{testimonial.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;