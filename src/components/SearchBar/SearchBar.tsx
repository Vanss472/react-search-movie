import React from "react"
import IconMagnifier from "../UI/Icons/IconMagnifier"
import Container from "../UI/Container"
import Flex from "../UI/Flex"
import * as S from "./styled"

type SearchBarProps = {
  value: string | number | string[]
  onChangeHandler: (event: React.ChangeEvent<HTMLInputElement>) => void
  onClickHandler: (event: React.MouseEvent<HTMLButtonElement>) => void
  onKeyDownHandler: (event: React.KeyboardEvent<HTMLInputElement>) => void
}

const SearchBar: React.FunctionComponent<SearchBarProps> = ({
  value,
  onChangeHandler,
  onClickHandler,
  onKeyDownHandler,
}: SearchBarProps) => (
  <S.Container>
    <Container>
      <Flex>
        <S.IconWrapper htmlFor="search" aria-labelledby="searchTitle">
          <IconMagnifier fill="var(--light-grey)" />
        </S.IconWrapper>
        <S.InputStyled
          type="text"
          name="search"
          placeholder="Search for movies"
          value={value}
          handleChange={onChangeHandler}
          handleKeyDown={onKeyDownHandler}
          autoComplete="off"
        />
        <S.ButtonStyled text="Search" type="submit" clicked={onClickHandler} />
      </Flex>
    </Container>
  </S.Container>
)

export default SearchBar
