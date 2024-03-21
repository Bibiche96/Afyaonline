

export default function Sidebar({ text }) {
    return (
        <div className="cursor-pointer hover:bg-gray-300 rounded-full ml-2 transition">
            <p>{text}</p>

        </div>
    )
}