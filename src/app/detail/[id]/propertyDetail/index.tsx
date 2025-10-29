'use client'

import { Property } from "@/core/domain/entities/Property";
import useCurrentImage from "@/hooks/useCurrentImage";
import Image from "next/image";
import { useRouter } from "next/navigation";

import styles from "./propertyDetail.module.css";

type PropertyDetailProps = {
    property: Property,
    isAdmin: boolean
}

const PropertyDetail = ({ property: { id, name, year, address, price, images, owner }, isAdmin }: PropertyDetailProps) => {
    const { currentImage } = useCurrentImage(id, images)
    const router = useRouter();

    return (
        <section id="detail" className={styles.detail}>
            <div className={styles.property}>
                {isAdmin && <button className={styles.edit} onClick={() => router.push(`/edit/${id}`)}>
                    <Image
                        key={`edit-${id}-${currentImage}`}
                        src='/edit.svg'
                        alt={name}
                        width={20}
                        height={20}
                    />
                </button>}
                <p>{name} - {year}</p>
                <Image
                    key={`${id}-${currentImage}`}
                    src={images[currentImage]}
                    alt={name}
                    width={50}
                    height={50}
                />
                <span>📍{address}</span>
                <span>💲{price}</span>
                <p>Datos del propietario</p>
                <span>📝{owner.name}</span>
                <span>📞{owner.phone}</span>
            </div>
        </section>
    );
}

export default PropertyDetail
