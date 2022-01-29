import { SimpleGrid, useDisclosure } from '@chakra-ui/react';
import { useState } from 'react';
import { Card } from './Card';
import { ModalViewImage } from './Modal/ViewImage';

interface Card {
  title: string;
  description: string;
  url: string;
  ts: number;
  id: string;
}

interface CardsProps {
  cards: Card[];
}

export function CardList({ cards }: CardsProps): JSX.Element {
  const [url, setUrl] = useState('');
  // TODO MODAL USEDISCLOSURE
  const { onOpen, isOpen, onClose } = useDisclosure();

  // TODO FUNCTION HANDLE VIEW IMAGE
  const handleViewImage = (urlImage): any => {
    setUrl(urlImage);

    onOpen();
  };

  return (
    <>
      <SimpleGrid columns={3} spacing="40px">
        {cards &&
          cards.map(card => (
            <Card key={card.id} data={card} viewImage={handleViewImage} />
          ))}
      </SimpleGrid>

      <ModalViewImage isOpen={isOpen} imgUrl={url} onClose={onClose} />
    </>
  );
}