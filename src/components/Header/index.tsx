export function Header() {
  return (
    <div className="h-24 border-b-[1px] border-b-black-10">
      <div className="w-full h-full py-8 px-16 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-16">
          <div>
            <img src="../../../public/logo.svg" alt="" />
          </div>

          <nav>
            <ul className="flex flex-row items-center justify-between gap-8">
              <li className="text-black-100 text-menu-item font-bold font-montserrat">
                About Me
              </li>
              <li className="text-black-100 text-menu-item font-bold font-montserrat">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center justify-between gap-16">
          <div className="flex flex-row items-center justify-between gap-8">
            <span className="text-accent text-menu-item font-bold font-montserrat">
              hello@robertfox.design
            </span>
            <span className="text-black-100 text-menu-item font-bold font-montserrat">
              (704) 555-0127
            </span>
          </div>
          <div className="w-[1px] h-4 bg-black-25" />
          <div className="flex flex-row items-center justify-between gap-8">
            <img src="../../../public/social-twitter.svg" alt="" />
            <img src="../../../public/social-instagram.svg" alt="" />
            <img src="../../../public/social-dribbble.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
