function Sort (){
    return (
        <div
        className="
          container
          my-5
          d-flex
          felx-row
          justify-content-end
          align-items-center
          sort
        "
      >
        <div className="d-flex">
          <h4>Sort by</h4>
          <div>
            <select id="sortingSelect">
              <option value=""></option>
              <option value="support">Support</option>
              <option value="medic">Medic</option>
              <option value="assault">Assault</option>
              <option value="defender">Defender</option>
              <option value="captain">Captain</option>
              <option value="witch">Witch</option>
            </select>
          </div>

          <button
            id="swap-sort-order-button"
            className="
              ipc-icon-button ipc-icon-button--base ipc-icon-button--onBase
            "
            title="Change sort by direction"
            role="button"
            tabIndex="0"
            aria-label="Change sort by direction"
            aria-disabled="false"
          >
            <svg
              width="24"
              height="24"
              xmlns="http://www.w3.org/2000/svg"
              className="ipc-icon ipc-icon--swap-vert"
              viewBox="0 0 24 24"
              fill="currentColor"
              role="presentation"
            >
              <path fill="none" d="M0 0h24v24H0V0z"></path>
              <path
                d="M16 17.01V11c0-.55-.45-1-1-1s-1 .45-1 1v6.01h-1.79c-.45 0-.67.54-.35.85l2.79 2.78c.2.19.51.19.71 0l2.79-2.78c.32-.31.09-.85-.35-.85H16zM8.65 3.35L5.86 6.14c-.32.31-.1.85.35.85H8V13c0 .55.45 1 1 1s1-.45 1-1V6.99h1.79c.45 0 .67-.54.35-.85L9.35 3.35a.501.501 0 0 0-.7 0z"
              ></path>
            </svg>
          </button>
        </div>
        <i
          className="fa-solid fa-filter"
          id="filter-icon"
        ></i>
      </div>
    )
}


export default Sort;