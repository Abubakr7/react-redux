import React from 'react'

const Page = ({ year, photos, getPhotos, isFetching }) => {
  const onBtnClick = e => {
    const year = +e.currentTarget.innerText
    getPhotos(year)
  }

  return (
    <div className="ib page">
      <p>
        <button className="btn" onClick={onBtnClick}>
          2018
        </button>{' '}
        <button className="btn" onClick={onBtnClick}>
          2017
        </button>{' '}
        <button className="btn" onClick={onBtnClick}>
          2016
        </button>{' '}
        <button className="btn" onClick={onBtnClick}>
          2015
        </button>{' '}
        <button className="btn" onClick={onBtnClick}>
          2014
        </button>
      </p>
      <h3>{year} год</h3>
      {isFetching ? <p>Загрузка...</p> : <p>У тебя {photos.length} фото.</p>}
    </div>
  )
}

export default Page
