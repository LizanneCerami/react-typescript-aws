import { HelloProps } from "../types/formDataTypes"

export const Hello = ({ firstName, lastName, age }:HelloProps) => {
  return(

    <>
      <h1>
        Good Aternoon, { firstName } { lastName }
      </h1>
    </>
  )
}