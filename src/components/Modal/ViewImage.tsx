import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  const handleCloseModal = (): void => {
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onClose={handleCloseModal} isCentered size="4xl">
      <ModalOverlay />
      <ModalContent bgColor="pGray.900">
        <ModalBody px={60}>
          <Image src={imgUrl} />
          <Link href={imgUrl} isExternal>
            Abrir original
          </Link>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}