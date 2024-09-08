
interface TextComponentProps {
    title: string
    handleToggleState: () => void
}

const TextComponent: React.FC<TextComponentProps> = ({title, handleToggleState}) => {
    return (
        <p className='text-blue-900 cursor-pointer ml-1' onClick={handleToggleState}>{title}</p>
    )
}

export default TextComponent