import { PrimaryButton } from '../PrimaryButton'

export function CTA() {
  return (
    <div className="w-full p-64  flex flex-col gap-[96px]">
      <div className="flex flex-col items-start justify-center gap-8 max-w-[640px] ">
        <h4 className="text-h4 font-josefin font-bold w-full">
          I'm currently available form freelance work
        </h4>
        <p className="text-paragraph text-black-75 font-montserrat w-full">
          If you’re looking for a designer and developer that likes to get stuff
          done, let’s talk.
        </p>
        <div className="flex flex-row items-center justify-between gap-8">
          <span className="text-accent text-menu-item font-bold font-montserrat">
            hello@robertfox.design
          </span>
          <span className="text-black-100 text-menu-item font-bold font-montserrat">
            (704) 555-0127
          </span>
        </div>
      </div>
      <div>
        <PrimaryButton text="Got a project in mind? Lest's talk!" />
      </div>
    </div>
  )
}
