import { useEffect } from "react"

function PageLoader() {
  useEffect(() => {
    const loader = document.getElementById("loader")
    const pageLoaded = document.getElementById("page-loaded")

    const handleTransitionEnd = () => {
      loader.remove()

      // For screen readers
      pageLoaded.textContent = "Page has loaded."
      pageLoaded.setAttribute("aria-hidden", "false")
    }

    const handleLoad = () => {
      loader.classList.add("loader-hidden")
    }

    loader.addEventListener("transitionend", handleTransitionEnd)
    window.addEventListener("load", handleLoad)

    return () => {
      loader.removeEventListener("transitionend", handleTransitionEnd)
      window.removeEventListener("load", handleLoad)
    }
  }, [])

  return (
    <>
      <div
        id="loader"
        className="loader"
      >
        <span className="visually-hidden">The page is loading...</span>
      </div>
      <span
        className="visually-hidden"
        aria-hidden="true"
        id="page-loaded"
      ></span>
    </>
  )
}

export default PageLoader
