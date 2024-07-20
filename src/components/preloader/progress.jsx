
export default function Progress({ width }) {
    return (
        <>
            <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{ width }}> {width}</div>

        </>
    )
}
