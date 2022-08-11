function Footer() {
  return (
    <footer className="bg-violet-900" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-1 xl:gap-8">
        <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
        <p className="mt-4 text-lg leading-6 text-white">
        Talk to us
          </p>
          <h2 className="text-3xl lg:text-4xl text-white sm:text-4xl">
            <span className="block">If you have any kind of school</span>
          </h2>
          <p className="mt-4 text-lg leading-6 text-gray-100">
          Feel free to contact us if you have any school that you want 
          tranform it from paper to paperless activities. 
          </p>
          <div className='mt-6'></div>
          <a href="mailto:info@schoolsta.com"> <button className='justify-center py-3 px-4 bg-violet-900 text-white border-2 border-white rounded-lg hover:bg-violet-900 hover:text-indigo-100'>
                   Contact Us
                  </button></a>
        </div>
        </div>
        <p className="mt-20 text-base text-white xl:text-center">&copy; 2022 Schoolsta. All rights reserved.</p>
        <div className="mt-12 border-t border-gray-200 pt-8">
          
        </div>
      </div>
    </footer>
  )
}
export default Footer;