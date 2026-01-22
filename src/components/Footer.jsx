const Footer = () => {
  return (
    <div className="mt-32 py-4 flex md:flex-row flex-col gap-6 md:gap-0 justify-between items-center border-t">
        <h1 className="text-2xl font-bold footer-title">Portofolio</h1>
        <div className="flex gap-7">
            <a className="footer-link" href="#beranda">Home</a>
            <a className="footer-link" href="#tentang">About</a>
            <a className="footer-link" href="#proyek">Project</a>
        </div>
        <div className="flex items-center gap-3">
            <a className="footer-link" href="https://github.com/rizkawldr" target="_blank" rel="noopener noreferrer">
                <i className="ri-github-fill ri-2x"></i>
            </a>
            <a className="footer-link" href="https://www.instagram.com/blusex0/" target="_blank" rel="noopener noreferrer">
                <i className="ri-instagram-fill ri-2x"></i>
            </a>
            <a className="footer-link" href="#">
                <i className="ri-reddit-fill ri-2x"></i>
            </a>
            <a className="footer-link" href="https://www.youtube.com/@kinnaaet" target="_blank" rel="noopener noreferrer">
                <i className="ri-youtube-fill ri-2x"></i>
            </a>
        </div>
    </div>
  );
};

export default Footer;