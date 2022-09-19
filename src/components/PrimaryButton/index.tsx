import { ButtonHTMLAttributes } from 'react'

interface PrimaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  text: string
  hasIcon?: boolean
}

export function PrimaryButton({
  text,
  hasIcon = false,
  ...rest
}: PrimaryButtonProps) {
  return (
    <button
      {...rest}
      className="bg-brandGradient py-6 px-12 rounded-full flex flex-row items-center justify-center gap-4 shadow-button-shadow"
    >
      <span className="text-white font-montserrat font-bold text-button-text phone:text-button-text-tablet sm:text-paragraph-tablet">
        {text}
      </span>
      {hasIcon && (
        <>
          <img src="./downward.svg" alt="Arrow down" />
        </>
      )}
    </button>
  )
}
