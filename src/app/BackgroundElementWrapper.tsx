
import { FC, ReactElement } from "react";

export const BackgroundElementWrapper: FC<{ children: ReactElement }> = ({ children }) => {

  return (
    <div className=" relative overflow-hidden ">
      {/*  */}
     
      <div
        style={{
          background: 'radial-gradient(ellipse farthest-corner at center center, rgba(124,62,255,1) 0%, rgba(0,255,0,0) 70%)',
        }}
        className=" -z-20 rounded-full absolute -top-20 -left-20 w-full h-full max-w-[500px] max-h-[500px] opacity-10" >
      </div>

      <div
        style={{
          background: 'radial-gradient(ellipse farthest-corner at center center, #BE229C 0%, rgba(0,255,0,0) 70%)',
        }}
        className="-1-20 absolute -top-20 -right-20 w-full h-full max-w-[412px] max-h-[412px] opacity-10" >
      </div>
      {children}
    </div>
  )
}
