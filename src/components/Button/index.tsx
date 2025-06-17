import {Button as HeroButton, ButtonProps} from "@heroui/button"

export const Button = ({...props}: ButtonProps) => {
    return (
        <HeroButton
            {...props}
            disableRipple
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-red-500 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-blue-600 after:z-[-1] after:transition after:duration-500 hover:after:scale-150 hover:after:opacity-0"
            size="lg"
        >
            {props.children}
        </HeroButton>
    )
}
