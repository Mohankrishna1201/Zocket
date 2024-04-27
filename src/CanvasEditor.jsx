import React, { useState, useEffect, useRef } from 'react';
import { SketchPicker } from 'react-color';
import './App.css'
import Uploader from './Uploader';

function CanvasEditor() {

    const [captionText, setCaptionText] = useState('');
    const [ctaText, setCtaText] = useState('');
    const [backgroundColor, setBackgroundColor] = useState('#0369A1');


    const handleCaptionChange = (e) => {
        const newText = e.target.value;
        let brokenText = '';
        for (let i = 0; i < newText.length; i += 31) {
            brokenText += newText.slice(i, i + 31) + (i + 31 < newText.length ? '\n' : ''); // Add a line break after every 30 characters
        }
        setCaptionText(brokenText);
        // Update canvas with new caption text
    };

    const handleCtaChange = (e) => {
        setCtaText(e.target.value);
        // Update canvas with new CTA text
    };

    const handleBackgroundColorChange = (color) => {
        setBackgroundColor(color.hex);
        // Update canvas with new background color
    };


    function CanvasFinal() {
        return (

            <section
                style={{ backgroundColor: backgroundColor, }}
                className=" bg-opacity-25  flex flex-col justify-center w-[580px] bg-cover h-[580px] relative bg-[url('https://cdn.dribbble.com/userupload/14292981/file/original-f8ae73e7aa5d24b533452ab109ca70de.png?resize=1024x1024')]"
            >
                <div className="flex overflow-hidden relative flex-col items-center px-16 pb-16 w-[580px] h-[580px  ">

                    <div className="flex relative flex-col">
                        {/* Uploader component positioned above the content */}

                        <Uploader className='border-y-4 border-white' />

                        <h1 className=" mt-8  text-2xl text-white font-bold">{captionText}</h1>
                        <button
                            style={{ color: backgroundColor }}
                            className="justify-center self-center px-4 py-2 text-sm font-semibold bg-white rounded-[50px] mt-8"
                        >
                            {ctaText}
                        </button>
                    </div>
                </div>
            </section>
        );


    }


    return (
        <div className="mt-10 flex flex-row items-center justify-center gap-40 bg">
            <div className='canvas'>
                <CanvasFinal />
            </div>
            <div className="relative items-center justify-center bg-white p-14 rounded-md ">

                <div className=" items-center justify-center left-0 z-10 ">
                    <h1 className='text-center font-bold text-blue-500 '>Ad Customisation</h1>
                    <p className='text-center  text-gray-300 mb-5 '>Customize your ad and get the templates accordingly</p>
                    <p className='font-bold text-blue-500 mb-5 '>Choose your Background Color!!</p>
                    <SketchPicker
                        color={backgroundColor}
                        onChange={handleBackgroundColorChange}
                    />
                </div>

                <div className="mt-4 input flex flex-col w-fit stati justify-centerc ">
                    <label className="text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#FFFFFF] w-fit">Caption Text:</label>
                    <input
                        type="text"
                        value={captionText}
                        onChange={handleCaptionChange}
                        className="border-blue-500 input px-[10px] py-[11px] text-xs border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25"
                    />
                    <label className=" text-blue-500 text-xs font-semibold relative top-2 ml-[7px] px-[3px] bg-[#FFFFFF] w-fit">CTA Text:</label>
                    <input
                        type="text"
                        value={ctaText}
                        onChange={handleCtaChange}
                        className=" border-blue-500 input px-[10px] py-[11px] text-xs  border-2 rounded-[5px] w-[210px] focus:outline-none placeholder:text-black/25"
                    />
                </div>
            </div>

        </div>
    );
};



export default CanvasEditor;


