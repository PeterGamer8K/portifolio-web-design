import { PrimaryButton } from '../PrimaryButton'

export function Hero() {
  return (
    <div
      className="flex items-center justify-center"
      style={{
        height: 'calc(100vh - 96px)',
      }}
    >
      <div className="flex flex-col justify-center items-center gap-8">
        <h3 className="text-h3 font-thin font-josefin text-transparent  bg-clip-text bg-gradient-to-r bg-brandGradient">
          Hey, I'm Robert Fox
        </h3>
        <h1 className=" text-h1 font-josefin font-bold text-center max-w-[1288px] text-black-100">
          Freelance UI Designer & Web Developer
        </h1>
        <div className="flex flex-col justify-center items-center gap-24">
          <p className="text-paragraph font-montserrat w-[672px] text-center text-black-75">
            I help business grow by crafting amazing web experiences. If you’re
            looking for a designer and developer that likes to get stuff done,
            let’s talk.
          </p>
          <PrimaryButton text="See my work" hasIcon={true} />
        </div>
      </div>
    </div>
  )
}
