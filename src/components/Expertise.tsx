const Expertise = () => {
  return (
    <section className="py-12 xs:py-16 sm:py-20 px-2 xs:px-4 sm:px-6 bg-card/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-heading font-bold mb-6 xs:mb-8 hero-text">
            Our Expertise
          </h2>
          
          <div className="max-w-5xl mx-auto">
            <h3 className="text-xl xs:text-2xl md:text-3xl font-heading font-bold mb-6 xs:mb-8 text-foreground">
              At Zynthexion Technologies, we excel in delivering cutting-edge software solutions that transform businesses.
            </h3>
            
            <div className="text-base xs:text-lg text-muted-foreground leading-relaxed space-y-4 xs:space-y-6 px-2">
              <p>
                Our expertise spans from developing scalable enterprise systems to crafting cloud-based applications, all designed with a focus on security, reliability, and performance.
              </p>
              <p>
                We are committed to transforming unique business needs into customized software, leveraging the latest technologies like cloud computing and AI to drive efficiency and growth.
              </p>
              <p>
                At Zynthexion, we partner with you to navigate the ever-evolving tech landscape, providing solutions that accelerate your success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;