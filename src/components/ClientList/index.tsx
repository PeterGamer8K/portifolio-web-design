export function ClientList() {
  return (
    <div className="w-full h-[304px] bg-light-BG flex flex-col items-center justify-center">
      <span className="text-menu-item font-montserrat text-black-50 text-center">
        I had the pleasure of working with these awesome companies
      </span>

      <div className="flex items-center justify-center gap-16 mt-16 phone:flex-wrap">
        <img src="./amazon 1.svg" alt="Amazon icon" />
        <img src="./adobe 1.svg" alt="Adobe icon" />
        <img src="./apple 1.svg" alt="Apple icon" />
        <img src="./github 1.svg" alt="Github icon" />
        <img src="./microsoft 1.svg" alt="Microsoft icon" />
      </div>
    </div>
  )
}
