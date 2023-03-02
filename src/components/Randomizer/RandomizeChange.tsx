import React,{ReactElement,useCallback,useContext, useEffect, useState} from 'react'
import useSound from 'use-sound'
import {observer} from 'mobx-react'
import Context from '../../index'
import {useDropzone} from 'react-dropzone'
import IconButton from '../universal/IconButton'
import Range from '../universal/Range'
import { getVolumeRange } from '../../functions/universal'
import melody1 from '../../audio/go-new-gambling.mp3'
import melody2 from '../../audio/gambling.mp3'

export default observer(function RandomizeChange():ReactElement {
  const {randomInfo} = useContext(Context)
  const [volume,setVolume] = useState(.1)
  const [prevVolume,setPrevVolume] = useState(volume)
  const [play1] = useSound(melody1,{volume})
  const [play2] = useSound(melody2,{volume})
    const setMuted = () => {
        if(volume > 0) {
            setPrevVolume(volume)
            setVolume(0)
        } else setVolume(prevVolume)    
    }
    const toArrayFormat = (arr:string):Array<string> => {
      let result =  arr.replaceAll('\r','').split('\n')
      result = [...new Set(result)].filter(elem => elem != '')
      if(result.length < 2) return randomInfo.defaultArr
      else return result
    }
    const onDrop = useCallback((acceptedFiles:Array<File>) => {
        acceptedFiles.forEach((file:File) => {
          const reader = new FileReader()
          reader.onload = () => {
            if(file.name.split('.')[file.name.split('.').length - 1] === 'txt') {
              randomInfo.setElemArr(toArrayFormat(String(reader.result)))      
            }
          }
          reader.readAsText(file)
        })
    }, [])
    const onBuffer = () => {
      navigator.clipboard.readText()
        .then(text => {
          randomInfo.setElemArr(toArrayFormat(text))
        })
        .catch(err => {
          console.log('Something went wrong', err);
        });
    }
    useEffect(()=>{if(randomInfo.checkClick) {play1()}},[randomInfo.checkClick])
    useEffect(()=>{if(randomInfo.resultCheck) {play2()}},[randomInfo.resultCheck])
    useEffect(()=> {
      let result = randomInfo.elemArr
      result.map(elem =>{
        if(elem) return elem
      })
      if(result.length < 1) result = ['Да','Нет']
      
      randomInfo.setElemArr(result)
    },[randomInfo.elemArr])
    const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
    return <div className="random-change">
      <div className="random-change-volume">
        <IconButton 
                    classDiv='random-volume-button' 
                    classI='icon-music-volume' 
                    valueClass={getVolumeRange(volume)} 
                    onClick={() => setMuted()}
                />
        <Range classDiv='random' width={volume} max={1} min={0} value={volume} step={0.05} onChange={(e:any)=> setVolume(e.target.value)}/>
      </div>
      
      <IconButton 
        classDiv='start-random' 
        classI='icon-music-play2' 
        onClick={() => {
          randomInfo.setCheckCLick(true)
          setTimeout(()=>randomInfo.setResultCheck(true),9200)   
        }}
      />
      <div {...getRootProps()}>
          <input {...getInputProps({multiple:false})} />
          <button className={isDragActive ? 'active' : ''}>Выберить файл</button>
      </div>   
      <button onClick={()=>{onBuffer()}}>Вставить из буфера</button>
</div>
})