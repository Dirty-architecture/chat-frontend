import Modal from "ui/modal";
import {useModalStore} from "./index.ts";


const ModalRoot = () => {
    const {open, title, content, hide} = useModalStore();
    return (
        <Modal
            isOpen={open}
            onClose={hide}
            title={title}
        >
            {content}
        </Modal>
    );
};

export default ModalRoot;
