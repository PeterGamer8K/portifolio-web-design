export function CTA() {
  return (
    <div className="w-full p-64  phone:p-16 tablet:p-32 flex flex-col gap-[96px]">
      <div className="flex flex-col items-start justify-center gap-8 max-w-[640px] ">
        <h4 className="text-h4 font-josefin font-bold w-full tablet:text-h4-tablet phone:text-h4-phone">
          I'm currently available form freelance work
        </h4>
        <p className="text-paragraph tablet:text-paragraph-tablet phone:text-paragraph-tablet text-black-75 font-montserrat w-full">
          If you’re looking for a designer and developer that likes to get stuff
          done, let’s talk.
        </p>
        <div className="flex flex-row phone:flex-col items-center phone:items-start justify-between gap-8 ">
          <span className="text-accent text-menu-item font-bold font-montserrat">
            hello@robertfox.design
          </span>
          <span className="text-black-100 text-menu-item font-bold font-montserrat">
            (704) 555-0127
          </span>
        </div>
      </div>
      <div>
        <button className="bg-brandGradient py-6 px-12 rounded-full flex flex-row items-center justify-center gap-4 shadow-button-shadow">
          <span className="text-white font-montserrat font-bold laptop:text-button-text phone:text-button-text-tablet text-paragraph-tablet before:content-['Let’s_talk'] sm:before:content-['Got_a_project_in_mind?_Let’s_talk!']"></span>
        </button>
      </div>
    </div>
  )
}
