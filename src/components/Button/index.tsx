import {Theme} from "@/styles/theme"
import {Button as HeroButton, ButtonProps} from "@heroui/button"

export const Button = ({...props}: ButtonProps) => {
    return (
        <HeroButton
            {...props}
            disableRipple
            className="relative overflow-visible rounded-full hover:-translate-y-1 px-12 shadow-xl bg-yellow-500 after:content-[''] after:absolute after:rounded-full after:inset-0 after:bg-green-600 after:z-[-1] after:transition after:duration-500 hover:after:scale-150 hover:after:opacity-0"
            size="lg"
            style={{
                background: Theme.mainColors.yellow,
            }}
        >
            {props.children}
        </HeroButton>
    )
}
