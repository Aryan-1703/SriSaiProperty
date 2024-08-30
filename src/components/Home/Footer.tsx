import '../../styles/Home/Footer.css';
const Footer = () => {
  return (
    <footer>
      <p>Website Developed by Akshil Patel and Aryan Talpada.</p>
      <p className="contact-info">
        <a href="mailto:Akshilp05@gmail.com?subject=Contact%20from%20Website&body=Hi%20Akshil%20Pate,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding%20...">
          akshilp05@gmail.com
        </a>
        <span> | </span>
        <a href="mailto:aryan17032@gmail.com?subject=Contact%20from%20Website&body=Hi%20Aryan%20Talpada,%0A%0AI%20would%20like%20to%20get%20in%20touch%20with%20you%20regarding%20...">
          aryan17032@gmail.com
        </a>
      </p>
      <p>&copy; CMS Builds 2024. All rights reserved.</p>
    </footer>
  );
};
export default Footer;
