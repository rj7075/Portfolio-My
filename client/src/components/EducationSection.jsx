import React from "react";

const EducationCard = [
  {
    title: "Education",
    description:
      " B.Tech in Information Technology from Ajay Kumar Garg Engineering College Ghaziabad, 2020 - 2024",
  },
  {
    title: "Expierience",
    description:
      "Software Developer Training, Infoicon Technology Private Limited 2024 - 2025 , Full Stack Developer-AssetSense Private Limited 2025 - Present",
  },
];

const EducationSection = () => {
  return (
    <section className="py-16">
      <h1 className=" py-10 text-3xl font-bold  text-center">
        Education & Expirience
      </h1>
      <div className="container mx-auto px-4 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {EducationCard.map((item, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
