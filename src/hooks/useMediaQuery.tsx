import { useEffect, useState } from "react";
import { useRecoilState } from "recoil";
import { showMobileNavAtom } from "../../store/atoms";


export default function useMediaQuery() {

    const [isMobile, setIsMobile] = useState(false);
    const [isTablet, setIsTablet] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);
    const [_showNav, setShowMobileNav] = useRecoilState(showMobileNavAtom)

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 639) {
                setIsMobile(true);
                setIsTablet(false);
                setIsDesktop(false);
            } else if (window.innerWidth < 1024) {
                // setShowMobileNav(false)
                setIsMobile(false);
                setIsTablet(true);
                setIsDesktop(false);
            } else {
                // setShowMobileNav(false)
                setIsMobile(false);
                setIsTablet(false);
                setIsDesktop(true);
            }
        }
        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return {
        isMobile,
        isTablet,
        isDesktop
    }
}