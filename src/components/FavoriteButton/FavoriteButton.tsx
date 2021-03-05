import React from "react"
import { connect, ConnectedProps } from "react-redux"
import Button from "../UI/Button/Button"
import { toggleFavorite } from "../../state/actions"

const mapState = state => ({
  favorite: state.favorite.favorite,
})

const mapDispatch = dispatch => ({
  setToggleFav: favorite => {
    // console.log(typeof favorite)
    // console.log(id)
    return () => {
      dispatch(toggleFavorite(favorite))
    }
  },
})

const connector = connect(mapState, mapDispatch)
type PropsFromRedux = ConnectedProps<typeof connector>

type FavoriteButtonProps = PropsFromRedux & {
  className?: string | undefined
  id: string
  prepend?: React.ReactNode
  buttonId: string
}

const FavoriteButton: React.FunctionComponent<FavoriteButtonProps> = ({
  className,
  id,
  prepend,
  setToggleFav,
  favorite,
  buttonId,
}: FavoriteButtonProps) => {
  const isAdded = favorite ? `is-added` : ``
  const toggleText = favorite ? `Added` : `Add to favorite`

  return (
    <Button
      clicked={setToggleFav(!favorite)}
      className={`${className} ${isAdded}`}
      buttonId={buttonId}
      id={id}
      text={`${toggleText}`}
      type="button"
      prepend={prepend}
    />
  )
}

export default connector(FavoriteButton)
