import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

import { filterData, getFilterValues } from '../../utils/filterData'

export default function SearchFilters() {
    const [filters] = useState(filterData);
    const router = useRouter();

    const searchProperties = (filterValues) => {
        const path = router.pathname;
        const { query } = router;

        const values = getFilterValues(filterValues);

        values.map((item) => {
            if(item.value && filterValues?.[item.name]) {
                query[item.name] = item.value
            }
        })

        router.push({ 
            pathname: path, 
            query: query,
        })
    }

    return (
        <Flex
            bg="gray.100"
            p="4"
            justifyContent="center"
            flexWrap="wrap"
        >
            {filters.map((filter) => {
                return (           
                    <Box 
                        key={filter.queryName}
                    >
                        <Select
                            w="fit-content"
                            p="2"
                            placeholder={filter.placeholder}
                            onChange={
                                (event) => searchProperties(
                                    { [filter.queryName]: event.target.value, }
                                )
                            }
                        >
                            {filter?.items?.map((item) => (
                                <option
                                    value={item.value}
                                    key={item.value}
                                >
                                    {item.name}
                                </option>
                            ))}
                        </Select>
                    </Box>
                )
            })}
        </Flex>
    )
}
