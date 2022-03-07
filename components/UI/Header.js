const Header = () => {
  return (
      <div className="flex items-center justify-start w-full overflow-none bg-blue-600 py-5 px-8 text-white text-2xl leading-10 Grotesk">
        <div className="inline-block border-solid">
          <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </div>
        <div className="inline-block mx-14">
          Faithhouse International Centre
        </div>
      </div>
  );
}

export default Header;