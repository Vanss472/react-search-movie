import React from "react"
import * as DH from "./styled"

type DetailHeaderProp = {
  runtime: string
  year: string
  rated: string
}

const DetailHeader: React.FunctionComponent<DetailHeaderProp> = ({ runtime, year, rated }: DetailHeaderProp) => (
  <DH.List>
    <DH.ListItem>
      {runtime} <span>&bull;</span>
    </DH.ListItem>
    <DH.ListItem>
      {year} <span>&bull;</span>
    </DH.ListItem>
    <DH.ListItem>
      <DH.Rated>{rated}</DH.Rated>
    </DH.ListItem>
  </DH.List>
)

export default DetailHeader
