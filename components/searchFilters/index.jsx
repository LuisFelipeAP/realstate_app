import { useEffect, useState } from 'react'
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { MdCancel } from 'react-icons/md'
import Image from 'next/image'

import { filterData, getFilterValues } from '../../utils/filterData'

const SearchFilters = () => {
    const [filters] = useState(filterData);

    const searchProperties = (filterValues) => {
        
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

export default SearchFilters;
