import React, { useState } from 'react';

const Uploader = () => {
    const [image, setImage] = useState(null);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="max-w-md mx-auto">
            <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
                id="imageUpload"
            />

            <label htmlFor="imageUpload" className={`block mt-16 cursor-pointer w-full ${image ? 'h-[298px] border-y-2 border-l-2 pl-2 pt-2 pb-[-2] border-r-2' : ''}`}>
                {image ? (
                    <img src={image} alt="Preview" className="object-cover h-[298px] w-[963px]" />
                ) : (
                    <div className="p-4 text-center flex gap-2 z-40">
                        <img
                            loading="lazy"
                            src="https://cdn.dribbble.com/userupload/14295277/file/original-b4efd70ad1229453928f0e06f02fb8e4.png?resize=752x456"
                            alt="Best Non Veg Burger"
                            className="aspect-[1] object-cover h-[298px] w-[963px]"
                        />
                    </div>
                )}
            </label>
        </div>
    );
};

export default Uploader;
