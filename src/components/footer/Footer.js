import React from "react"

export default function Footer() {
  return (
    <div className=" text-cyan-darker static bottom-0 left-0 text-center mx-auto ">
      Developed and{" "}
      <a
        href=" "
        rel="noopener noreferrer"
        target="_blank"
        className="text-cyan-dark font-bold m-1"
      >
      </a>
      
      <span className="text-cyan-darker m-1">
        Coded by{" "}
        <span className="text-red-700" aria-label="love" role="img">
          ❤️
        </span>{" "}
        {" "}
      </span>
      <a
        href="https://github.com/rammyblog"
        rel="noopener noreferrer"
        target="_blank"
        className="text-cyan-dark font-bold ml-1 hover:font-bold"
      >Rahul Choudhary
      </a>
      .
    </div>
  )
}
