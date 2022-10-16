import {Text} from "./libs/Text"
import {Heading} from "./libs/Heading";

export const App = () => {
  return (
    <>
      <Text text="Hello, World!" />
      <Heading tag="h1">見出し</Heading>
      <Heading tag="h2">
        <span>hello, 日本!</span>
      </Heading>
    </>
  )
}