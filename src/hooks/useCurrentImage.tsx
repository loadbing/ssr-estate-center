import { useEffect, useState } from "react";

const useCurrentImage = (id: string, images: string[]) => {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        if (id && images.length > 1) {
            setTimeout(() => {
                setCurrentImage(currentImage < images.length - 1 ? currentImage + 1 : 0);
            }, 4000);
        }
        
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentImage]);

    return { currentImage };

}

export default useCurrentImage