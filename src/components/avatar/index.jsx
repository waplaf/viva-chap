import { useContext, useEffect, useState } from 'react'
import Link from 'next/link'
import { UserContext } from '../../state/contexts/UserContext'
import { getBase64 } from '../../controller'
import { S3 } from "../../config"

export default function Avatar({ src }) {
    const [file, setFile] = useState()
    const [preloader, setPreloader] = useState(false)
    const { state, dispatch } = useContext(UserContext)
    const [uri, setUri] = useState("");

    useEffect(() => {
        (async () => {
            try {
                setUri(file == undefined ? '' : await getBase64(file))
                dispatch({
                    type: 'setCropBase64',
                    payload: {
                        cropBase64: { uri, name: file.name }
                    }
                })
            } catch (error) {

            }

        })()
        setUri(src ? S3(src) : 'avatar.png')
    }, [file, uri])

    return (
        <div>

            <div className=" w-full flex justify-center">
                <div className=" w-[7rem] h-[7rem] rounded-full justify-center flex">


                    <img src={uri} alt='Avatar' className=" object-cover rounded-full" />
                    <div className=" relative inset-y-0  right-6 top-[65%]">
                        <label for='newphoto' className=" cursor-pointer w-8 h-8 bg-[#f0f2f5] flex justify-center items-center rounded-full">
                            <svg xmlns="http://www.w3.org/2000/svg" color="" viewBox="0 -960 960 960" height={24} width={24}><path d="M440-437ZM100-120q-24 0-42-18t-18-42v-513q0-23 18-41.5t42-18.5h147l73-87h274v60H348l-73 87H100v513h680v-414h60v414q0 24-18.5 42T780-120H100Zm680-574v-86h-86v-60h86v-87h60v87h87v60h-87v86h-60ZM439.5-267q72.5 0 121.5-49t49-121.5q0-72.5-49-121T439.5-607q-72.5 0-121 48.5t-48.5 121q0 72.5 48.5 121.5t121 49Zm0-60q-47.5 0-78.5-31.5t-31-79q0-47.5 31-78.5t78.5-31q47.5 0 79 31t31.5 78.5q0 47.5-31.5 79t-79 31.5Z" /></svg>
                        </label>
                    </div>
                </div>
            </div>
            <input id='newphoto' hidden name='file' type='file' accept=".jpg, .jpeg, .png, .PNG" onChange={v => setFile(v.target.files[0])} />

            {file == undefined ? <></> : <div className='w-full flex justify-center mt-2'>
                <Link href={'/chapo-done'} className="py-2.5 px-5 mr-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Alterar</Link>

            </div>}



        </div>
    )
}
