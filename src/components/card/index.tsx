'use client'

import Link from "next/link";
import Image from "next/image";
import { Property } from "@/core/domain/entities/Property";
import useCurrentImage from "@/hooks/useCurrentImage";
import { useRouter } from "next/navigation";

import styles from "./card.module.css";

type CardProps = {
  key: string,
  property: Property
}

const Card = ({ property: { id, name, price, year, address, images } }: CardProps) => {
  const { currentImage } = useCurrentImage(id, images)
  const router = useRouter();

  return (
    <div
      className={`${id ? styles.card : styles['card-add']}`}
      key={id}
      onClick={() => !id && router.push('/create')}
    >
      {id ?
        <>
          <button className={styles.edit} onClick={() => router.push(`/edit/${id}`)}>
            <Image
              key={`edit-${id}-${currentImage}`}
              src='/edit.svg'
              alt={name}
              width={20}
              height={20}
            />
          </button>
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
          <Link href={`detail/${id}`}>Ver más</Link>
        </> :
        <div className={styles.add}>
          <Image
            key='add-img'
            src={images[currentImage]}
            alt='add'
            width={50}
            height={50}
          />
        </div>
      }
    </div>
  );
}

export default Card
