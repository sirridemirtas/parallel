import { useEffect, useState } from "react"

function useBodyScrollPosition() {
    const [scrollPosition, setScrollPosition] = useState({
        scrollX: undefined,
        scrollY: undefined,
        scrollHeight: undefined,
        offsetHeight: undefined
    })

    useEffect(() => {
        function handleScroll() {
            setScrollPosition({
                scrollLeft: document.body.scrollLeft,
                scrollTop: document.body.scrollTop,
                scrollHeight: document.body.scrollHeight,
                offsetHeight: document.body.offsetHeight
            })
        }
        document.body.addEventListener("scroll", handleScroll);
        handleScroll()

        return () => document.body.removeEventListener("scroll", handleScroll);
    }, [])

    return scrollPosition
    //return scrollPosition.scrollTop + scrollPosition.offsetHeight == scrollPosition.scrollHeight
}

export default useBodyScrollPosition