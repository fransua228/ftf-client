import React,{ReactElement,useCallback} from 'react'
import {useDropzone} from 'react-dropzone'
export default function RandomizeChange():ReactElement {
    const onDrop = useCallback((acceptedFiles:Array<File>) => {
        acceptedFiles.forEach((file:File) => {
          const reader = new FileReader()
          reader.onload = () => {
            console.log(reader.result)
          }
          reader.readAsText(file)
        })
    }, [])
    const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
    return <div className="random-change">
        <div {...getRootProps()}>
            <input {...getInputProps({multiple:false})} />
            <button>Выберить файл</button>
        </div>
        <button>Вставить из буфера</button>
</div>
}