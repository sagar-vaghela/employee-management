import Link from 'next/link'
import React from 'react'

function Nav() {
  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <button type="button" className="btn btn-link btn-lg">
                <Link href={"/"}>Leave Request</Link>
              </button>
            </li>
            <li class="nav-item">
              <button type="button" className="btn btn-link btn-lg">
                <Link href={"/help-desk"}>Help Desk</Link>
              </button>
            </li>
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Nav