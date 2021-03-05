import React from "react"
import Rating from "./Rating"
import { List, ListItem, FavBtn } from "./styled"
import IconFavorite from "../../UI/Icons/IconFavorite"

type RatingsBarProps = {
  id: string
  ratings: {
    Source: string
    Value: string
  }[]
}

const RatingsBar: React.FunctionComponent<RatingsBarProps> = ({ id, ratings }: RatingsBarProps) => (
  <List>
    {ratings
      .filter((rating, i) => i <= 1) // filtering using index
      .map((rating, i) => (
        <ListItem key={i}>
          <Rating rating={rating} />
        </ListItem>
      ))}
    <ListItem>
      <FavBtn buttonId={id} id={`favBtn-${id}`} prepend={<IconFavorite width={16} height={16} />} />
    </ListItem>
  </List>
)

export default RatingsBar
