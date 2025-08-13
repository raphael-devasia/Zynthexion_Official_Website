import { Smartphone, Globe, Code, Palette } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "App Development",
      description: "At Zynthexion Technologies, we create intuitive and robust mobile applications that provide seamless experiences across platforms. Whether you're looking to develop apps for iOS, Android, or cross-platform solutions, our team builds scalable and secure applications tailored to meet your business goals. We focus on user engagement, performance, and security to deliver apps that excel in today's competitive digital landscape."
    },
    {
      icon: <Globe className="w-8 h-8" />,
      title: "Web Development",
      description: "Our web development services empower businesses to create dynamic, responsive, and engaging websites. From simple content management systems to complex web applications, we design and build web platforms that are fast, secure, and scalable. Our expertise in modern technologies ensures your website is optimized for both performance and user experience, providing your customers with a smooth and intuitive journey."
    },
    {
      icon: <Code className="w-8 h-8" />,
      title: "Frontend/Backend Development",
      description: "Our expertise in frontend and backend development allows us to build comprehensive and well-structured applications. On the frontend, we create sleek and responsive user interfaces that bring your brand's vision to life. On the backend, we ensure a solid infrastructure that handles your business logic, databases, and APIs securely and efficiently. Together, our frontend and backend solutions work in harmony to deliver a full-stack experience that supports your business operations smoothly."
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "UI/UX Design",
      description: "We believe great design is at the heart of every successful digital product. Our UI/UX design team focuses on crafting engaging, intuitive, and aesthetically pleasing interfaces that offer seamless interactions for users. By conducting thorough user research and employing best design practices, we ensure that your application or website not only looks great but also provides an unparalleled user experience."
    }
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 hero-text">
            Our Services
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 xs:gap-8 w-full mx-auto max-w-xl md:max-w-none md:mx-0">
          {services.map((service, index) => (
            <div key={index} className="service-card p-5 xs:p-6 md:p-8 rounded-2xl mx-auto w-full">
              <div className="flex items-center mb-6">
                <div className="w-16 h-16 bg-brand-gradient rounded-xl flex items-center justify-center mr-4 glow-effect">
                  <div className="text-primary-foreground">
                    {service.icon}
                  </div>
                </div>
                <h3 className="text-2xl font-heading font-bold text-primary">
                  {service.title}
                </h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;