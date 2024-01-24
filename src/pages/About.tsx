import imgOne from '../assets/img/about-1.jpg'
import imgTwo from '../assets/img/about-2.jpg'

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <h4>Who we are and why we do what we do!</h4>
      <p>
        Duis rutrum dictum libero quis rutrum. Etiam sed neque aliquam,
        sollicitudin ante a, gravida arcu. Nam fringilla molestie velit, eget
        pellentesque risus scelerisque a. Nam ac urna maximus, tempor magna et,
        placerat urna. Curabitur eu magna enim. Proin placerat tortor lacus, ac
        sodales lectus placerat quis.
      </p>
      <h3>Top trends</h3>
      <img src={imgOne} alt="about" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis.\n
        ● consectetur adipiscing elit. Aliquam placerat\n
        ● Lorem ipsum dolor sit amet consectetur
      </p>
      <h3>Produced with care</h3>
      <img src={imgTwo} alt="about" />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
        placerat, augue a volutpat hendrerit, sapien tortor faucibus augue, a
        maximus elit ex vitae libero. Sed quis mauris eget arcu facilisis
        consequat sed eu felis. Nunc sed porta augue. Morbi porta tempor odio,
        in molestie diam bibendu.
      </p>
    </div>
  );
};

export default About;
