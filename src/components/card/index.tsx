'use client'

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Property } from "@/core/domain/entities/Property";
import useCurrentImage from "@/hooks/useCurrentImage";
import { useRouter } from "next/navigation";
import Loader from "../loader";
import { deleteProperty } from "@/app/server/deleteProperty/deleteProperty";

import styles from "./card.module.css";

type CardProps = {
  key: string,
  property: Property,
  isAdmin: boolean
}

const Card = ({ property: { id, name, price, year, address, images }, isAdmin }: CardProps) => {
  const [loading, setLoading] = useState(false);
  const { currentImage } = useCurrentImage(id, images)
  const router = useRouter();

  const handleClick = async (page: string) => {
    setLoading(true)

    if (page == 'delete') {
      const result = await deleteProperty(id)
      if (result) {
        router.refresh()
      }
    } else {
      router.push(`${page}/${id}`)
    }
  }

  return (
    !loading ? <div
      className={`${id ? styles.card : styles['card-add']}`}
      key={id}
      onClick={() => !id && router.push('/create')}
    >
      {id ?
        <>
          {isAdmin && <>
            <button className={styles.edit} onClick={() => handleClick('edit')}>
              <Image
                key={`edit-${id}-${currentImage}`}
                src='/edit.svg'
                alt={name}
                width={20}
                height={20}
              />
            </button>

            <button className={styles.delete} onClick={() => handleClick('delete')}>
              <Image
                key={`delete-${id}-${currentImage}`}
                src='/delete.svg'
                alt={name}
                width={20}
                height={20}
              />
            </button>
          </>}
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
          <Link href={`detail/${id}`} onClick={() => handleClick('detail')}>Ver más</Link>
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
    </div> : <Loader />
  );
}

export default Card
