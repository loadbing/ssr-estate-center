'use client'

import Link from "next/link";
import Image from "next/image";
import { Property } from "@/core/domain/entities/Property";

import styles from "./card.module.css";
import { useEffect, useState } from "react";

type CardProps = {
  key: string,
  property: Property
}

const Card = ({ property: { id, name, price, year, address, images } }: CardProps) => {
  const [currentImage, setCurrentImage] = useState(0)
  console.log(id);

  useEffect(() => {
    if (id && images.length > 1) {
      setTimeout(() => {
        setCurrentImage(currentImage < images.length - 1 ? currentImage + 1 : 0);
      }, 4000);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentImage]);

  return (
    <div className={`${id ? styles.card : styles['card-add']}`} key={id}>
      {id ?
        <>
          <p>{name} - {year}</p>
          <Image
            key={`${id}-${currentImage}`}
            src={images[currentImage]}
            alt={name}
            width={50}
            height={50}
          />
          <span>{address}</span>
          <span className={styles.price}>${price}</span>
          <Link href={`/${id}`}>Ver más</Link>
        </> :
        <div className={styles.add}>
          <Image
            key='add-img'
            src={images[currentImage]}
            alt={name}
            width={50}
            height={50}
          />
        </div>
      }
    </div>
  );
}

export default Card
