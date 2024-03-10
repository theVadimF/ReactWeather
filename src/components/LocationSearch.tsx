import styles from 'src/app/app.module.scss'

import { Icon } from "@iconify/react"
import clsx from 'clsx'
import React, { useEffect, useRef, useState } from 'react';

interface LocationSearchInterface {
  setSearchState: React.Dispatch<React.SetStateAction<boolean>>
  searchState: boolean,
  setLocation: React.Dispatch<React.SetStateAction<string>>
}

export default function LocationSearch({searchState, setSearchState, setLocation}: LocationSearchInterface) {
  function close_search() {
    setSearchState(false);
    setLocationInput('');
  }

  function update_location() {
    if (locationInput.length > 0) {
      setLocation(locationInput);
      close_search()
    }
  }

  function handle_keydown(e: React.KeyboardEvent<HTMLInputElement>) {
    console.log(e);
    if (e.key == 'Enter') {
      update_location();
    }
  }

  const [locationInput, setLocationInput] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchState) {
      inputRef.current?.focus();
    }
  }, [searchState])

  return (
    <div className={clsx([styles.popup], {[styles.__open]: searchState})}>
      <div className={styles.shade} onClick={close_search}></div>
      <div className={styles.search_box}>
        <p className={styles.heading}>Enter Location</p>
        <input
          className={styles.search_input}
          placeholder="Location"
          value={locationInput}
          onChange={e => setLocationInput(e.target.value)}
          autoFocus={searchState}
          ref={inputRef}
          onKeyDown={handle_keydown}
        />
        <button
          disabled={locationInput.length <= 0}
          className={styles.submit_btn}
          onClick={update_location}>Set Location</button>
        <button className={styles.close_popup} onClick={close_search}>
          <Icon icon="material-symbols:close" className={styles.icon} />
        </button>
      </div>
    </div>
  )  
}
