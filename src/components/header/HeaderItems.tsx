import { IconType } from "react-icons"

interface ItemProps {
    name: string
    Icon: IconType
}

const HeaderItems = ({ name, Icon }: ItemProps) => {
    return (
        <div className="text-white flex items-center gap-3 text-[14px] font-semibold cursor-pointer hover:underline underline-offset-8 mb-2 ">
            <Icon size={18} />
            <p className="">{name}</p>
        </div>
    )
}

export default HeaderItems
