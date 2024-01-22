import Image from "next/image";

const page = () => {
  return (
    <section className="container">
      <div className="flex gap-12 flex-col mx-auto max-w-xl py-16">
        <div>
          <h1 className="font-heading text-h1 mb-2">
            <span>About</span>
            <span className="text-primary-500">Us</span>
          </h1>
          <p className="text-h3">
            Welcome to TechHub, your premier SaaS solution for managing your online
            lists. We empower you to organize and control your data
            effortlessly.
          </p>
        </div>
        <div>
          <h2 className="font-heading text-h1 mb-2">
            <span>Our</span>
            <span className="text-primary-500">Mission</span>
          </h2>
          <p className="text-h3">
            At TechHub, our mission is to provide a seamless platform for
            individuals and businesses to create, manage, and explore online
            lists of websites, products, services etc. We believe in simplifying data management to fuel
            innovation and growth.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-h1 mb-2">
            <span>Why</span>
            <span className="text-primary-500">Us?</span>
          </h2>
          <ul className="list-disc list-inside text-h3 marker:text-primary-500">
            <li>Intuitive and user-friendly interface</li>
            <li>Flexible customization options</li>
            <li>Robust security measures to protect your data</li>
            <li>Scalable solutions for businesses of all sizes</li>
            <li>24/7 customer support</li>
          </ul>
        </div>

        <div>
          <h2 className="font-heading text-h1 mb-2">
            <span>Our</span>
            <span className="text-primary-500">Team</span>
          </h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-center">
              <Image
                src="https://picsum.photos/100/100"
                alt="Team Member 1"
                className="rounded-full mr-4"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-lg font-semibold">John Doe</h3>
                <p className="text-gray-600">Founder & CEO</p>
              </div>
            </div>
            <div className="flex items-center">
              <Image
                src="https://picsum.photos/100/101"
                alt="Team Member 2"
                className="rounded-full mr-4"
                width={100}
                height={100}
              />
              <div>
                <h3 className="text-lg font-semibold">Johann De La Cruz</h3>
                <p className="text-gray-600">Programmer & UI/UX Designer</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
