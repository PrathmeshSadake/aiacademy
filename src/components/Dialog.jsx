import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import "../dialog.css";
import ContactForm from "./ContactForm";

// eslint-disable-next-line react/prop-types
const DialogDemo = ({ buttonText }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className=''>{buttonText}</button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className='DialogOverlay' />
      <Dialog.Content className='DialogContent'>
        <ContactForm close={Dialog.Close} showSelect />
        <Dialog.Close asChild>
          <button className='IconButton' aria-label='Close'>
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default DialogDemo;
