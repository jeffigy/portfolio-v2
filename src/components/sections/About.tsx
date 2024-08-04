import { motion } from "framer-motion";
import Section from "../ui/Section";

const About = () => {
  return (
    <Section id="about" title="About" className="">
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.175 }}
        className="w-full max-w-screen-md space-y-5"
      >
        <p className="text-justify text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi at
          laoreet lectus, vitae eleifend tortor. Nam quis eleifend nisi. Aenean
          malesuada laoreet volutpat. Donec pretium nisi in neque dapibus, et
          porta nisi finibus. Duis ac lacus quam. Nullam mattis eros vitae lorem
          accumsan sollicitudin. Mauris quis nibh vel lacus suscipit faucibus in
          finibus ipsum. Integer placerat diam odio, vitae ultricies velit
          malesuada a. Vivamus et maximus tellus, eu sagittis est. Duis
          venenatis pulvinar ligula, eleifend luctus elit sagittis sed. Cras sed
          dui felis. Aenean lobortis dolor enim, a consectetur turpis tempor
          fringilla.
        </p>
        <p className="text-justify text-lg">
          Ut pulvinar vel mi ut convallis. Nunc hendrerit sit amet nulla id
          mollis. Mauris egestas velit velit, nec eleifend odio eleifend eu. Sed
          euismod justo odio, quis dignissim nulla ullamcorper sit amet. Aenean
          in sapien nec dui fermentum pellentesque. Etiam interdum turpis
          consectetur, dignissim urna non, pharetra neque. Proin ac turpis nec
          urna accumsan ornare. Suspendisse facilisis egestas augue, non laoreet
          libero porttitor in. Aliquam a risus non libero dictum placerat.
        </p>
        <p className="text-justify text-lg">
          Class aptent taciti sociosqu ad litora torquent per conubia nostra,
          per inceptos himenaeos. Nam tempus, eros non vulputate tincidunt, urna
          leo lacinia velit, eu dignissim magna nisi ut mauris. Phasellus at
          libero nec elit vestibulum rhoncus. Duis ac rhoncus ex, ultricies
          aliquet justo. In ac malesuada massa. Aliquam rhoncus elit nec
          faucibus bibendum. Proin cursus rutrum neque nec mattis.
        </p>
      </motion.div>
    </Section>
  );
};

export default About;
