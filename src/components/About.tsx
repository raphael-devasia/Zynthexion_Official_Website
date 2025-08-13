const About = () => {
  return (
    <section id="about" className="py-12 xs:py-16 sm:py-20 px-2 xs:px-4 sm:px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Who We Are Section */}
        <div className="text-center mb-10 xs:mb-16 md:mb-20">
          <h2 className="text-2xl xs:text-3xl md:text-4xl font-heading font-bold mb-6 xs:mb-8 hero-text">
            Who We Are
          </h2>
          <div className="max-w-2xl mx-auto text-base xs:text-lg text-muted-foreground leading-relaxed px-2">
            <span className="text-primary font-semibold">Zynthexion Technologies</span>, we believe in the power of innovation and the impact of technology to drive success.
            As a leading software development company, we specialize in delivering customized, top-tier digital solutions that help businesses excel and grow.
          </div>
        </div>

        {/* Process Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xs:gap-8">
          {/* Define */}
          <div className="service-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-gradient rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">01</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">Define</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our approach starts with deep research and consultation to define the project scope and set clear objectives.
              We make sure every requirement is captured for a precise project direction.
            </p>
          </div>

          {/* Design */}
          <div className="service-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-gradient rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">02</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">Design</h3>
            <p className="text-muted-foreground leading-relaxed">
              We focus on creating a seamless user experience, blending aesthetics with functionality to deliver designs that drive engagement and support your business needs.
            </p>
          </div>

          {/* Build */}
          <div className="service-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-gradient rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">03</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">Build</h3>
            <p className="text-muted-foreground leading-relaxed">
              Our experienced development team crafts robust software solutions that are both secure and scalable, ensuring high performance and reliability across platforms.
            </p>
          </div>

          {/* Launch */}
          <div className="service-card p-8 rounded-2xl text-center">
            <div className="w-16 h-16 mx-auto mb-6 bg-brand-gradient rounded-full flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-foreground">04</span>
            </div>
            <h3 className="text-xl font-heading font-bold mb-4 text-primary">Launch</h3>
            <p className="text-muted-foreground leading-relaxed">
              With thorough testing and meticulous planning, we ensure every launch is smooth and successful. From server setup to user onboarding, we cover every detail.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;