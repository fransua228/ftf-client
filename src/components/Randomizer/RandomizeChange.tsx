import React,{ReactElement,useCallback,useContext, useEffect, useState} from 'react'
import useSound from 'use-sound'
import {observer} from 'mobx-react'
import Context from '../../index'
import {useDropzone} from 'react-dropzone'
import IconButton from '../universal/IconButton'
import melody1 from '../../audio/go-new-gambling.mp3'
import melody2 from '../../audio/gambling.mp3'
export default observer(function RandomizeChange():ReactElement {
  const {randomInfo} = useContext(Context)
  const [play1] = useSound(melody1,{volume:.1})
  const [play2] = useSound(melody2,{volume:.1})
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
      console.log(result)
      result.map(elem =>{
        if(elem) return elem
      })
      if(result.length < 1) result = ['Да','Нет']
      
      randomInfo.setElemArr(result)
    },[randomInfo.elemArr])
    const {getRootProps, getInputProps,isDragActive} = useDropzone({onDrop})
    return <div className="random-change">
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