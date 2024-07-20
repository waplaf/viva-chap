import { ReactNode } from "react"

type NavProps = {
    children: ReactNode;
}

export default function Container({ children }: NavProps) {
    return (
        <div className="px-3 sm:px-4 md:px-6 lg:px-10">{children}</div>
    )
}
