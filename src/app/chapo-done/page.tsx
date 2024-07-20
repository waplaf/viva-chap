"use client"

import React, { useState, useRef, useContext, useEffect } from 'react'
import ReactCrop, { centerCrop, makeAspectCrop, Crop, PixelCrop, convertToPixelCrop, } from 'react-image-crop'
import { canvasPreview } from '@/components/crop/canvasPreview'
import 'react-image-crop/dist/ReactCrop.css'
import { useDebounceEffect } from '@/components/crop/useDebounceEffect'
import { UserContext } from '@/state/contexts/UserContext'
import { getBase64 } from '@/controller'
import { Alert } from '@/components/alert'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import Button from '@/components/button'
import Preloader from '@/components/preloader'
function centerAspectCrop(
  mediaWidth: number,
  mediaHeight: number,
  aspect: number,

) {
  return centerCrop(
    makeAspectCrop(
      {
        unit: '%',
        width: 90,
      },
      aspect,
      mediaWidth,
      mediaHeight,

    ),
    mediaWidth,
    mediaHeight,
  )
}

export default function App() {
  const { state } = useContext(UserContext)
  const [isLoading, setIsLoading] = useState(false);
  const [imgSrc, setImgSrc] = useState(state.cropBase64.uri)
  const previewCanvasRef = useRef<HTMLCanvasElement>(null)
  const imgRef = useRef<HTMLImageElement>(null)
  const hiddenAnchorRef = useRef<HTMLAnchorElement>(null)
  const blobUrlRef = useRef('')
  const [crop, setCrop] = useState<Crop>()
  const [completedCrop, setCompletedCrop] = useState<PixelCrop>()
  const [scale, setScale] = useState(1)
  const [rotate, setRotate] = useState(0)
  const [aspect, setAspect] = useState<number | undefined>(16 / 16)
  const { back } = useRouter()







  function onSelectFile(e: React.ChangeEvent<HTMLInputElement>) {
    if (e.target.files && e.target.files.length > 0) {
      setCrop(undefined) // Makes crop preview update between images.
      const reader = new FileReader()
      reader.addEventListener('load', () =>
        setImgSrc(reader.result?.toString() || ''),
      )
      reader.readAsDataURL(e.target.files[0])
    }
  }

  function onImageLoad(e: React.SyntheticEvent<HTMLImageElement>) {
    if (aspect) {
      const { width, height } = e.currentTarget
      setCrop(centerAspectCrop(width, height, aspect))
    }
  }

  async function onDownloadCropClick() {
    if (!previewCanvasRef.current) {
      throw new Error('Crop canvas does not exist')
    }

    previewCanvasRef.current.toBlob(async (blob) => {
      if (!blob) {
        throw new Error('Failed to create blob');
      }
      if (blobUrlRef.current) {
        URL.revokeObjectURL(blobUrlRef.current);
      }


      const base64Data = await getBase64(blob);
      setIsLoading(true)
      const {data }= await axios.post("set-avatar-cv.php", JSON.stringify({ id: 4, name: state.cropBase64.name, base64Data }), state.data.token)
      setIsLoading(false)

      if (data == true) {

      } else {
        Alert("Ocorreu um erro inesperado ao tentar alterar a sua foto. Por favor, tente novamente.", 'error')
      }

      // blobUrlRef.current = URL.createObjectURL(blob);
      // hiddenAnchorRef.current!.href = blobUrlRef.current;
      // hiddenAnchorRef.current!.click();

    });

  }

  useDebounceEffect(
    async () => {
      if (
        completedCrop?.width &&
        completedCrop?.height &&
        imgRef.current &&
        previewCanvasRef.current
      ) {
        // We use canvasPreview as it's much faster than imgPreview.
        canvasPreview(
          imgRef.current,
          previewCanvasRef.current,
          completedCrop,
          scale,
          rotate,
        )
      }
    },
    100,
    [completedCrop, scale, rotate],
  )

  function handleToggleAspectClick() {
    if (aspect) {
      setAspect(undefined)
    } else if (imgRef.current) {
      const { width, height } = imgRef.current
      setAspect(16 / 9)
      const newCrop = centerAspectCrop(width, height, 16 / 9)
      setCrop(newCrop)
      // Updates the preview
      setCompletedCrop(convertToPixelCrop(newCrop, width, height))
    }
  }

  return (
    <div className="   h-screen flex flex-col items-center p-0">
      {
        imgSrc ?
          <>
            <br />
            <br />
            <br />
            <>


              {!!imgSrc && (
                <div className=' flex justify-center '>
                  <ReactCrop
                    crop={crop}
                    onChange={(_, percentCrop) => setCrop(percentCrop)}
                    onComplete={(c) => setCompletedCrop(c)}
                    aspect={aspect}
                  >
                    <img className=' '
                      ref={imgRef}
                      alt="Crop me"
                      src={imgSrc}
                      style={{ transform: `scale(${scale}) rotate(${rotate}deg)` }}
                      onLoad={onImageLoad}
                    />
                  </ReactCrop>
                </div>
              )}
              {!!completedCrop && (
                <>
                  <div>
                    <canvas hidden
                      ref={previewCanvasRef}
                      style={{
                        border: '1px solid black',
                        objectFit: 'contain',
                        width: completedCrop.width,
                        height: completedCrop.height,
                      }}
                    />
                  </div>
                  <div>



                    <div className=' w-full flex justify-end gap-2 p-6 '>


                      <button onClick={() => back()} className="py-2.5 px-5 mr-2 mb-2 text-sm  h-[42px] font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-purple-700 focus:z-10 focus:ring-4 focus:ring-gray-200 ">Cancelar</button>

                      <Button style={{ width: 90, height: 42 }} disabled={isLoading} loading={isLoading} onClick={onDownloadCropClick} label='Guardar' />

                    </div>
                    <a
                      ref={hiddenAnchorRef}
                      download
                      style={{
                        position: 'absolute',
                        top: '-200vh',
                        visibility: 'hidden',
                      }}
                    >
                      Hidden download
                    </a>
                  </div>
                </>
              )}
            </>
          </> : <>
            <div className=' h-screen w-full flex justify-center items-center'>
              <Preloader size={140} type={'blue'} />
            </div>
          </>
      }
    </div>


  )
}
