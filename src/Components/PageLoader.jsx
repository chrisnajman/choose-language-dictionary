function PageLoader() {
  return (
    <div className="loader-container">
      <div className="spinner">
        <p className="visually-hidden">Page loading...</p>
        <span className="loading-message"></span>
      </div>
    </div>
  )
}

export default PageLoader
