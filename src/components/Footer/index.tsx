import { SocialMediaIcons } from '../SocialMediaIcons'

export function Footer() {
  return (
    <div className="w-full border-black-10 border-t-[1px] py-8 px-16">
      <div className="flex flex-row items-center justify-between phone:gap-6 phone:flex-col-reverse">
        <div>
          <span className="text-black-75 font-montserrat text-[15px]">
            (c) Copyright Robert Fox 2022. All rights reserved.
          </span>
        </div>
        <div className="flex flex-row items-center justify-between gap-8">
          <span className="text-black-100 font-montserrat text-menu-item font-bold">
            Privacy Policy
          </span>
          <span className="text-black-100 font-montserrat text-menu-item font-bold">
            Terms & Conditions
          </span>
        </div>
        <SocialMediaIcons />
      </div>
    </div>
  )
}
