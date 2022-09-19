import { HeaderDivider } from '../HeaderDivider'

export function Header() {
  return (
    <div className="h-24 border-b-[1px] border-b-black-10">
      <div className="w-full h-full py-8 px-16 flex flex-row items-center justify-between">
        <div className="flex flex-row items-center justify-between gap-16">
          <div>
            <img src="./logo.svg" alt="" />
          </div>

          <nav>
            <ul className="flex flex-row items-center justify-between gap-8 phone:hidden tablet:hidden">
              <li className="text-black-100 text-menu-item font-bold font-montserrat">
                About Me
              </li>
              <li className="text-black-100 text-menu-item font-bold font-montserrat">
                Contact
              </li>
            </ul>
          </nav>
        </div>
        <div className="flex flex-row items-center justify-between gap-16 ">
          <div className="flex flex-row items-center justify-between gap-8 tablet:hidden phone:hidden">
            <span className="text-accent text-menu-item font-bold font-montserrat">
              hello@robertfox.design
            </span>
            <span className="text-black-100 text-menu-item font-bold font-montserrat">
              (704) 555-0127
            </span>
          </div>
          <div className="tablet:hidden phone:hidden">
            <HeaderDivider />
          </div>
          <div className="flex flex-row items-center justify-between gap-8 phone:hidden">
            <img src="./social-twitter.svg" alt="" />
            <img src="./social-instagram.svg" alt="" />
            <img src="./social-dribbble.svg" alt="" />
          </div>
          <div className="laptop:hidden phone:hidden">
            <HeaderDivider />
          </div>
          <div>
            <img src="./menu.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}
