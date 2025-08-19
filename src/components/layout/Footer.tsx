

function Footer() : JSX.Element {
  const footerYear : number = new Date().getFullYear()

  return (
    <footer className="footer p-10 bg-gray-600 text-primary-content footer-center">
      <p>Copyright &copy; {footerYear} All rights reserved</p>
    </footer>
  )
}

export default Footer
