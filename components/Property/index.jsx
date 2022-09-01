import Link from 'next/link';
import image from 'next/image';
import { Box, Flex, Text, Avatar } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ({ 
    property: {
        coverPhoto,
        price,
        rentFrequency,
        rooms,
        title,
        baths,
        area,
        agency,
        isVerified,
        externalID,
    } }) => (
    <Link href={`/property/${externalID}`} passHref>
        {title}
    </Link>
)

export default Property;
