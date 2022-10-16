import {Text} from "./libs/Text"
import {Heading} from "./libs/Heading";
import {AlertButton, Button} from "./libs/Button";
import {TextArea} from "./libs/TextArea";

export const App = () => {
  return (
    <>
      <Text text="Hello, World!"/>
      <Heading tag="h1">見出し</Heading>
      <Button title="Button1" onClick={() => console.log('clicked!')} type="primary" width={96}/>
      <Button title="Button2" onClick={() => console.warn('clicked!')} type="secondary"/>
      <Button title="Button3" onClick={() => console.error('clicked!')} type="error"/>
      <AlertButton title="Button4" onClick={() => console.error('clicked!')} />
      <TextArea width={500} maxLength={10}/>
    </>
  )
}
